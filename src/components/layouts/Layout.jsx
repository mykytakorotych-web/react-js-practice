import { Outlet } from "react-router"

import { LeftSideBar } from '../sideBars/layoutLeftSideBar/LeftSideBar'
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
