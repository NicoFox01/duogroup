import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';

// Importar estilos
import '../assets/css/ExpandCard.css';

// Importación de imágenes
import duomanImg from "../assets/images/duoman.png";
import duolimImg from "../assets/images/duolim.png";
import duosegImg from "../assets/images/duoseg.png";

import logoDuoman from "../assets/images/duoman-logo.png";
import logoDuolim from "../assets/images/duolim-logo.png";
import logoDuoseg from "../assets/images/duoseg-logo.png";

const { Meta } = Card;

class ExpandCard extends Component {
    render() {
        const CompanyCards = [
            {
                title: 'Duolim',
                imagen: duolimImg,
                logo: logoDuolim,
                description: 'Mantenimiento Integral',
                content: 'Mantenimiento preventivo y correctivo...',
                link: '/duolim',
                className: 'duolim'
            },
            {
                title: 'Duoman',
                imagen: duomanImg,
                logo: logoDuoman,
                description: 'Limpieza Profesional',
                content: 'Servicios adaptados a oficinas, comercios...',
                link: '/duoman',
                className: 'duoman'
            },
            {
                title: 'Duoseg',
                imagen: duosegImg,
                logo: logoDuoseg,
                description: 'Servicios de Seguridad',
                content: 'Vigilancia, control de accesos...',
                link: '/duoseg',
                className: 'duoseg'
            }
        ];

        return (
            <div className="expand-card-container">
                <Row justify="center">
                    {CompanyCards.map((card, index) => (
                        <Col key={index} xs={24} sm={24} md={8} lg={8}>
                            <Card
                                hoverable
                                className={`company-card ${card.className}`}
                                cover={<img alt={card.title} src={card.imagen} className="company-cover-image" />}
                            >
                                <Meta title={card.title} description={card.description} />
                                <p className="company-content">{card.content}</p>
                                <Link to={card.link}>
                                    <Button type="primary">Ver más</Button>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default ExpandCard;