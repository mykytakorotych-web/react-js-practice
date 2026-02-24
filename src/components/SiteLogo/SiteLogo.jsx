import { Gitlab } from 'lucide-react'
import './SiteLogo.css'

export function SiteLogo() {
  return (
    <div className="siteLogo">
      <span className='logoWrapper'>
        <Gitlab fill='var(--text-primary)'/>
      </span>
      <h3>Anikama</h3>
    </div>
  )
}
