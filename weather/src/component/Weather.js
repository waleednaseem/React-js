import React from 'react';

const weather = props => (
    <div>
    { props.country && props.city && <p> city: {props.country},{props.city}</p>}
    { props.temperature&& <p> Temperature: {props.temperature} </p>}
    { props.humidity && <p> humidity : {props.humidity } </p>}
    {props.description && <p>description : {props.description}</p>}
    {props.error && <p>{props.error}</p>}
</div>
);

export default weather;