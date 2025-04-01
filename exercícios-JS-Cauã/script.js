var btn = document.getElementById("btn")

/* btn.onclick = function() {
    alert("testando...")
} */

/* function()
   function soma() 
   ()=>{}*/


   /* Quando uma função não tem nome, é chamada de função anônima */



/*    function soma(){
    alert("teste")
   }

btn.addEventListener("click", ()=>{   
    alert("testando...")
    soma()
})
  */



//const btn = document.getElementById("btn")

function mudarConteudo() {
    const titulo = document.querySelector("#titulo")

    titulo.innerText = "Cauã"
    titulo.classList.toggle("trocarCor")

}

btn.addEventListener("click", mudarConteudo)











/* btn;addEventListener("click", teste) */