
function carregar (){
    var msg = window.document.getElementById('msg')  //Objeto
    var img = window.document.getElementById('imagem') //Objeto
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var segundos = data.getSeconds()
    hora = 19 //coloque aqui a hora para testar o código
    msg.innerHTML = `Agora são ${hora}h${minuto}!`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manha.png'  
        document.body.style.background = '#e2cd9f'
    }
    if(hora >=12 && hora <= 18){
        //BOA TARDE!
        img.src = 'tarde.png' 
        document.body.style.background = '#b9846f' 
        
    }
    if (hora> 18 && hora <= 24 ){
        //BOA NOITE!
        img.src = 'noite.png' 
        document.body.style.background = '#515154' 
    }
}

