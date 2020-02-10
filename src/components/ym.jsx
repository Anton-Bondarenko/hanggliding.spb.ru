import React from "react";
import {YMInitializer} from 'react-yandex-metrika';

class YMetrica extends React.Component {
    render() {
        return (
            <div>
                <YMInitializer accounts={[57449140]}/>
            </div>
        );
    }
}

export default YMetrica;

