import { routersData } from "@/config";
import { useLocation } from "react-router-dom";

export default function useIsShowMenu() {
    const location = useLocation();
    const key = location.pathname.split('/')[1];
    if (!key) return false;
    return routersData.filter((item) => item.name === key)[0].hasMenu;
};

