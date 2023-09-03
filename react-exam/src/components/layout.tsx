import { Outlet } from "react-router-dom";
import Header from "./header";
import Menu from "./menu";

function Layout() {
    return <div className="layout">
        <div className="header_wrap">
            <Header />
        </div>
        <div className="nav_wrap">
            <Menu />
        </div>
        <div className="outlet_wrap">
            <Outlet />
        </div>
    </div>
};

export default Layout;