'use strict'

function logar (event) {
  event.preventDefault()
  const username = document.getElementById("username").value
  let password = document.getElementById("password").value

  const url = "https://dummyjson.com/auth/login"
  
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  }).then(res => res.json()).then(res => {

    console.log(res)
  })
}

function voltar (v) {
  v.preventDefault()
}

function sair (s) {
  s.preventDefault()
}