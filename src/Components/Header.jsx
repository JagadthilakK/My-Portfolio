import "../StyleSheet/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = (props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="header">
                <div className="title">{props.name}</div>
                <div className="menu">
                    <div className="burger" onClick={toggleMenu}>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </div>
                    <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
                        {props.list.map((item, index) => (
                            <li key={index}>
                                <Link className="link" to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
