import React from "react";
import ym, {YMInitializer} from 'react-yandex-metrika';

class YM extends React.Component {

    render() {
        return (
            <div>
                <YMInitializer accounts={[57449140]}/>
            </div>
        );
    }

    doHit(){
        ym('hit', "index");
    }
}
export default YM




