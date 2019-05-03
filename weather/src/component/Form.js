import React from 'react';

export default class Form extends React.Component {
    
    render() { 
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="City" placeholder="City Name.." />
                <input type="text" name="Country" placeholder="Country Name.." />
                <button>Get weather</button>
            </form>
          );
    }
}
 