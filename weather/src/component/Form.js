import React from 'react';

const Form = props =>(
            <div>
                <form onSubmit={props.getWeather}>
                <input type="text" name="City" placeholder="City Name.." />
                <input type="text" name="Country" placeholder="Country Name.." />
                <button>Get weather</button>
                </form>
            </div>
);

export default Form;