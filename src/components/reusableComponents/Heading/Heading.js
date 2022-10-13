import decorationImg from '../../../assets/Decoration.svg';

const Heading = function(props) {
    return (
        <div className="heading">
            <h2>{props.firstText}</h2>
            <h2>{props.secondText}</h2>
            <img src={decorationImg} alt="decoration"/>

        </div>
    )
}

export default Heading;