
import { Card, Col, Row } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";

const SettingsDashboard = () => {
    // const [dateRange, setDateRange] = useState<any>([
    //     new Date(),
    //     new Date().setDate(new Date().getDate() + 7),
    // ]);
    // const [startDate, endDate] = dateRange;

    // /*
    //  * handle date change
    //  */
    // const onDateChange = (date: Date) => {
    //     if (date) {
    //         setDateRange(date);
    //     }
    // };
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/settings" },
                    { label: "Settings", path: "/dashboard/settings", active: true },
                ]}
                title={"Settings"}
            />
            <Row>
                <Col md={12} className="px-0 ">
                    <div className="card bg-primary m-0">
                        <h4 className=" ps-3 text-white fw-normal" style={{ padding: "3px" }}>Settings</h4>
                    </div>
                </Col>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col lg={3}>
                                <Col md={12}>
                                    <div className="card bg-primary m-0">
                                        <h4 className=" ps-3 text-white fw-normal" style={{ padding: "3px" }}> General
                                        </h4>
                                    </div>
                                    <div className="card bg-primary m-0">
                                        <h4 className=" ps-3 text-white fw-normal" style={{ padding: "3px" }}>Emails</h4>
                                    </div>
                                    <div className="card bg-primary m-0">
                                        <h4 className=" ps-3 text-white fw-normal" style={{ padding: "3px" }}> Reports</h4>
                                    </div>
                                    <div className="card bg-primary m-0">
                                        <h4 className=" ps-3 text-white fw-normal" style={{ padding: "3px" }}> SMS</h4>
                                    </div>
                                    <div className="card bg-primary m-0">
                                        <h4 className=" ps-3 text-white fw-normal" style={{ padding: "3px" }}> Whatsapp</h4>
                                    </div>
                                    <div className="card bg-primary m-0">
                                        <h4 className=" ps-3 text-white fw-normal" style={{ padding: "3px" }}> Api Keys</h4>
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={9}>
                                <Col md={12}>
                                    <div className="card bg-primary m-0">
                                        <h4 className=" ps-3 text-white fw-normal" style={{ padding: "3px" }}>General Settings</h4>
                                    </div>
                                    <Card>
                                        <Card.Body>
                                            <div className="card bg-primary m-0">
                                                <h4 className=" ps-3 text-white fw-normal" style={{ padding: "3px" }}>General Settings</h4>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row >
        </>
    );
};

export default SettingsDashboard;