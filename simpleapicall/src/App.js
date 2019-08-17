import React,{Component} from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = { isLoading : false , character :{} }
  }

  componentDidMount() {
    this.setState({isLoading : true})

    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(Data => {
      this.setState({
        isLoading: false,
        character : Data
      })
    })
  }

  render() { 
    // const api_call=[
    //   this.state.character.name ,
    //   this.state.character.height,
    //   this.state.character.mass,
    //   this.state.character.eye_color
    // ]
    const api_call = 
    "name :" + this.state.character.name +
    "  height :" +this.state.character.height+
    "  mass :" +this.state.character.mass+
    "  eye_color :" +this.state.character.eye_color

    const text = this.state.isloading ? "Loading..."  : [api_call]
    
    return ( 
      <div>
        {text}
      </div>
     )
  }
}
 
export default App;