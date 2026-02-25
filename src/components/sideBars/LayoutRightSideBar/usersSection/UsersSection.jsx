"use client"

import { Link } from "react-router"
import { useGetUsersQuery } from "../../../../store/api/usersApi"
import { Loader } from '../../../ui/loader/Loader'

export function UsersSection({query}) {
  const { data, error, isLoading } = useGetUsersQuery(query)
  if (isLoading) return <Loader />
  if (error) return <div>Error: {error.message}</div>
  if (!data) return null;
  
  return (
    <section className="usersSection">
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
  )
}
