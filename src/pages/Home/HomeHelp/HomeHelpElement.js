const HomeHelpElement = function(props) {
    return (
        <div className="homeHelp__element">
            <div>
                <h5>{props.title}</h5>
                <p>{props.text}</p>
            </div>
            <div>
                <span>{props.stuff}</span>
            </div>
            
        </div>
    )
}

export default HomeHelpElement;