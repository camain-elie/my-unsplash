import { useState } from 'react';

import './addElement.scss';

function AddElement (props) {

    const [label, setLabel] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!label || !photoURL) {
            console.log('every field must be complete');
        }else{
            props.handleSubmit(label, photoURL);
        }
    }

    return(
        <div className={`add-element${props.display ? '' : '--off'}`} >

            <div className="add-element__panel">

                <p className="add-element__title">
                    Add a new Photo
                </p>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>
                        Label
                        <input
                            type="text"
                            placeholder="Ex : City landscape travel"
                            value={label}
                            onChange={(e) => setLabel(e.target.value)}
                        />
                    </label>

                    <label>
                        Photo URL
                        <input
                            type="text"
                            placeholder="https://my-image.com/url"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                    </label>

                    <button
                        className="button button--silent"
                        onClick={(e) => props.handleExit(e)}
                    >
                        Cancel
                    </button>
                    <button
                        className="button button--validate"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>

            </div>

        </div>
    );
}

export default AddElement;