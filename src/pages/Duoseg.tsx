import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Layout, Row, Col, Typography } from "antd";
import AboutUs from "../components/AboutUs";
import Carrousel from "../components/Carrousel";
import duoseg01 from "../assets/images/duoseg-carrouserl01.png";
import duoseg02 from "../assets/images/duoseg-carrouserl02.png";
import duoseg03 from "../assets/images/duoseg-carrouserl03.png";
import duoseg04 from "../assets/images/duoseg-carrouserl04.png";

import DuosegServices from "../components/DuosegServices";
class Duoseg extends Component{
    render(){
        const items = [
        {image: duoseg01, text: "Seguridad Física"},
        {image: duoseg02, text: "Monitoreo de Alarmas"},
        {image: duoseg03, text: "Control de Acceso"},
        {image: duoseg04, text: "Servicios de Vigilancia"},
   
    ];
        return(
            <Layout className="duolim-container">
                <Navbar />
                <AboutUs />
                <DuosegServices />
                <br />
                <Carrousel items={items}/>
                <Footer />
            </Layout>
        );
    }
} 
export default Duoseg;
