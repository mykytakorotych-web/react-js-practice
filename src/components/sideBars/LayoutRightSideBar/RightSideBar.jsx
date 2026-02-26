"use client"

import { Search, UserCog } from "lucide-react"
import { useEffect, useState } from 'react'
import "./RightSideBar.css"
import { UsersSection } from './usersSection/UsersSection.jsx'

export function RightSideBar() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState(''); // Для запроса в API

  useEffect(() => {
    const handler = setTimeout(() => {
      const trimmed = query.trim();

      if (trimmed.length > 0) {
        setDebouncedQuery(trimmed);
      } else {
        setDebouncedQuery(''); 
      }
    }, 700);

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <aside className="rightNavBar">
      <section className="sectionSearch">
        <div className="searchInput">
          <div className="searchIcon" aria-hidden="true">
            <Search size={18} />
          </div>
          <input type="text" placeholder="Search for a friend" value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        <button className="searchFilterBtn">
          <UserCog size={18} />
        </button>
      </section>
      
        <UsersSection query={debouncedQuery} />
    </aside>
  )
}
