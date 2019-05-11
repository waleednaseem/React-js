import React from 'react';

export default class Weather extends React.Component {
    
    render() { 
        return ( 
            <div>
                { this.props.country && <p> city: {this.props.country}</p>}
                { this.props.temperature&& <p> Temperature: {this.props.temperature} </p>}
                { this.props.humidity && <p> humidity : {this.props.humidity } </p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
         );   
    }
};