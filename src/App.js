// import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import { useState } from 'react';
import './external.css'




const  App = ()=> {


  const text_shadow = {
    textShadow: "4px 4px 12px rgb(0, 255, 255)"
  }

  const flex = {
    display: "flex",
    justifyContent: "center",


  }

  const flex_items = {
    height: "50px",
    margin: "40px",
    width: "auto",
    borderRadius: "15px",
    backgroundColor: "rgb(70, 185, 185)",
    padding: "15px",
    fontSize: "1.2em"
  }

  const flex_itemsForSecondRow = {
    margin: "20%"
  }



  const [divOne , showDivOne] = useState(true);

  const [divTwo , showDivTwo] = useState(true);

 
  return (
    <div className="App">
      <h1 style={text_shadow}>Styling Using Class And Functional Component </h1>
      <div style={flex}>
        <button style={flex_items} className='hoverOnme' onClick = { () =>{ showDivOne(!divOne)}  }>To See Styling in Functional Component</button>
        <button style={flex_items} className='hoverOnme' onClick = { () =>{ showDivTwo(!divTwo)}  }> To See Styling in Class Component</button>
      </div>

      <br>
      </br>
      <br/>
      <br/>
      <br/>

      <div style={flex}>
        {
          divOne && <FunctionalComponent style={flex_itemsForSecondRow} />       
          
        }
        {
          divTwo &&  <ClassComponent style={flex_itemsForSecondRow}></ClassComponent>
        }
        
       
      </div>

    </div>
  );
}

export default App;
