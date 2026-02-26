import { Outlet } from "react-router"

import { LeftSideBar } from '../sideBars/ASDlayoutLeftSideBar/LeftSideBar'
import { RightSideBar } from '../sideBars/layoutRightSideBar/RightSideBar'
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
