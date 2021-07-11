import React from 'react';

function Header({ titleColor }) {
    const title = <span className={titleColor ? 'react' : ''}>React</span>;
    return <h1>My first {title} project</h1>
}

export default Header
