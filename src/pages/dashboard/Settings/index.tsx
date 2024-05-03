
import { Card, Col, Row } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
// component
import SettingsMenu from "./SettingsMenu";
import GeneralSettingsShow from "./GeneralSettingsShow";


const SettingsDashboard = () => {
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
                            <Col lg={5} xxl={3}>
                                <SettingsMenu />
                            </Col>
                            <Col lg={7} xxl={9}>
                                <div className="card bg-primary m-0">
                                    <h4 className=" ps-3 text-white fw-normal" style={{ padding: "1px" }}>General Settings</h4>
                                </div>
                                <GeneralSettingsShow />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row >
        </>
    );
};

export default SettingsDashboard;