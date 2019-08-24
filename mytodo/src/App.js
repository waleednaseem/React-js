import React, { Component } from 'react'
import Note from './Component/Note'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      noteText: "",
      notes: []
     }
  }

  
  updateNoteText=(noteText)=>{
    this.setState({noteText : noteText.target.value})
  }
  handleKeyPress=(event)=> {
    if(event.key === "Enter"){
      let noteArr =this.state.notes
      noteArr.push(this.state.noteText)
      this.setState({noteText : ''})
    }
  }
  deleteNotes(index){
    let noteArr = this.state.notes
    noteArr.splice(index, 1)
    this.setState({notes : noteArr})
  }
  addnotes=()=>{
    if(this.state.noteText === ''){return}
    let noteArr =this.state.notes
    noteArr.push(this.state.noteText)
    this.setState({noteText : ''})
    this.textInput.focus()
  }
  render() { 
    let notes =this.state.notes.map((val ,key) =>{
      return <Note key={key} noteText={val}
      deleteMethod={()=> this.deleteNotes(key)}
      />
    })
    return ( 
      <div>
        <div>React todo App</div>
        {notes}
        <button onClick={this.addnotes.bind(this)}>+</button>
        <input 
          type="text" 
          ref={((input)=>{this.textInput = input})}
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
     )
  }
}
 
export default App;