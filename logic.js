import { supabase } from './subapi.js'
import { sanitize } from './secur.js'

// REGISTER
export async function register(email, password) {
  email = sanitize(email)
  password = sanitize(password)

  const { data, error } = await supabase
    .from('users')
    .insert([{ email, password, role: 'user' }])

  if (error) {
    alert("Ошибка: " + error.message)
  } else {
    alert("Тіркелді!")
    window.location.href = "index.html"
  }
}

// LOGIN
export async function login(email, password) {
  email = sanitize(email)
  password = sanitize(password)

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .single()

  if (error || !data) {
    alert("Қате логин немесе пароль")
    return
  }

  // ROLE бойынша redirect
  if (data.role === "admin") {
    window.location.href = "admins.html"
  } else {
    window.location.href = "words.html"
  }
}
