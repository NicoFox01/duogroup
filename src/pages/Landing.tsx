import React, {Component} from "react";
import ExpandCard from "../components/ExpandCard";
import "../assets/css/landing.css";
class Landing extends Component {
    render(){
        return(
            <div className="landing-container" >
                <h1>DUOGROUP</h1>
                <div className="ExpandCard-container">
                    <ExpandCard />
                </div>
                
                <br />
                <p>En <strong>Duogroup</strong> brindamos soluciones integrales en limpieza, mantenimiento preventivo y correctivo, y seguridad. Nuestros servicios están diseñados para adaptarse a empresas de diferentes rubros y tamaños, garantizando eficiencia, profesionalismo y confianza.</p>
            </div>
        );
    }
}
export default Landing;