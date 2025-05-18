import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css'; // Importa el archivo CSS

const { Header } = Layout;

const serviciosMenu = (
  <Menu>
    <Menu.Item key="duoman">
      <Link to="/duoman">Duoman</Link>
    </Menu.Item>
    <Menu.Item key="duolim">
      <Link to="/duolim">Duolim</Link>
    </Menu.Item>
    <Menu.Item key="duoseg">
      <Link to="/duoseg">Duoseg</Link>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  return (
    <Layout>
      <Header className="navbar-header">
        <div className="logo">
          Duogroup
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={['inicio']} className="navbar-menu">
          <Menu.Item key="inicio">
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <Dropdown overlay={serviciosMenu} trigger={['hover']}>
            <Menu.Item key="servicios">
              <span>Servicios</span>
            </Menu.Item>
          </Dropdown>
          <Menu.Item key="trabaja">
            <Link to="/WorkWithUs">Trabaja con Nosotros</Link>
          </Menu.Item>
          <Menu.Item key="cotizaciones">
            <Link to="/ContactUs">Cotizaciones</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;