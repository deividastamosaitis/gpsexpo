import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ClientFormContainer from "../components/ClientFormContainer";

const Hero = () => {
  useEffect(() => {
    const getForms = async () => {
      const response = await fetch("/api/form/getform");
      const json = await response.json();

      if (response.ok) {
        setForms(json);
      }
    };

    getForms();
  });

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Row>
          <Col xs={12} md={6} className="">
            <Card className="p-5 d-flex flex-column align-items-center hero-card">
              <h1 className="text-center mb-4">Padėkite mums padėti Jums!</h1>
              <p className="text-center ">
                Užpildykite žemiau pateiktą kamerų sistemos bendrinę apklausą ir
                padėkite mums suprasti kokie Jūs poreikiai ir kokia sklypo
                situacija. Taip galėsime tiksliau padėti išsirinkti Jūsų
                apsaugos vaizdo stebėjimo kameras.
              </p>
              <ClientFormContainer />
            </Card>
          </Col>
          <Col xs={12} md={6} className="">
            <Card className="p-5 d-flex flex-column align-items-center hero-card">
              <h3>Aplankyti objektai:</h3>
              <p className="objektu-skaicius mt-2">3</p>
              <hr
                style={{
                  background: "#3d3d3d",
                  height: "3px",
                  width: "100%",
                  borderColor: "#3d3d3d",
                }}
              />
              <div className="youtube-video">
                <iframe
                  width="450px"
                  height="300px"
                  src="https://www.youtube.com/embed/8tuPSthWrrM"
                  allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="youtube-video">
                <iframe
                  width="450px"
                  height="300px"
                  src="https://www.youtube.com/embed/luQ7qeRDavA"
                  allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
