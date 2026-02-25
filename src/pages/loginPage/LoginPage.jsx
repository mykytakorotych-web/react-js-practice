"use client"

import { ArrowLeft } from 'lucide-react'
import { useActionState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { SiteLogo } from '../../components/ui/siteLogo/SiteLogo'
import "./LoginPage.css"
import { initialState, loginAction } from './actions/loginAction'

export function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.success) {
      navigate("/"); 
    }
  }, [state.success, navigate]);

  return (
    <div className='container'>
      <div className="loginSection">
        <div className="loginWrapper">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} />
          Back to recipes
        </button>
          <SiteLogo/>

          <form className="loginForm" action={formAction}>
            {state.error && (
              <div style={{ color: 'red', marginBottom: '10px' }}>
                {state.error}
              </div>
            )}
            <div className="inputGroup">
              <input name="email" type="email" placeholder="Email address" disabled={isPending} required />
            </div>
            <div className="inputGroup">
              <input name="password" type="password" placeholder="Password" disabled={isPending} required />
            </div>

            <button type="submit" className="btnPrimary" disabled={isPending}>
              {isPending ? "Logging in..." : "Log in"}
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
