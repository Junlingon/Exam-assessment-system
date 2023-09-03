import { useLocation } from "react-router-dom";
import findRouter from "./findRouter";

export default function useIsShowMenu() {
    const location = useLocation();
    console.log(location)
    const key = location.pathname.split('/')[1];
    if (!key) return false;

    return findRouter(key).hasMenu;
};

