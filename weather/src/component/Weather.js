import React from 'react';

const weather = props => (
    <div>
    { props.country && <p> city: {props.country}</p>}
    { props.temperature&& <p> Temperature: {props.temperature} </p>}
    { props.humidity && <p> humidity : {props.humidity } </p>}
    {props.error && <p>{props.error}</p>}
</div>
);

export default weather;