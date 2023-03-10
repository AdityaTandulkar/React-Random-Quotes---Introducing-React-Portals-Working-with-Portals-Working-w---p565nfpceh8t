import React, {useState, useEffect} from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];


const App = () => {
  const [data, setData] = useState();
  
  function change(){
      fetch('https://api.quotable.io/random')
        .then(resp => resp.json())
        .then(resp => setData(resp));
  }

  useEffect(()=>{
    change()
  },[])

    return (
      <div id="main">
        <div id="wrapper">
          <div className="quote-text" style={{backgroundColor : colors[0]}}>{data && data.content}</div>
          <div className="quote-author" style={{backgroundColor : colors[0]}}>{data && data.author}</div>
          <button id="new-quote" onClick={change}>Change</button>
        </div>
      </div>
    );
};

export default App;
