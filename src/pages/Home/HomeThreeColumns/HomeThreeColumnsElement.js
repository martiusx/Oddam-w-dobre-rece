const HomeThreeColumnsElement = function(props) {
    return (
        <div className="homeThreeColumns__Element">
            <img 
                className="homeThreeColumns__Element-img" 
                src={props.icon} 
                alt={props.iconAlt}
            />
            <h4 className="homeThreeColumns__Element-title">
                {props.title}
            </h4>
            <div className="homeThreeColumns__Element-line"/>
            <p className="homeThreeColumns__Element-text">
                {props.text}
            </p>
        </div>
    )
}
export default HomeThreeColumnsElement;