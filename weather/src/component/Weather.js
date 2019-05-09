import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.city} : {this.props.temperature}</h2>
            </React.Fragment>
        );
    }
}

export default Weather;
