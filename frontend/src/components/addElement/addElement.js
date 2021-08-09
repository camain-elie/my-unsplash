import { useState } from 'react';

import './addElement.scss';

// clever way to verify the content of a url, found on :
// https://stackoverflow.com/questions/9714525/javascript-image-url-verify
function testImageURL(url, timeoutTime){
    return new Promise(function (resolve, reject) {
        let timeout = timeoutTime || 5000;
        let timer, img = new Image();
        img.onerror = img.onabort = function () {
            clearTimeout(timer);
            reject("error");
        };
        img.onload = function () {
            clearTimeout(timer);
            resolve("success");
        };
        timer = setTimeout( function () {
            //reset .src to invalid URL so it stops previous loading,
            //but doesn't trigger new load
            img.src = "//!!!/test.jpg";
        }, timeout);
        img.src = url;
    })
}


function AddElement (props) {

    const [label, setLabel] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!label || !photoURL) {
            setUserMessage('Every field must be complete');
        }else{
            testImageURL(photoURL, 2000)
                .then(() => {
                    setUserMessage('');
                    props.handleSubmit(label, photoURL);
                })
                .catch(error => {
                    setUserMessage('Error : invalid image URL')
                })
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

                    <p className="add-element__message">{userMessage}</p>

                    <div className="add-element__buttons">
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
                    </div>
                </form>

            </div>

        </div>
    );
}

export default AddElement;