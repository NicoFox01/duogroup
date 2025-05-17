import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Select, Upload, Button, Typography, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const { Title } = Typography;
const { Option } = Select;

const WorkWithUs = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Datos del formulario:', values);
    message.success('¡Gracias por postularte!');
    form.resetFields();
  };

  return (
    <>
      <Navbar />

      <div style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
        <Title level={3} style={{ textAlign: 'center' }}>Trabajá con Nosotros</Title>

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

          <Form.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={() => navigate(-1)}>Volver</Button>
            <Button type="primary" htmlType="submit">Enviar</Button>
          </Form.Item>
        </Form>
      </div>

      <Footer />
    </>
  );
};

export default WorkWithUs;
