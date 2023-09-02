import { Outlet } from "react-router-dom";

function Layout() {
    return <div className="layout">
        <div className="header_wrap">
            head
        </div>
        <div className="nav_wrap">
            nav
        </div>
        <div className="outlet_wrap">
            <Outlet />
        </div>
    </div>
};

export default Layout;