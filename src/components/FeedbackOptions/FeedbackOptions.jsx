import React from 'react';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    console.log(options);
   
   return( Object.entries(options).map(([key, val]) => (
        <button key={key} type="button" name={key} onClick={onLeaveFeedback}>{key}:<span>{val}</span></button>
   ))
   )
}

export default FeedbackOptions;
