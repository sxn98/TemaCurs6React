import mutare from "../mutari";


const Plansa=()=>{

  let refresh=()=>{

    window.location.reload()

  }

    return (
    
        <table className="tabla">
          <tbody>
          <tr >
            <td id="1" onClick={mutare}></td>
            <td id="2" onClick={mutare}></td>
            <td id="3" onClick={mutare}></td>
          </tr>
          <tr >
            <td id="4" onClick={mutare}></td>
            <td id="5" onClick={mutare}></td>
            <td id="6" onClick={mutare}></td>
          </tr>
          <tr>
            <td id="7" onClick={mutare}></td>
            <td id="8" onClick={mutare}></td>
            <td id="9" onClick={mutare}></td>
          </tr>
          
          </tbody>
          <button id="refresh" onClick={refresh}>Restart</button>
        </table>
      );
}

export default Plansa;