import { useState } from "react";
import { Card } from "react-bootstrap";
import classNames from "classnames";
import { useAsyncDebounce } from "react-table";
import { records as data, } from "./data";
// components 
import CustomeTable from "../../../components/CustomTable";

const ContractsTable = (props: any) => {
    interface TableRecords {
        id: number;
        firstName: string;
        lastName: string;
        userName: string;
        sizePerPageList?: {
            type: String;
            value: number;
        }[];
    }

    // dummy records
    const records: TableRecords[] = [
        { id: 1, firstName: "Mark", lastName: "Otto", userName: "@mdo" },
        { id: 2, firstName: "Jacob", lastName: "Thornton", userName: "@fat" },
        { id: 3, firstName: "Larry", lastName: "the Bird", userName: "@twitter" },
        { id: 3, firstName: "Larry", lastName: "the Bird", userName: "@twitter" },
        { id: 3, firstName: "Larry", lastName: "the Bird", userName: "@twitter" },
        { id: 3, firstName: "Larry", lastName: "the Bird", userName: "@twitter" },
        { id: 3, firstName: "Larry", lastName: "the Bird", userName: "@twitter" },
    ];

    const columns = [
        {
          Header: "#",
          accessor: "#",
          sort: true,
        },
        {
          Header: "Title",
          accessor: "title",
          sort: true,
        },
        {
          Header: "Discount",
          accessor: "discount",
          sort: false,
        },
        {
          Header: "Action",
          accessor: "action",
          sort: true,
        },
      ];
      
      const sizePerPageList = [
        {
          text: "8",
          value: 8,
        },
        {
          text: "15",
          value: 15,
        },
        {
          text: "25",
          value: 25,
        },
        {
          text: "All",
          value: data.length,
        },
      ];
    return (
        <>
            <Card className="px-3 border-0">
                <div className="">
                    {/* <Table className="mb-0 border" striped>
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="border-1" style={{ width: "0px" }}>#</th>
                                <th className="border-1" style={{ width: "45%" }} scope="col">Title</th>
                                <th className="border-1" style={{ width: "45%" }} scope="col">Discount</th>
                                <th className="border-1" style={{ width: "10%" }} scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border-1">
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row" className="border-1">{record.id}</th>
                                        <td className="border-1">{record.firstName}</td>
                                        <td className="border-1">{record.lastName}</td>
                                        <td className="border-1 d-flex align-items-center justify-content-center gap-2">

                                            <>
                                                <Button variant="primary" className="btn-sm d-flex align-items-center justify-content-center " style={{ width: "30px", height: "30px", borderRadius: "100%" }}>
                                                    <i className="uil uil-edit" style={{ fontSize: "14px" }}></i>
                                                </Button>
                                                <Button variant="danger" className="btn-sm d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", borderRadius: "100%" }}>
                                                    <i className="uil uil-trash-alt" style={{ fontSize: "14px" }}></i>

                                                </Button>
                                            </>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table> */}
                    <CustomeTable
                        columns={columns}
                        data={data}
                        pageSize={8}
                        sizePerPageList={sizePerPageList}
                        isSortable={true}
                        pagination={true}
                    />
                </div>
            </Card>
        </>
    );
};

export default ContractsTable;



// Define a default UI for filtering
export const GlobalFilter = ({
    setGlobalFilter,
    searchBoxClass,
}: any) => {
    const [value, setValue] = useState<any>();
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <div className={classNames(searchBoxClass)}>
            <span className="d-flex align-items-center">
                Search :{" "}
                <input
                    type="search"
                    value={value || ""}
                    onChange={(e: any) => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={` `}
                    className="form-control w-auto ms-1"
                />
            </span>
        </div>
    );
};
