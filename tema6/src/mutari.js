//import { useEffect, useState } from "react";

let tur=1
let mutare=(e)=>{

    if(tur%2===0 && e.target.innerText===""){
        console.log(tur)
        e.target.innerText="O"
        tur++
    }
    if(tur%2===1 && e.target.innerText===""){
        console.log(tur)
        e.target.innerText="X"
        tur++
    }

    let history=`${e.target.innerText} pe pozitia ${e.target.id}`
    console.log(`${e.target.innerText} pe pozitia ${e.target.id}`)
    document.getElementById("istoric").textContent=document.getElementById("istoric").textContent+"\n"+history
    localStorage.setItem('istoric',JSON.stringify(history))
}


/*const[mutari,setmutari]=useState()

useEffect(()=>{
    
})*/
export default mutare;