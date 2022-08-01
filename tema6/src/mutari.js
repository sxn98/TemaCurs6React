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


    console.log(`${e.target.innerText} pe pozitia ${e.target.id}`)
}


/*const[mutari,setmutari]=useState()

useEffect(()=>{
    
})*/
export default mutare;