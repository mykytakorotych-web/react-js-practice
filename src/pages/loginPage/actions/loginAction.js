export async function loginAction(prevState, formData) {

  const username = formData.get("username")
  const password = formData.get("password")

  const form = e.target
  const formData = new FormData(form)

  try {
    await login({
      username: formData.get('username'),
      password: formData.get('password')
    }).unwrap()

    navigate('/')
  } catch (err) {
    console.error('Failed to login', err)
  }
  return {
    success: false,
    user: null,
    error: "Not valid username or password"
  }
}

export const initialState = {
  success: false,
  user: null,
  error: null
}