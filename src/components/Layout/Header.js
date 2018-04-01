import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import { Link } from 'react-router-dom';
// import coinsLogo from '../../assets/coinsLogo.png';

import './style.css';

const style = {
    margin: 12
};

const Header = ({ dispatch, itemFilter }) => (
    <div className="header">
        {/* <div className="logo_menu">
            <Link to="/">
                <img className="logo" alt="logo" src={coinsLogo} />
            </Link>
        </div> */}
        <div className="buttons">
            {/* <Link to="/"> */}
            <RaisedButton label="Login" primary="true" style={style} />
            {/* </Link> */}
            {/* <Link to="/news"> */}
            <RaisedButton label="Log Out" style={style} />
            {/* </Link> */}
        </div>
    </div>
);


export default Header;

