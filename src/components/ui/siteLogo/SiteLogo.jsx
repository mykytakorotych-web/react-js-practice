import { Gitlab } from 'lucide-react'
import { Link } from 'react-router'
import './SiteLogo.css'

export function SiteLogo() {
  return (
    <Link to="/" className="siteLogo" aria-label="Website logo. Link to the home page">
      <span className='logoWrapper'>
        <Gitlab fill='var(--text-primary)'/>
      </span>
      <h3>YumYum</h3>
    </Link>
  )
}
