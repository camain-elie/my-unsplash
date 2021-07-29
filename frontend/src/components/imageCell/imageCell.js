import './imageCell.scss';

function ImageCell (props) {

    return(
        <div className="image-cell">

            <div className="image-cell__content" >
                <img src={props.imageURL} alt={props.label}></img>
            </div>

            <div className="image-cell__action" >
                <div className="image-cell__buttons">
                    <p className="image-cell__button"
                        onClick={() => navigator.clipboard.writeText(props.imageURL)} >
                        Copy URL
                    </p>
                    <p className="image-cell__button image-cell__button--alert"
                        onClick={() => props.handleDelete(props.imageURL)} >
                        Delete
                    </p>
                </div>
                
                <div className="image-cell__label">
                    <p>{props.label}</p>
                </div>
            </div>
        </div>
    );
}

export default ImageCell;