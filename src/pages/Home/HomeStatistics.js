const StatisticsElement = function(props) {
    return (
        <div className="statistics__Element">
            <h3 className={"statistics__Element-quantity"}>{props.quantity}</h3>
            <h4 className={"statistics__Element-title"}>{props.title}</h4>
            <p className={"statistics__Element-text"}>{props.text}</p>
        </div>
    )
}

const Statistics = function() {
    return (
        <div className="statistics">
            <StatisticsElement 
                quantity={10} 
                title="ODDANYCH WORKÓW" 
                text="Lorem ipsum dolor sit amet, consectetur adipisc 
                Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
            <StatisticsElement 
                quantity={5} 
                title="WSPARTYCH ORGANIZACJI" 
                text="Lorem ipsum dolor sit amet, consectetur adipisc 
                Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
            <StatisticsElement 
                quantity={7} 
                title="ZORGANIZOWANY ZBIÓREK" 
                text="Lorem ipsum dolor sit amet, consectetur adipisc 
                Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
        </div>
    )
}
export default Statistics;