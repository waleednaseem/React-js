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
    const text = this.state.isloading ? "Loading..." : this.state.character.name
    return ( 
      <div>
        {text}
      </div>
     )
  }
}
 
export default App;