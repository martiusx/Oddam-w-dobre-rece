const StatisticsElement = function(props){
    return(
        <div className="statisticsElement">
            <h3 className={'statisticsElement__quantity'}>{props.quantity}</h3>
            <h4 className={'statisticsElement__title'}>{props.title}</h4>
            <p className={'statisticsElement__text'}>{props.text}</p>
        </div>
    )
}

export default StatisticsElement;