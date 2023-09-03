import { routersData } from "@/config";

export default function findRouter(key: string) {
    return routersData.filter((item) => item.name === key)[0];
};

