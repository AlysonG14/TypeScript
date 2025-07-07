'use strict'

function logar(event) {
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
  }).then(res => console.log(""))
}


// SISTEMA DE HOME

/*

<body>
  <main class="conteiner">
    <form class="card-form">
      <h1 class="title-card">Home</h1>
      <fieldset class="style_legend">
        <legend>1</legend>
        <a href="index.html" id="btn_back" onclick="voltar(v)">Voltar</a>
        <legend>2</legend>
        <a href="index.html" id="btn_leave" onclick="sair(s)">Sair</a>
      </fieldset>
    </form>
</main>
*/

// function voltar(v, callback) {
//   v.preventDefault()
//   alert("You're back!")
//   callback(s)
// }
//
// function sair(s, callback) {
//   s.preventDefault()
//   alert("Leaving!")
//   callback(s)
// }
//
// function display(result){
//   console.log(`The result is ${result}`)
// }



