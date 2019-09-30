import React from 'react';
import preloader from './../Ellips.svg'


export default function Preloader () {
    return <div>
        <img src={preloader} style={{width:'300px', margin:"200px 500px 0 500px"}}/>
    </div>
}