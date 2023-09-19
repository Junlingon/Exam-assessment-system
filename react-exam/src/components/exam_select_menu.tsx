import { Menu } from "antd";
import type { MenuProps } from 'antd';
import styles from '@/page/exam_select/index.module.scss'
import { useEffect, useState } from "react";
import usePathKey from "@/hooks/usePathKey";
import { useNavigate } from "react-router-dom";
import { examSelectMenus } from "../config";
import findRouter from "@/hooks/findRouter";


function ExamSelectMenu() {
  const [current, setCurrent] = useState('');
  const Navigate = useNavigate()
  const menus = examSelectMenus
  const path_key = usePathKey()

  const handleToggle: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    Navigate(findRouter(e.key).path)
  }

  useEffect(() => {
    if (path_key) {
      setCurrent(path_key)
    }
  }, [path_key])
  return (
    <Menu
      style={{
        borderBottom: "1px solid #D8D8D8",
        color: "#5F6367",
        fontSize: "16px",
      }}
      onClick={handleToggle}
      className={styles.menu}
      mode="horizontal"
      selectedKeys={[current]}
      items={menus}
    ></Menu>
  )
}
export default ExamSelectMenu