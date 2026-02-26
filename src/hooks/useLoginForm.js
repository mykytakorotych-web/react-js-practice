import { useNavigate } from 'react-router'
import { useLoginMutation } from '../store/api/authApi'

export const useLoginForm = () => {
  const [login, { isLoading, error, }] = useLoginMutation()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    try {
      await login({
        username: formData.get("username"),
        password: formData.get("password"),
      }).unwrap()

      navigate("/")
    } catch (err) {
      console.error("Failed to login", err)
    }
  }

  return {
    isLoading,
    error,
    handleSubmit,
    navigate
  }
}