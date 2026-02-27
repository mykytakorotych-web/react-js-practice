"use client"

import { Link } from "react-router"
import { BackBtn } from '../../components/ui/backBtn/BackBtn'
import { SiteLogo } from "../../components/ui/siteLogo/SiteLogo"
import { useLoginForm } from "../../hooks/useLoginForm"
import "./LoginPage.css"

export function LoginPage() {
  const { isLoading, error, handleSubmit } = useLoginForm()

  return (
    <div className="container">
      <div className="loginSection">
        <div className="loginWrapper">
          <BackBtn/>
          <SiteLogo />

          <form className="loginForm" onSubmit={handleSubmit}>
            {error && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                {"data" in error
                  ? error.data?.message || "Login error"
                  : "message" in error
                    ? error.message
                    : "Unknown error"}
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
