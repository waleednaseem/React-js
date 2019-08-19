import React, { Component } from 'react';

class Memegenerator extends Component {
    constructor(){
        super()
        this.state = { 
            topText : "",
            BottomText : "",
            random_image : "https://www.girlfriend.com.au/media/16714/1000-cat-meme.jpg",
            allMemeImgs : []
         }
         this.handleChange=this.handleChange.bind(this)
         this.handleSubmit=this.handleSubmit.bind(this)
    }
    

     componentDidMount() {
         fetch("https://api.imgflip.com/get_memes")
         .then(response => response.json())
         .then(response =>{
            const {memes} =response.data
            this.setState({allMemeImgs : memes})
            
         })
     }

     handleChange(event){
        const {name ,value} =event.target
        this.setState({[name]: value})
    }
    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ random_image: randMemeImg })
    }

    render() { 
        return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                name="topText" 
                type="text" 
                value={this.state.topText}
                onChange={this.handleChange}
                />
                <input 
                name="BottomText" 
                type="text" 
                value={this.state.BottomText}
                onChange={this.handleChange}
                />
                <button>Generate</button>
            </form>
            <div>
                <img src={this.state.random_image} 
                alt="problem" 
                style={{height: 300 , width: 400}}/>
                
                <h3 style={{marginTop:-300 , color: "white"}}>
                {this.state.topText}
                </h3>
                <h3 style={{marginTop: 250 , color: "white"}}>
                {this.state.BottomText}
                </h3>
            </div>
        </div> 
        )
    }
}
 
export default Memegenerator;