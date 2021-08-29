
const Notification = (message, children) => (
    <div>
        <h4>{message}</h4>
            {children}
    </div>
);

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    console.log({good, neutral, bad});
   
    return (
        <div>
            <h2>Statistics</h2>
            {total = 0 ? (<Notification message={"No feedback given"} /> ) : (<div>
            {Object.entries({ good, neutral, bad }).map(([key, val]) => (
                <p key={key} >{key}: <span>{val}</span></p>
            ))}
            <p key={'total'}>Total: <span>{total}</span></p>
            <p key={'percent'}>Positive feedback: <span>{positivePercentage}</span></p>
            </div>)
         
            }
           
        </div>)
}


export default Statistics;
