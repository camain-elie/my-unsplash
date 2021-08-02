import Button from '../button/button';

import './header.scss';

function Header (props) {


    return(
        <div className="header">

            <div className="header__left-elements">

                <img src={props.logoIMG} alt="My Unsplash logo" ></img>
                <div className="header__searchbar">
                    
                    <p className={`material-icons header__input-icon${props.searchValue === '' ? "" : "--text"}`} >search</p>
                    <input 
                        type="text"
                        onChange={(e) => props.handleSearch(e)} 
                        value={props.searchValue}
                        placeholder="Search by name"    
                    />

                </div>
            </div>

            <div className="header__add-element">
                <Button text="Add a photo" />
            </div>
        </div>
    );
}

export default Header;