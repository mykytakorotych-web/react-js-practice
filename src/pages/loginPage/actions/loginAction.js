export async function loginAction(prevState, formData) {
  await new Promise(resolve => setTimeout(resolve, 1000))

  const email = formData.get("email")
  const password = formData.get("password")

  if (email === "admin@gmail.com" && password === "12345") {
    return {
      success: true,
      user: { name: "Admin" },
      error: null
    }
  }

  return {
    success: false,
    user: null,
    error: "Неверный email или пароль"
  }
}

export const initialState = {
  success: false,
  user: null,
  error: null
}