import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ICC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/classes'); // Reemplaza esta URL con la URL de tu API
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner color="primary" />
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      {data.map((sectionData, index) => (
        <div key={index}>
          <h2>{sectionData.bloque}</h2>
          <Row>
            {sectionData.classes.map((classData, idx) => (
              <Col sm="4" key={idx} className="mb-4">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{classData.nombreClase}</CardTitle>
                    <CardText>ID Clase: {classData.idClase}</CardText>
                    <CardText>Créditos: {classData.creditos}</CardText>
                    <CardText>Sección: {classData.seccion}</CardText>
                    <CardText>Hora Inicio: {classData.horaInicio}</CardText>
                    <CardText>Catedrático: {classData.catedratico}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default ICC;
