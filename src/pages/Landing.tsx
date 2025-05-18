import React, { Component } from "react";
import ExpandCard from "../components/ExpandCard";
import "../assets/css/landing.css";
class Landing extends Component {
    render() {
        return (
            <div className="landing-container" >
                <div className="landing-container-title">
                    <h1>DUOGROUP</h1>
                </div>

                <div className="landing-container-ExpandCard">
                    <ExpandCard />
                </div>
                <div className="landing-container-text">
                    <p>En <strong>Duogroup</strong> brindamos soluciones integrales en limpieza, mantenimiento preventivo y correctivo, y seguridad. Nuestros servicios están diseñados para adaptarse a empresas de diferentes rubros y tamaños, garantizando eficiencia, profesionalismo y confianza.</p>
                </div>
                <br />

            </div>
        );
    }
}
export default Landing;