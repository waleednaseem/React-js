import React from 'react';

class UserInput extends React.Component {
    state = {
        city: '',
        country: ''
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOnClick() {
        this.props.onClick(this.state.city, this.state.country);
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={this.handleChange.bind(this)} type="text" name="city" placeholder="City Name.." />
                <input onChange={this.handleChange.bind(this)} type="text" name="country" placeholder="Country Name.." />
                <button onClick={this.handleOnClick.bind(this)}>Get weather</button>
            </React.Fragment>
        );
    }
}

export default UserInput;
