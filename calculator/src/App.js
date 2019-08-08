import React, { Component } from 'react';
import './App.css';
import Keypad from './keypad.js';
import Output from './Output.js';

class App extends Component {
    state={
      result : ""
    }
  
    buttonPressed= buttonName =>{
        if(buttonName === "="){
          this.calculate();
        }else if(buttonName === "C"){
          this.reset();
        }else if(buttonName === "CE"){
          this.backSpace();
        }
        else{
          this.setState({
            result : this.state.result + buttonName
          });
        }
    }

    calculate= () =>{
      try{ this.setState({
          result : eval(this.state.result)
        });
      }catch (e){
          this.setState({
            result : "error"
          });

      }
    }
    backSpace =() =>{
      this.setState({
        result : this.state.result.slice(0 , -1)
      });
    }
    reset=()=>{
      this.setState({
          result : ""
      });
    }

  render() { 
    return ( 
    <div>
      <div className="calc-body">
      <Output result={this.state.result}/>
      <Keypad buttonPressed={this.buttonPressed}/> 
      </div>
    </div>
     );
  }
}
 
export default App;
