import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { superAdminMenus } from '@/config';
import { useNavigate } from 'react-router-dom';
import findRouter from '@/hooks/findRouter';

const items: MenuProps['items'] = superAdminMenus;

const App: React.FC = () => {
    const Navigate = useNavigate();
    const [current, setCurrent] = useState('subject_add');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        const path = findRouter(e.key).path;
        Navigate(path)
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;