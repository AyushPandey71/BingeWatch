import "./Header.css";
import BingeLogo from '../../BingeLogo.png';

const Header = (props) => {
    return <span className="header"
    style={{ position: props.positionSpan }}
    onClick={() => window.scroll(0, 0)} >
        <img src={BingeLogo} className="header_logo" alt="Logo" />
        Binge Entertainment
    </span>
};

export default Header;