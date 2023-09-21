import { Outlet } from "react-router-dom";
import Header from './header/index';
import Menu from './menu';
import useIsShowMenu from '../hooks/useIsShowMenu';
import useIsShowHeader from '../hooks/useIsShowHeader';
import { useEffect } from 'react';
import { get_menu_async, select_user_info } from '../store/slice/user';
import { useAppDispatch, useAppSelector } from '../store/index';
import classnames from 'classnames'
// Layout专门专注壳子
function Layout() {
    const dispatch = useAppDispatch()
    const UserInfo = useAppSelector(select_user_info)
    useEffect(() => {
        dispatch(get_menu_async())
    }, [])

    const is_show_menu = useIsShowMenu()
    const is_show_header = useIsShowHeader()
    return (
        <div className={classnames({
            layout: true,
            hide: !UserInfo._id
        })}>
            {
                is_show_header ? (
                    <div className="header_wrap">
                        <Header />
                    </div>
                ) : null
            }

            <div className="outlet_wrap">
                {
                    is_show_menu ? (
                        <div className="nav_wrap">
                            <Menu />
                        </div>
                    ) : null
                }
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;