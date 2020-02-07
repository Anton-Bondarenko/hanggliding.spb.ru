import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default ({ children }) => (
    <>
        <Header/>
        <Content/>
        <Footer/>
    </>
)