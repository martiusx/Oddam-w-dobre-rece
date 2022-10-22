const HomeHelpElement = function(props) {
    return (
        <div className="homeHelp__element">
            <h5>{props.title}</h5>
            <p>{props.text}</p>
        </div>
    )
}

export default HomeHelpElement;