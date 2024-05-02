import { useState } from "react";
import { Card } from "react-bootstrap";
import classNames from "classnames";
import { useAsyncDebounce } from "react-table";

// components 
import { records as data, } from "./data";
import ContractCustomeTable from "../../Contracts/ContractCustomeTable";
import CustomTable from "../../../../components/CustomTable";
import CustomRoleShowTable from "./CustomRoleShowTable";




// dummy records
const columns = [
    {
        Header: "#",
        accessor: "#",
        sort: true,
    },
    {
        Header: "Role Name",
        accessor: "role name",
        sort: true,
    },
    {
        Header: "Action",
        accessor: "",
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
const RoleTable = () => {
    return (
        <>
            <Card className="px-3 border-0">
                <div className="">
                    <CustomRoleShowTable
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

export default RoleTable;


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
