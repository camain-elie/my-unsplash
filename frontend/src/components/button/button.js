import './button.scss';

function Button (props) {

    const buttonStyle={
        color: props.color,
        background: props.background
    };

    return (
        <button className={"button"}
        style={buttonStyle}
            onClick={() => props.handleClick()}
        >
            <p>{props.text}</p>
        </button>
    );
}

export default Button;