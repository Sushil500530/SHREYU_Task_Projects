import { NavLink } from "react-router-dom";




const SettingsMenu = () => {



    return (
        <>
            <div className="d-flex flex-column gap-0">
                <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                    <i className="bi bi-gear-fill"></i>
                    Message
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                    <i className="bi bi-file-earmark-fill"></i>
                    Reports
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                    <i className="bi bi-envelope-fill"></i>
                    Emails
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                    <i className="bi bi-chat-dots-fill"></i>
                    SMS
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                    <i className="bi bi-whatsapp"></i>
                    Whatsapp
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "position-relative d-flex gap-1 align-items-center justify-content-start me-3 bg-primary text-white fs-5 px-3 py-1"
                            : "fs-5 px-3 py-1 d-flex gap-1"
                    } >
                    <i className="bi bi-key-fill"></i>
                    Api Keys
                </NavLink>
            </div>
        </>
    );
};

export default SettingsMenu;
