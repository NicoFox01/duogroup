import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import DuosegImage from "../assets/images/DuosegServices.png"; 
import "../assets/css/DuogroupServices.css";

const { Title, Paragraph } = Typography;

const DuosegServices: React.FC = () => {
  return (
    <Layout className="duogroup-services-container">
      <Row className="duogroup-row" align="middle" justify="center">
        {/* Imagen izquierda */}
        <Col xs={24} md={12} className="duogroup-image-col">
          <img
            src={DuosegImage}
            alt="Servicios de Duoseg"
            className="duogroup-image"
          />
        </Col>

        {/* Texto derecha */}
        <Col xs={24} md={12} className="duogroup-text-col">
          <Typography>
            <Title level={2} className="duogroup-title">Nuestros Servicios</Title>
            <Paragraph>
              En <strong>Duoseg</strong> nos especializamos en brindar soluciones de seguridad integral para hogares, empresas y edificios. Ofrecemos servicios profesionales en:
            </Paragraph>
            <ul className="duogroup-list">
              <li>Seguridad física</li>
              <li>Monitoreo de alarmas</li>
              <li>Control de acceso</li>
              <li>Servicios de vigilancia</li>
            </ul>
            <Paragraph>
              Nuestro equipo de expertos en seguridad trabaja con compromiso y profesionalismo para garantizar la protección y seguridad de nuestros clientes. Realizamos evaluaciones de riesgos y proponemos soluciones personalizadas para cada situación.
            </Paragraph>
            <Paragraph>
              Ya sea para un evento específico o un servicio continuo, en Duoseg nos enfocamos en brindar tranquilidad y seguridad a nuestros clientes.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </Layout>
  );
};

export default DuosegServices;