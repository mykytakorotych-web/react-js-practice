import { NavLink } from "react-router"
import { navigationPages } from "../../../routes/routeLinks"
import { SiteLogo } from "../../SiteLogo/SiteLogo"

export function LeftSideBar() {
  return (
    <aside className="leftNavBar">
      <nav>
        <SiteLogo />
        {navigationPages.map(item => (
          <NavLink key={item.href} className="navLink hoverEffect" to={item.href}>
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
