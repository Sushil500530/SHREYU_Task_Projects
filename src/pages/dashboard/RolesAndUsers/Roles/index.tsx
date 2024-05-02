import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import PageTitle from "../../../../components/PageTitle";
import MidItemBar from "../../Contracts/MidItemBar";
import RoleTable from "./RoleTable";
// components 




const RolesDashboard = () => {
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
                    { label: "Dashboard", path: "/dashboard/roles-&-users/roles" },
                    { label: "Patients", path: "/dashboard/roles-&-users/roles", active: true },
                ]}
                title={"Roles"}
            />
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="float-sm-start">
                                <label className="form-check-label">
                                Roles Table
                                </label>
                            </div>
                            <div className="float-sm-end">
                                <Col className="text-sm-end mt-sm-0 mt-2">
                                    <Button onClick={() => newTask("Pending", "todoTasks")}>
                                        <i className="uil-plus me-1"></i>Create
                                    </Button>
                                </Col>
                            </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body>
                            {/* <PatientsImageLoad /> */}
                        </Card.Body>
                        <MidItemBar />
                        <RoleTable />
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default RolesDashboard;