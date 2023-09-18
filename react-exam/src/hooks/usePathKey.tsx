
import { useLocation } from 'react-router-dom';

// 获取对应菜单key
function usePathKey() {
    const location = useLocation();
    const key: string = location.pathname.split('/')[1];

    return key
}

export default usePathKey