import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Checkbox, Input, Button, Form, Typography } from 'antd';
import '../assets/css/formulario.css';
import contacto from '../assets/images/contacto-duogroup.png';
const { TextArea } = Input;
const { Title } = Typography;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Formulario enviado:', values);
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-info-container">
          <div className="contact-title">
            <br />
            <Title level={3} className="formulario-titulo">Solicitar cotizacion</Title>
            <img src={contacto} alt="Imagen de contacto" />
          </div>
          <div className="contact-form-container">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="contact-form"
            >
              <Form.Item
                label="Nombre completo"
                name="nombre"
                rules={[{ required: true, message: 'Por favor, ingrese su nombre completo' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Empresa"
                name="empresa"
                rules={[{ required: true, message: 'Por favor, ingrese el nombre de su empresa' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Teléfono"
                name="telefono"
                rules={[{ required: true, message: 'Por favor, ingrese su número de teléfono' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Por favor, ingrese su email' },
                  { type: 'email', message: 'Ingrese un email válido' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Servicio"
                name="servicios"
                rules={[{ required: true, message: 'Seleccione al menos un servicio' }]}
              >
                <Checkbox.Group>
                  <Checkbox value="limpieza">Limpieza</Checkbox>
                  <Checkbox value="seguridad">Seguridad</Checkbox>
                  <Checkbox value="mantenimiento">Mantenimiento</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item label="Mensaje (opcional)" name="mensaje">
                <TextArea rows={4} placeholder="Escriba su mensaje aquí..." />
              </Form.Item>
            <br />
              <Form.Item className="botones-formulario">
                <Button type="primary" htmlType="submit">
                  Enviar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;