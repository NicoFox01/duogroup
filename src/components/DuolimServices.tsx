import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import DuolimImage from "../assets/images/DuolimServices.png";
import "../assets/css/DuogroupServices.css";

const { Title, Paragraph } = Typography;

const DuolimServices: React.FC = () => {
  return (
    <Layout className="duogroup-services-container">
      <Row className="duogroup-row" align="middle" justify="center">
        {/* Imagen izquierda */}
        <Col xs={24} md={12} className="duogroup-image-col">
          <img
            src={DuolimImage}
            alt="Servicios de Duolim"
            className="duogroup-image"
          />
        </Col>

        {/* Texto derecha */}
        <Col xs={24} md={12} className="duogroup-text-col">
          <Typography>
            <Title level={2} className="duogroup-title">Nuestros Servicios</Title>
            <Paragraph>
              Nuestro éxito en el logro de los objetivos radica en aplicar y respetar minuciosamente cada paso de nuestra metodología:
            </Paragraph>
            <ul className="duogroup-list">
              <li>Comprensión de la necesidad del cliente</li>
              <li>Visita a las instalaciones para un correcto relevamiento.</li>
              <li>Análisis de las necesidades y las instalaciones.</li>
              <li>Diagnóstico de la situación.</li>
              <li>Diagnóstico y diseño de la solución correcta.</li>
            </ul>
            <Paragraph>
              Un correcto plan de acción adaptado a la necesidad particular del cliente, implementado por un capacitado equipo de trabajo,
              utilizando maquinaria adecuada y aplicando materiales de primera línea, aseguran la calidad del servicio de limpieza que brindamos,
              garantizando la satisfacción total de nuestros clientes.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </Layout>
  );
};

export default DuolimServices;