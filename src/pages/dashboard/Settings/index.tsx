import { useState } from "react";

import { Card, Col, Row } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
// dummy data
import SettingsShow from "./SettingsShow";
import SettingsMenu from "./SettingsMenu";


const SettingsDashboard = () => {

    /**
     * On user change
     */

    //link components
    // const menubar = [
    //     {
    //         key: "settings-general",
    //         label: "General",
    //         url: "/apps/calendar",
    //     },
    //     {
    //         key: "settings-general",
    //         label: "General",
    //         url: "/apps/calendar",
    //     },
    //     {
    //         key: "settings-general",
    //         label: "General",
    //         url: "/apps/calendar",
    //     },
    //     {
    //         key: "settings-general",
    //         label: "General",
    //         url: "/apps/calendar",
    //     },
    //     {
    //         Header: "Name",
    //         accessor: "name",
    //         sort: true,
    //     },
    //     {
    //         Header: "Email",
    //         accessor: "email",
    //         sort: true,
    //     },
    //     {
    //         Header: "Role",
    //         accessor: "role",
    //         sort: true,
    //     },
    //     {
    //         Header: "Action",
    //         accessor: "",
    //     },

    // ];
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
                            {/* <Col lg={3}> */}
                                <Row>
                                    <Col lg={5} xxl={3}>
                                        <SettingsMenu  />
                                    </Col>
                                    <Col lg={7} xxl={9}>
                                        <SettingsShow />
                                    </Col>
                                </Row>
                                {/* <Col md={12}>
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
                                </Col> */}
                            {/* </Col> */}
                            {/* <Col lg={9}>
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
                            </Col> */}
                        </Row>
                    </Card.Body>
                </Card>
            </Row >
        </>
    );
};

export default SettingsDashboard;