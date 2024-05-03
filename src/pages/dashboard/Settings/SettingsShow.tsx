import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Card, Dropdown, Row, Col } from "react-bootstrap";

// components
import Scrollbar from "../../../components/Scrollbar";







// ChatArea
const SettingsShow = () => {

    return (
        <>
            <Card>
                <Card.Body>
                    <div className="mt-1">
                        <Scrollbar style={{ height: "509px", width: "100%" }}>
                            <ul className="conversation-list px-0 h-100">
                                <h4>
                                    what is this
                                </h4>
                            </ul>
                        </Scrollbar>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default SettingsShow;
