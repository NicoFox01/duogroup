import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Layout, Row, Col, Typography } from "antd";
import AboutUs from "../components/AboutUs";
import Carrousel from "../components/Carrousel";
import duolim01 from "../assets/images/duolim-carrousel01.png";
import duolim02 from "../assets/images/duolim-carrousel02.png";
import duolim03 from "../assets/images/duolim-carrousel03.png";
import duolim04 from "../assets/images/duolim-carrousel04.png";
import duolim05 from "../assets/images/duolim-carrousel05.png";
import duolim06 from "../assets/images/duolim-carrousel06.png";
import DuolimServices from "../components/DuolimServices";
class Duolim extends Component{
    render(){
        const items = [
        {image: duolim01, text: "Bancos e instituciones financieras"},
        {image: duolim02, text: "Oficinas y consorcios"},
        {image: duolim03, text: "Industrias y fabricas"},
        {image: duolim04, text: "Instituciones educativas"},
        {image: duolim05, text: "Clinicas y sanatorios"},
        {image: duolim06, text: "Finales de obra y limpiezas especiales"},    
    ];
        return(
            <Layout className="duolim-container">
                <Navbar />
                <AboutUs />
                <DuolimServices />
                <br />
                <Carrousel items={items}/>
                <Footer />
            </Layout>
        );
    }
} 
export default Duolim;
