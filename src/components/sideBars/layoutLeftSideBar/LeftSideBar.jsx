import { Link, NavLink, useNavigate } from "react-router"
import { navigationPages } from "../../../routes/routeLinks"

import { DoorOpenIcon, LogOut } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { useGetMeQuery } from '../../../store/api/authApi'
import {
  logOut,
  selectIsAuthenticated
} from "../../../store/slices/authSlice"
import { SiteLogo } from "../../ui/siteLogo/SiteLogo"
import "./LeftSideBar.css"

export function LeftSideBar() {
  const isAuth = useSelector(selectIsAuthenticated)
  const {data} = useGetMeQuery()
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
      <div className="leftNavBarFooter">
        {isAuth && data && (
          <div className="userProfileCard">
            <img src={data.image ? data.image : ""} alt={data.username} />
            <h4>{data.username[0].toUpperCase() + data.username.slice(1)}</h4>
          </div>
        )}
        {isAuth ? (
          <button onClick={handleLogout} className="logoutBtn">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        ) : (
          <Link to="/login" className="loginLink" aria-label="Go to Login page">
            <DoorOpenIcon />
            <span>Login</span>
          </Link>
        )}
      </div>
    </aside>
  )
}
