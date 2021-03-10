import React from 'react';
import './table.css';

export default function NavBar() {
    return (
        <div>
        <div class="topnav">
        <a  href="#home" className="link">OVERVIEW</a>
        <a href="#about" className="link">TODO</a>
        <a href="#contact" className="link">TOOLS</a>
        <a  href="#home" className="link">DOCUMENTS</a>
        <a href="#about" className="link">RISKS</a>
        <a href="#contact" className="link">PROJECT</a>
        <input type="text" className="fieldnav" placeholder="Search.."/>
      </div>
        </div>
    )
}
