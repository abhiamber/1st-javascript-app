var selector = document.querySelector(" #btn-translate");
var txtinput= document.querySelector("#txt-input")
// console.log(txtinput)
var outputdiv=document.querySelector("#output")

function myclick(){
outputdiv.innerText ="HEllo "+txtinput.value
    
   
}

selector.addEventListener("click",myclick)

 