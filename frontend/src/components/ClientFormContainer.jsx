import { useState } from "react";
import { useCreateUserFormMutation } from "../slices/usersApiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LeafletControlGeocoder from "../components/LeafletControlGeocoder";

const ClientFormContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [cameraCount, setCameraCount] = useState("");
  const [utpCables, setUtpCables] = useState("");
  const [nightTime, setNightTime] = useState("");
  const [howLong, setHowLong] = useState("");
  const [money, setMoney] = useState("");
  const [address, setAddress] = useState([]);
  const [details, setDetails] = useState("");

  //MODAL
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  const CallBack = (childData) => {
    const {lat, lng} = childData
    setAddress(childData);
  };

  //MODAL END

  const onChangeUtp = (e) => {
    const value = e.target.value;
    setUtpCables(value);
  };
  const onChangeNight = (e) => {
    const value = e.target.value;
    setNightTime(value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, { isLoading }] = useCreateUserFormMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      toast.success(
        "Jūsų forma užpildytą, pasistengsime atsakyti kuo greičiau"
      );
      const res = await form({
        name,
        email,
        telNumber,
        cameraCount,
        utpCables,
        nightTime,
        howLong,
        money,
        address,
        details,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Form className="mt-2" onSubmit={submitHandler}>
      <Row className="align-items-center">
        <Col xs="12" md={6}>
          <Form.Label htmlFor="inlineFormInput" visuallyHidden></Form.Label>
          <Form.Control
            type="text"
            className="mb-2"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Vardas"
          />
        </Col>
        <Col xs="12" md={6}>
          <Form.Label
            htmlFor="inlineFormInputGroup"
            visuallyHidden
          ></Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="El.paštas"
            />
          </InputGroup>
        </Col>
        <Col xs="12" md={6}>
          <Form.Label
            htmlFor="inlineFormInputGroup"
            visuallyHidden
          ></Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              type="number"
              value={telNumber}
              onChange={(e) => setTelNumber(e.target.value)}
              id="number"
              placeholder="Tel. Nr"
            />
          </InputGroup>
        </Col>
        <Col xs="12" md={6}>
          <Form.Label
            htmlFor="inlineFormInputGroup"
            visuallyHidden
          ></Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              type="number"
              id="cameraCount"
              value={cameraCount}
              onChange={(e) => setCameraCount(e.target.value)}
              placeholder="Kamerų kiekis"
            />
          </InputGroup>
        </Col>
        <Col xs="12" className="mt-2">
          <Form.Label htmlFor="inlineFormInputGroup">
            Ar yra išvedžioti UPT kabeliai?:
          </Form.Label>
          <Form.Select
            aria-label="Ar yra išvedžioti UPT kabeliai?"
            className="mb-2"
            onChange={onChangeUtp}
          >
            <option>--Pasirinkti varianta--</option>
            <option value="Taip, laidai išvedžioti">
              Taip, laidai išvedžioti kameroms
            </option>
            <option value="Ne, tačiau gali išvedžioti UTP">
              Ne, tačiau galima ir noriu išvedžioti UTP kabelius, nes pageidauju
              šiuolaikiškų IP kamerų
            </option>
            <option value="Ne, ir negali išvedžioti UTP">
              Ne, o ir išvedžioti kabelių nenoriu, ir neįmanoma, rinksiuos
              buitines WiFi kameras
            </option>
          </Form.Select>
        </Col>
        <Col xs="12">
          <Form.Label htmlFor="inlineFormInputGroup">
            Ar nakties metu yra apšviesta kiemo teritorija?:
          </Form.Label>
          <Form.Select
            aria-label="Ar nakties metu yra apšviesta kiemo teritorija?"
            className="mb-2"
            onChange={onChangeNight}
          >
            <option>--Pasirinkti varianta--</option>
            <option value="Taip">Taip</option>
            <option value="Ne">Ne</option>
          </Form.Select>
        </Col>
        <Col xs="12" md={6}>
          <Form.Label htmlFor="inlineFormInputGroup">
            Kiek parų norite kaupti vaizdo įrašus?
          </Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              type="text"
              id="cameraCount"
              value={howLong}
              onChange={(e) => setHowLong(e.target.value)}
              placeholder="1 savaite, 2 savaites..."
            />
          </InputGroup>
        </Col>
        <Col xs="12" md={6}>
          <Form.Label htmlFor="inlineFormInputGroup">
            Apytikslis biudžetas visai įrangai:
          </Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              type="text"
              value={money}
              onChange={(e) => setMoney(e.target.value)}
              id="cameraCount"
              placeholder="1500€"
            />
          </InputGroup>
        </Col>
        <Col xs="12" md={6}>
          <Form.Label htmlFor="inlineFormInputGroup">
            Objekto adresas:
          </Form.Label>
          <InputGroup className="mb-2 d-none">
            <Form.Control
              type="text"
              id="cameraCount"
              value={address}
              // value={`${address.lat} ${address.lng}`}
              placeholder="Kaunas, Jonavos g. 204A"
            />
          </InputGroup>
          <Button variant="primary" onClick={handleShow} className="mb-2">
            Atidaryti žemėlapį
          </Button>

          <Modal show={showModal} onHide={handleClose}>
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
              <LeafletControlGeocoder handleCallback={CallBack} />
            </MapContainer>
            <label className="m-2 comment">*Įveskite adresą paieškos laukelyje ir spauskite klaviatūroje: "Enter"/"Go"/"Next"</label>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Uždaryti
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Išsaugoti
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        {/* <Col xs="12" md={6}>
          <Form.Group controlId="inlineFormInputGroup" className="mb-3">
            <Form.Label>Filmuojamos teritorijos nuotraukos:</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
        </Col> */}
        <Col xs="12">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Aprašykite detaliau lūkesčius ir suteikite detalesnę informacija
              apie norus ar pageidavimus:
            </Form.Label>
            <Form.Control
              as="textarea"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={3}
            />
          </Form.Group>
        </Col>
      </Row>

      {isLoading && <Loader />}

      <Col xs="auto" className="text-center">
        <Button type="submit" className="mb-2">
          Pateikti užklausa
        </Button>
      </Col>
    </Form>
  );
};

export default ClientFormContainer;
