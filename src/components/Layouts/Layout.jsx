import { Outlet } from "react-router"

import { LeftSideBar } from '../sideBars/LayoutLeftSideBar/LeftSideBar'
import { RightSideBar } from '../sideBars/LayoutRightSideBar/RightSideBar'
import "./Layout.css"

export default function Layout() {
  return (
    <div className='layout'>
      <LeftSideBar/>
      <Outlet />
      <RightSideBar/>
    </div>
  )
}
