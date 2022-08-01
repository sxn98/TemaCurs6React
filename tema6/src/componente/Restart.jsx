import '../index.css';

const Restart=()=>{
    let refresh=()=>{ // imi da refresh la pagina cand se apasa pe buton

        window.location.reload()
    
      }
    return(
        <button className="restart" onClick={refresh}>Restart</button>
    )
}
export default Restart