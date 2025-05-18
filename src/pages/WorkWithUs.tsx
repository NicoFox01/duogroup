import React from 'react';
import { Form, Input, Select, Upload, Button, Typography, message, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/formulario.css';
import hiring from '../assets/images/hiring-duogroup.png';

const { Title } = Typography;
const { Option } = Select;

const WorkWithUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Datos del formulario:', values);
    message.success('¡Gracias por postularte!');
    form.resetFields();
  };

  return (
    <>
      <Navbar />

      <div className="formulario-contenedor">
        <div className="info-contenedor">
          <div className="titulo-contenedor">
                        <br />
            <Title level={3} className="formulario-titulo">Trabajá con Nosotros</Title>
            <img src={hiring} alt="Imagen de trabajá con nosotros" />
          </div>
          <div className="formulario-contenedor-interno">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Nombre completo"
                name="nombre"
                rules={[{ required: true, message: 'Ingrese su nombre completo' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Teléfono"
                name="telefono"
                rules={[{ required: true, message: 'Ingrese un número de teléfono' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="DNI"
                name="dni"
                rules={[{ required: true, message: 'Ingrese su DNI' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Zona de residencia"
                name="zona"
                rules={[{ required: true, message: 'Seleccione una zona' }]}
              >
                <Select placeholder="Seleccione una zona">
                  <Option value="caba">CABA</Option>
                  <Option value="zona-norte">Bs As - Zona Norte</Option>
                  <Option value="zona-sur">Bs As - Zona Sur</Option>
                  <Option value="zona-oeste">Bs As - Zona Oeste</Option>
                </Select>
              </Form.Item>
              <br />
              <Form.Item
                label="Empresa de interés"
                name="empresa"
                rules={[{ required: true, message: 'Seleccione al menos una empresa' }]}
              >
                <Checkbox.Group>
                  <Checkbox value="duolim">Duolim</Checkbox>
                  <Checkbox value="duoman">Duoman</Checkbox>
                  <Checkbox value="duogroup">DuoGroup</Checkbox>
                </Checkbox.Group>
              </Form.Item>
              <br />
              <Form.Item
                label="Adjuntar CV"
                name="cv"
                valuePropName="fileList"
                getValueFromEvent={(e) => e?.fileList}
                rules={[{ required: true, message: 'Adjunte su CV' }]}
              >
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Seleccionar archivo</Button>
                </Upload>
              </Form.Item>
              <br />
              <Form.Item className="botones-formulario">
                <Button type="primary" htmlType="submit">Enviar</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WorkWithUs;