import Objektas from "../components/Objektas";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LeafletControlGeocoder from "../components/LeafletControlGeocoder";

const ObjectScreen = ({ coords }) => {
  const [objektai, setObjektai] = useState(null);

  useEffect(() => {
    const fetchObjektus = async () => {
      const response = await fetch("/api/forms/getforms");
      const json = await response.json();

      if (response.ok) {
        setObjektai(json);
      }
    };

    fetchObjektus();
  }, []);

  const visiObjektai = objektai?.length;
  const count = objektai?.filter(
    (objektas) => objektas.status === "perziureta"
  ).length;

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div>
              <h2>Objektu puslapis</h2>
              <div className="d-flex">
                <p>
                  <b>Viso objektu:</b> {visiObjektai}
                </p>
                <p style={{ marginLeft: "10px" }}>
                  <b>Aplankytu objektu:</b> {count}
                </p>
              </div>
              <hr />
              {objektai &&
                objektai.map((objektas) => (
                  <>
                    <Objektas key={objektas._id} objektas={objektas} />
                    {console.log(objektas.address)}
                    {(coords = objektas.address)}
                  </>
                ))}
            </div>
          </Col>
          <Col xs={12} md={6} className="map-box">
            <MapContainer
              style={{ width: "100%", height: "50vh" }}
              center={[55.28833, 23.97472]}
              zoom={7}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LeafletControlGeocoder />
            </MapContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ObjectScreen;
