const MainSideElement = function(props) {
    return (
        <div className="mainSideElement">
            <img className="mainSideElement__img" src={props.icon} alt={props.iconAlt}></img>
            <h4 className="mainSideElement__title">{props.title}</h4>
            <div className="mainSideElement__line"></div>
            <p className="mainSideElement__text">{props.text}</p>
        </div>
    )
}

export default MainSideElement;