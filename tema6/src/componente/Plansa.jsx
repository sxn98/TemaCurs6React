function getID(btn){

    console.log(btn.id)
  }

const Plansa=()=>{
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
          <button className="123" onClick={getID(this)}>asdf</button>
          </tbody>
        </table>
      );
}

export default Plansa;