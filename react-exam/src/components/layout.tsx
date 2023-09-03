import { Outlet } from "react-router-dom";
import Header from "./header";
import Menu from "./menu";
import useIsShowMenu from "@/hooks/useIsShowMenu";

function Layout() {

    const is_show_menu = useIsShowMenu();

    return <div className="layout">
        <div className="header_wrap">
            <Header />
        </div>
        {is_show_menu && <div className="nav_wrap">
            <Menu />
        </div>}
        <div className="outlet_wrap">
            <Outlet />
        </div>
    </div>
};

export default Layout;