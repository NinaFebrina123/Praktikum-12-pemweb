const username = "nina"
const password = "12345678"

function auth(){
    // tangkap nilai yang di input user
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value

    let form = document.getElementById("form")
    if(username == userInput && password == passwordInput){
        alert("Login Berhasil")
        form.submit()

    } else{
        alert("Login Gagal!")
    }
}