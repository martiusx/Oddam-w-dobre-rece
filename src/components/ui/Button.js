const Button = function(props) {

    return (
        <button className="button" onClick={props.clickHandler}>{props.text}</button>
    )
}

export default Button;