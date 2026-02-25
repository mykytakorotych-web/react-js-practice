import { Link, NavLink, useNavigate } from "react-router"
import { navigationPages } from "../../../routes/routeLinks"

import { DoorOpenIcon, LogOut } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import {
  logOut,
  selectCurrentUser,
  selectIsAuthenticated,
} from "../../../store/slices/authSlice"
import { SiteLogo } from "../../ui/siteLogo/SiteLogo"
import "./LeftSideBar.css"

export function LeftSideBar() {
  const isAuth = useSelector(selectIsAuthenticated)
  const user = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logOut())
    navigate("/login")
  }

  return (
    <aside className="leftNavBar">
      <nav>
        <SiteLogo />
        {isAuth && user && (
          <div>
            <img src={user.image ? user.image : ""} alt={user.username} />
            <span>{user.username}</span>
          </div>
        )}
        {navigationPages.map(item => (
          <NavLink
            key={item.href}
            className="navLink hoverEffect"
            to={item.href}
          >
            {item.icon}
            <span className="leftNavBarLinkName">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      {isAuth ? (
        <button onClick={handleLogout} className="logoutBtn">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      ) : (
        <Link to="/login" className="loginLink">
          <DoorOpenIcon />
          <span>Login</span>
        </Link>
      )}
    </aside>
  )
}
