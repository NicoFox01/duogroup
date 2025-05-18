import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import DuomanImage from "../assets/images/DuomanServices.png"; 
import "../assets/css/DuogroupServices.css";

const { Title, Paragraph } = Typography;

const DuomanServices: React.FC = () => {
  return (
    <Layout className="duogroup-services-container">
      <Row className="duogroup-row" align="middle" justify="center">
        {/* Imagen izquierda */}
        <Col xs={24} md={12} className="duogroup-image-col">
          <img
            src={DuomanImage}
            alt="Servicios de Duoman"
            className="duogroup-image"
          />
        </Col>

        {/* Texto derecha */}
        <Col xs={24} md={12} className="duogroup-text-col">
          <Typography>
            <Title level={2} className="duogroup-title">Nuestros Servicios</Title>
            <Paragraph>
              En <strong>Duoman</strong> nos especializamos en brindar soluciones integrales en mantenimiento y reparaciones para hogares, empresas y edificios. Ofrecemos servicios profesionales en:
            </Paragraph>
            <ul className="duogroup-list">
              <li>Electricidad</li>
              <li>Plomería</li>
              <li>Pintura</li>
              <li>Construcción en seco (Durlock)</li>
              <li>Servicios de abono preventivos y correctivos</li>
              <li>Atención de urgencias</li>
            </ul>
            <Paragraph>
              Nuestro equipo técnico altamente capacitado trabaja con compromiso, puntualidad y materiales de calidad para garantizar resultados duraderos y seguros. Realizamos diagnósticos precisos, proponiendo soluciones para las necesidades de cada cliente.
            </Paragraph>
            <Paragraph>
              Ya sea un arreglo puntual o un servicio programado, en Duoman nos enfocamos en brindar atención personalizada y eficiencia en cada intervención.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </Layout>
  );
};

export default DuomanServices;