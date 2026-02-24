"use client"

import { Search, UserCog } from 'lucide-react'
import { Link } from "react-router"
import { useGetUsersQuery } from "../../../store/api/usersApi.js"
import "./RightSideBar.css"

export function RightSideBar() {
  const { data, error, isLoading, isFetching } = useGetUsersQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <aside className="rightNavBar">
      <section className='sectionSearch'>
        <div className='searchInput'>
          <button className='searchBtn'><Search size={18}/></button>
          <input type="text" placeholder='Search for a friend'/>
        </div>
        <button className='searchFilterBtn'>
          <UserCog size={18}/>
        </button>
      </section>
      <section className='usersSection'>
        <h3>Users</h3>
        <ul className="userList">
          {data.users.map(user => (
            <li className="userItem hoverEffect" key={user.id}>
              <Link to={`/user/${user.id}`}>
                <img
                  className="userImage"
                  src={user.image}
                  alt={user.firstName}
                />
                <div>
                  <h4>{user.firstName}</h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
