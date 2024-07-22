import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="logo"><h1>Darkor</h1></div>
            <div className="menu-bar">
      <ul>
        <li><a href="/vakansiyalar">Vakansiyalar</a></li>
        <li><a href="/kandidatlar">Kandidatlar</a></li>
        <li><a href="/kompaniyalar">Kompaniyalar</a></li>
        <li><a href="/xizmatlar">Xizmatlar</a></li>
        <li><a href="/ta'lim">Ta'lim</a></li>
      </ul>
    </div>

        <div className="selection">
            <select name="uzb">
                <option value="uzb">uzb</option>
                <option value="uzb">ing</option>
                <option value="uzb">rus</option>
            </select>
        </div>
        <div className="button-header">
            <h3>Boshlash</h3>
        </div>
        </div>
    );
};

export default Header;
