import React from "react";
import {Helmet} from "react-helmet"

class PageMetadata extends React.Component {
    render() {
        return (
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Дельтапланеризм Санкт-Петербург</title>
                <link rel={"canonical"} href={"http://hanggliding.spb.ru/"}/>
                <meta name={"description"}
                      content={"Сайт дельтапланерного клуба Сокол. Санкт-Петербург. Обучение полётам на дельтаплане."}/>
                <meta name={"robots"} content={"index, follow"}/>
            </Helmet>
        )
    }
}

export default PageMetadata;