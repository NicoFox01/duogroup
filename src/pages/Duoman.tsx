import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Layout, Row, Col, Typography } from "antd";
import AboutUs from "../components/AboutUs";
import Carrousel from "../components/Carrousel";
import duoman01 from "../assets/images/duoman-carrouserl01.png";
import duoman02 from "../assets/images/duoman-carrouserl02.png";
import duoman03 from "../assets/images/duoman-carrouserl03.png";
import duoman04 from "../assets/images/duoman-carrouserl04.png";
import duoman05 from "../assets/images/duoman-carrouserl05.png";
import duoman06 from "../assets/images/duoman-carrouserl06.png";
import DuomanServices from "../components/DuomanServices";
class Duoman extends Component{
    render(){
        const items = [
        {image: duoman01, text: "Electricidad"},
        {image: duoman02, text: "Plomeria"},
        {image: duoman03, text: "Durlock"},
        {image: duoman04, text: "Pintura"},
        {image: duoman05, text: "Mantenimiento preventivo y correctivo"},
        {image: duoman06, text: "urgencias"},    
    ];
        return(
            <Layout className="duolim-container">
                <Navbar />
                <AboutUs />
                <DuomanServices />
                <br />
                <Carrousel items={items}/>
                <Footer />
            </Layout>
        );
    }
} 
export default Duoman;
