const StatisticsElement = function({quantity, title, text}) {
    return (
        <div className="statistics__Element">
            <h3 className={"statistics__Element-quantity"}>{quantity}</h3>
            <h4 className={"statistics__Element-title"}>{title}</h4>
            <p className={"statistics__Element-text"}>{text}</p>
        </div>
    )
}

export default StatisticsElement;