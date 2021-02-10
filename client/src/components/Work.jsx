import React from 'react';
import Hackazon from './projects/Hackazon.jsx';
import Hotello from './projects/Hotello.jsx';
import Pollo from './projects/Pollo.jsx';

const Work = () => {
    return (
        <div>
            <h3 className="numbered-heading"> Portfolio</h3>
            <div><Hackazon></Hackazon></div>
            <div><Hotello></Hotello></div>
            <div><Pollo></Pollo></div>
        </div>
    )
}

export default Work;