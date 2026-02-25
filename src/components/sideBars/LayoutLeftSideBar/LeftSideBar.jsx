import { Link, NavLink } from "react-router"
import { navigationPages } from "../../../routes/routeLinks"

import { DoorOpenIcon } from 'lucide-react'
import { SiteLogo } from '../../ui/siteLogo/SiteLogo'
import "./LeftSideBar.css"

export function LeftSideBar() {
  return (
    <aside className="leftNavBar">
      <nav>
        <SiteLogo />
        {navigationPages.map(item => (
          <NavLink key={item.href} className="navLink hoverEffect" to={item.href}>
            {item.icon}
            <span className='leftNavBarLinkName'>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <Link to='/login' className='loginLink'><DoorOpenIcon/><span>Login</span></Link>
    </aside>
  )
}
