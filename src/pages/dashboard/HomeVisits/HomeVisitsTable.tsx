import { Card } from "react-bootstrap";
import { records as data, } from "./data";
import HomeVisitsCustomTable from "./HomeVisitsCustomTable";



// dummy records
const columns = [
    {
        Header: "#",
        accessor: "#",
        sort: true,
    },
    {
        Header: "Client Name",
        accessor: "client name",
        sort: true,
    },
    {
        Header: "Phone",
        accessor: "phone",
        sort: true,
    },
    {
        Header: "Address",
        accessor: "address",
        sort: true,
    },
    {
        Header: "Visit Date",
        accessor: "visit date",
        sort: true,
    },
    {
        Header: "Viewed",
        accessor: "viewed",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
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
const HomeVisitsTable = () => {

    return (
        <Card className="px-3 border-0">
            <div className="">
                <HomeVisitsCustomTable
                    columns={columns}
                    data={data}
                    pageSize={8}
                    sizePerPageList={sizePerPageList}
                    isSortable={true}
                    pagination={true}
                />
            </div>
        </Card>
    );
};

export default HomeVisitsTable;