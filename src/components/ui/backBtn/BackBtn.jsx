import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router"
import "./BackBtn.css"

export function BackBtn() {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)} className="backBtn">
      <ArrowLeft size={20} />
      Back to recipes
    </button>
  )
}
