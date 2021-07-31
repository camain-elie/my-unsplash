import './header.scss';

function Header (props) {

    return(
        <div className="header">

            <div className="header__left-elements">

                <img src={props.logo} alt="My Unsplash logo" ></img>
                <div className="header__searchbar">
                    <input type="text">
                    </input>
                </div>
            </div>

            <div className="header__add-element">

            </div>
        </div>
    );
}

export default Header;