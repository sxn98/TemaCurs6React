//import { useEffect, useState } from "react";

let tur=1  // e util pt a decide daca se pune X sau O pe patratel
let win=0 // e folosit pentru a elimina repetitiile anuntului de "win" atunci cand jocul se termina si plansa nu e plina
let egal=0 // folosit pentru a verifica daca este egalitate fara a scrie de 9 ori if getelement.text
let mutare=(e)=>{
    let historyanterior=`${e.target.innerText}`  // imi arata ce este pe loc inainte sa se faca mutarea, e util sa nu se repete istoricul de fiecare data cand apas pe patratelul respectiv
    
    if(tur%2===0 && e.target.innerText===""){ // imi pune X sau O in functie de tura
        console.log(tur)
        e.target.innerText="O"
        tur++
    }
    if(tur%2===1 && e.target.innerText===""){
        console.log(tur)
        e.target.innerText="X"
        tur++
    }

        let history=`${e.target.innerText} pe pozitia ${e.target.id}` // imi arata ce este pe loc dupa mutare
        console.log(historyanterior)
        console.log(history)

        if(e.target.innerText!==historyanterior){  // imi verifica daca nu cumva exista deja ceva pe patratel ca sa nu se repete in istoric
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+history
            localStorage.setItem('istoric',JSON.stringify(history))
            egal++
        }

        
        // verificari pentru conditia de castig
        if(document.getElementById("1").textContent===document.getElementById("2").textContent && document.getElementById("2").textContent===document.getElementById("3").textContent && win===0){
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+e.target.innerText+" a castigat!"
            win=1;
        }
        if(document.getElementById("4").textContent===document.getElementById("5").textContent && document.getElementById("5").textContent===document.getElementById("6").textContent && win===0){
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+e.target.innerText+" a castigat!"
            win=1;
        }
        if(document.getElementById("7").textContent===document.getElementById("8").textContent && document.getElementById("8").textContent===document.getElementById("9").textContent && win===0){
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+e.target.innerText+" a castigat!"
            win=1;
        }
        if(document.getElementById("1").textContent===document.getElementById("5").textContent && document.getElementById("5").textContent===document.getElementById("9").textContent && win===0){
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+e.target.innerText+" a castigat!"
            win=1;
        }
        if(document.getElementById("1").textContent===document.getElementById("4").textContent && document.getElementById("4").textContent===document.getElementById("7").textContent && win===0){
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+e.target.innerText+" a castigat!"
            win=1;
        }
        if(document.getElementById("2").textContent===document.getElementById("5").textContent && document.getElementById("5").textContent===document.getElementById("8").textContent && win===0){
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+e.target.innerText+" a castigat!"
            win=1;
        }
        if(document.getElementById("3").textContent===document.getElementById("6").textContent && document.getElementById("6").textContent===document.getElementById("9").textContent && win===0){
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+e.target.innerText+" a castigat!"
            win=1;
        }
        if(document.getElementById("3").textContent===document.getElementById("5").textContent && document.getElementById("5").textContent===document.getElementById("7").textContent && win===0){
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+e.target.innerText+" a castigat!"
            win=1;
        }
        if(egal===9 && win===0){// se verifica faptul ca trec 9 ture de joc si inca nu a castigat nimeni
            document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\neste egalitate!"
        }
    }
    


/*const[mutari,setmutari]=useState()

useEffect(()=>{
    
})*/
export default mutare;