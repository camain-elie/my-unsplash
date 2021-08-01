import { useState } from 'react';

import './header.scss';

function Header (props) {

    const [searchValue, setSearchValue] = useState('');

    return(
        <div className="header">

            <div className="header__left-elements">

                <img src={props.logoIMG} alt="My Unsplash logo" ></img>
                <div className="header__searchbar">
                    
                    <p className={`material-icons header__input-icon${searchValue === '' ? "" : "--text"}`} >search</p>
                    <input 
                        type="text"
                        onChange={(e) => setSearchValue(e.target.value) } 
                        placeholder="Search by name"    
                    />

                </div>
            </div>

            <div className="header__add-element">

            </div>
        </div>
    );
}

export default Header;