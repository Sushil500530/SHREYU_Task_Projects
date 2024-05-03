import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import classNames from "classnames";
import { NavLink } from "react-router-dom";




const SettingsMenu = () => {



    return (
        <>
            <Row>
               
                <NavLink
                    to="/dashboard/settings/message"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                    <i className="bi bi-gear-fill"></i>
                    Message
                </NavLink>
                <NavLink
                    to="/dashboard/settings/message"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                  <i className="bi bi-file-earmark-fill"></i>
                    Reports
                </NavLink>
                <NavLink
                    to="/dashboard/settings/message"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
              <i className="bi bi-envelope-fill"></i>
                    Emails
                </NavLink>
                <NavLink
                    to="/dashboard/settings/message"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                   <i className="bi bi-chat-dots-fill"></i>
                    SMS
                </NavLink>
                <NavLink
                    to="/dashboard/settings/message"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                   <i className="bi bi-whatsapp"></i>
                    Whatsapp
                </NavLink>
                <NavLink
                    to="/dashboard/settings/message"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                   <i className="bi bi-key-fill"></i>
                    Api Keys
                </NavLink>
            </Row>
        </>
    );
};

export default SettingsMenu;
