"use client"

import { useGetUsersQuery } from "../../../store/api/usersApi.js"
import "./RightSideBar.css"

export function RightSideBar() {
  const { data, error, isLoading, isFetching } = useGetUsersQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <aside className="rightNavBar">
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            <img className='userImage' src={user.image} alt={user.firstName} />

            <div>
              <h4>{user.firstName}</h4>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
