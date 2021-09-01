import React from 'react';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
   
   return( Object.keys(options).map((key) => (
        <button key={key} type="button" name={key} onClick={onLeaveFeedback} className={s.btn}>{key}</button>
   ))
   )
}

export default FeedbackOptions;