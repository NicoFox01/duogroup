import React from 'react';
import { Typography, Row, Col, Card, Divider } from 'antd';
const { Title, Paragraph } = Typography;
import Duogroup from '../assets/images/Dougroup01.png';
import '../assets/css/AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Title level={2}>Bienvenidos a DUOGROUP</Title>

      <Paragraph>
        En <strong>Duogroup</strong> brindamos soluciones integrales en <strong>limpieza, mantenimiento preventivo y correctivo, y seguridad</strong>. Nuestros servicios están diseñados para adaptarse a empresas de diferentes rubros y tamaños, garantizando eficiencia, profesionalismo y confianza.
      </Paragraph>
      <Divider />
      <div className="about-us-content">
        <div className="about-us-text">
          <Title level={3}>Nuestra Historia</Title>
          <Paragraph>
            Somos una empresa familiar y 100% argentina que nació en el año 2008 con el objetivo de ofrecer un servicio de alta calidad.
            A lo largo de los años, nuestra experiencia en el mercado y las políticas de Recursos Humanos aplicadas nos han permitido formar
            equipos capacitados y diseñar esquemas de trabajo a medida, respondiendo con eficacia a las necesidades de cada organización.
          </Paragraph>

          <Paragraph>
            <strong>Nuestra Misión:</strong> Ofrecer servicios de calidad que brinden tranquilidad a nuestros clientes y estabilidad a nuestros empleados.
          </Paragraph>

          <Paragraph>
            <strong>Nuestra Visión:</strong> Que Duogroup sea sinónimo de excelencia en servicios de limpieza, mantenimiento y seguridad.
          </Paragraph>

          <Paragraph>
            <strong>Nuestros Valores:</strong> Dedicación, organización y perseverancia son los pilares con los que buscamos alcanzar altos niveles de excelencia en cada servicio que brindamos. Nos sentimos parte del crecimiento de nuestros clientes, acompañándolos con compromiso y profesionalismo.
          </Paragraph>
        </div>
        <div className="about-us-image">
          <img src={Duogroup} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
