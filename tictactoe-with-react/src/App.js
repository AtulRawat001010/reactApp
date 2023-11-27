import './App.css';


function Square({ value }) {

  function handleClick(e) {
    console.log(e.target.innerText);
    console.log("clicked");
    /*// let arr = [];
    // for (let index = 0; index < arr.length; index++) {
    //   arr[index].push(e.target);

    //   // console.log(arr);
    // }
    // console.log(arr);*/
  }
  return <div className="square" onClick={handleClick}>{value}</div>
}


export default function Board() {
  return (
  <div className="game">
    <div className="board-row">
     <Square value={"X"} id="1" />
     <Square value={"X"} id="2"/>
     <Square value={"X"} id="3"/>
    </div>
    <div className="board-row">
     <Square value={"X"} id="4"/>
     <Square value={"X"} id="5"/>
     <Square value={"X"} id="6"/>
    </div>
    <div className="board-row">
     <Square value={"X"} id="7"/>
     <Square value={"X"} id="8"/>
     <Square value={"X"} id="9"/>
    </div>
  </div>);
}