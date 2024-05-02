"use"
import React, { useState } from 'react';


// components
import { Button, Card, Col, Form, Row, } from "react-bootstrap";
import PageTitle from '../../../components/PageTitle';
import ContractsTable, { GlobalFilter } from './ContractsTable';
import FileUploader from '../../../components/FileUploader';




const columns = [
    {
        Header: "ID",
        accessor: "id",
        sort: true,
    },
    {
        Header: "Name",
        accessor: "name",
        sort: true,
    },
    {
        Header: "Phone Number",
        accessor: "phone",
        sort: false,
    },
    {
        Header: "Age",
        accessor: "age",
        sort: true,
    },
    {
        Header: "Company",
        accessor: "company",
        sort: false,
    },
];

const sizePerPageList = [
    {
        text: "5",
        value: 5,
    },
    {
        text: "10",
        value: 10,
    },
    {
        text: "25",
        value: 25,
    },
    {
        text: "All",
        value: 10,
    },
];



const ContractsDashboard = () => {

    const [newTaskDetails, setNewTaskDetails] = useState<any>(null);
    // add task 
    const newTask = (status: string, queue: string) => {
        setNewTaskDetails({
            dueDate: new Date(),
            //   userAvatar: [defaultAvatar],
            status: status,
            queue: queue,
        });
        // setNewTaskModal(true);
    };

    return (
        <>

            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/Contracts" },
                    { label: "Contracts", path: "/dashboard/contracts", active: true },
                ]}
                title={"Contracts"}
            />
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="float-sm-start">
                                <label className="form-check-label">
                                    Contracts Table
                                </label>
                            </div>
                            <div className="float-sm-end">
                                <Col className="text-sm-end mt-sm-0 mt-2">
                                    <Button onClick={() => newTask("Pending", "todoTasks")}>
                                        <i className="uil-plus me-1"></i>Add New
                                    </Button>
                                </Col>
                            </div>
                        </Card.Body>
                        <hr />
                        <>
                            <div className="d-flex justify-content-between align-items-center px-3 pb-3 ">
                                <div className="d-flex justify-content-start align-items-center gap-1">
                                    Show <Form.Control className='w-25' type="number" placeholder="10" required /> records
                                </div>
                                <div className='d-flex align-items-center gap-1 bg-black text-white px-2 rounded-1'>
                                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0'>
                                        <i className='uil uil-copy text-white fs-4'></i>
                                        Coppy
                                    </Button>
                                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0'>
                                        <i className='uil uil-file-alt text-white fs-4'></i>
                                        Exel
                                    </Button>
                                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0'>
                                        <i className='uil uil-copy text-white fs-4'></i>
                                        CVS
                                    </Button>
                                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0'>
                                        <i className='uil uil-file-alt text-white fs-4'></i>
                                        PDF
                                    </Button>
                                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0 btn-hover'>
                                        <i className='uil uil-eye text-white fs-4'></i>
                                        eye
                                    </Button>

                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <GlobalFilter setGlobalFilter={5} searchBoxClass="suhil" />
                                </div>
                            </div>
                            <ContractsTable />
                        </>


                    </Card>

                </Col>
            </Row>



        </>
    );
};

export default ContractsDashboard;