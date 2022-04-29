function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (minuto < 10){
        minuto = "0" + minuto
  }
    msg.innerHTML = `Agora são ${hora}:${minuto} horas!`
    if (hora >= 0 && hora < 12) {

        img.src = 'manha.png'
        document.body.style.background = 'rgba(231, 165, 89)'
    }else if (hora >= 12 && hora <= 18) {

        img.src = 'tarde.png'
        document.body.style.background = 'rgba(110, 208, 238)'
    }else {

        img.src = 'noite.png'
        document.body.style.background = 'rgba(0, 12, 39, 0.856)'

    }
}

