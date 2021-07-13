import React from 'react';
import getRandomColor from './utils';

function Header({ titleColor }) {
    const title = <span style={{ color: titleColor ? getRandomColor(): '' }}> React</span >;
    return <h1>My first {title} project</h1>
}

export default Header
