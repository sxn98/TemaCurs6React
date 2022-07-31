

const Plansa=()=>{

  let getID=(e)=>{

    console.log(e.target.id)

  }

    return (
    
        <table className="tabla">
          <tbody>
          <tr >
            <td className="element1">X</td>
            <td>O</td>
            <td>X</td>
          </tr>
          <tr >
            <td>O</td>
            <td>X</td>
            <td>O</td>
          </tr>
          <tr>
            <td>X</td>
            <td>O</td>
            <td>X</td>
          </tr>
          <button id="test"className="123" onClick={getID}>asdf</button>
          </tbody>
        </table>
      );
}

export default Plansa;