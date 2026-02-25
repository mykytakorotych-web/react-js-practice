import { LoaderCircle } from 'lucide-react'
import "./Loader.css"

export function Loader() {
  return <div className='loaderWrapper'><LoaderCircle className='loader' size={48}/></div>
}
