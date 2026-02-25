"use client"

import { ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router"
import { SiteLogo } from "../../components/ui/siteLogo/SiteLogo"
import { useLoginMutation } from "../../store/api/authApi"
import "./LoginPage.css"

export function LoginPage() {
  const [login, { isLoading, error }] = useLoginMutation()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    try {
      // unwrap() позволяет поймать ошибку через catch здесь, если нужно
      await login({
        username: formData.get("username"), // DummyJSON требует username, не email
        password: formData.get("password"),
      }).unwrap()

      // Если всё ок, нас перекинет на главную
      navigate("/")
    } catch (err) {
      console.error("Failed to login", err)
    }
  }

  return (
    <div className="container">
      <div className="loginSection">
        <div className="loginWrapper">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={20} />
            Back to recipes
          </button>
          <SiteLogo />

          <form className="loginForm" onSubmit={handleSubmit}>
            {/* Внутри формы, перед инпутами */}

            {error && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                {/* Вариант 1: Ошибка от сервера (например, неверный пароль) */}
                {"data" in error
                  ? error.data?.message || "Ошибка входа"
                  : /* Вариант 2: Системная ошибка (нет интернета или упал JS) */
                    "message" in error
                    ? error.message
                    : "Неизвестная ошибка"}
              </div>
            )}
            <div className="inputGroup">
              <input
                name="username"
                type="text"
                placeholder="Email address"
                disabled={isLoading}
                required
              />
            </div>
            <div className="inputGroup">
              <input
                name="password"
                type="password"
                placeholder="Password"
                disabled={isLoading}
                required
              />
            </div>

            <button type="submit" className="btnPrimary" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="footerLink">
            Dont have account? <Link href="#">Sign up</Link>
          </div>
        </div>
      </div>

      <div className="imageSection"></div>
    </div>
  )
}
