import '../index.css';

const Restart=()=>{
    let refresh=()=>{

        window.location.reload()
    
      }
    return(
        <button className="restart" onClick={refresh}>Restart</button>
    )
}
export default Restart