import React, { useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { superAdminMenus } from '@/config';
import { useNavigate } from 'react-router-dom';
import findRouter from '@/hooks/findRouter';
import { useAppDispatch, useAppSelector } from '@/store';
import { select_menu, select_menu_active_item, set_active_key } from '@/store/slice/menu';
import usePathKey from '@/hooks/usePathKey';

const items: MenuProps['items'] = superAdminMenus;

const App: React.FC = () => {
    const Navigate = useNavigate();
    const dispatch = useAppDispatch();
    const menus = useAppSelector(select_menu);
    const activeItem = useAppSelector(select_menu_active_item);
    const path_key = usePathKey();

    useEffect(() => {
        if (path_key) {
            dispatch(set_active_key(path_key))
        }
    }, []);

    const onClick: MenuProps['onClick'] = (e) => {
        const path = findRouter(e.key).path;
        Navigate(path);
        dispatch(set_active_key(e.key));
    };

    return <Menu onClick={onClick} selectedKeys={[path_key]} mode="horizontal" items={items} />;
};

export default App;