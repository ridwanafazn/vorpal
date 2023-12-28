import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./App.css";

export default function AddData() {
  const [validated, setValidated] = useState(false);
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [location, setLocation] = useState("");
  const [cost, setCost] = useState("");
  const [registrationForm, setRegistrationForm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    setValidated(true);
    await axios.post("/datas", {
      eventName,
      description,
      date,
      category,
      eligibility,
      location,
      cost,
      registrationForm,
    });
    navigate("/");
  };

  return (
    <>
      <NavigationBar />
      <div className="container my-4">
        <h2 className="my-5">Add Event Data</h2>
        <div className="row">
          <div className="col">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="eventName">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter the event name"
                    value={eventName}
                    onChange={(ev) => setEventName(ev.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="Select the event date"
                    value={date}
                    onChange={(ev) => setDate(ev.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={category}
                    onChange={(ev) => setCategory(ev.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="Olahraga">Olahraga</option>
                    <option value="Kesehatan Mental">Kesehatan Mental</option>
                    <option value="Lingkungan">Lingkungan</option>
                    <option value="Kemanusiaan">Kemanusiaan</option>
                    <option value="Pendidikan">Pendidikan</option>
                    <option value="Agama">Agama</option>
                    <option value="Ekonomi">Ekonomi</option>
                    <option value="Sosial">Sosial</option>
                    <option value="Kemanusiaan">Kemanusiaan</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="eligibility">
                  <Form.Label>Eligibility</Form.Label>
                  <Form.Select
                    value={eligibility}
                    onChange={(ev) => setEligibility(ev.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="Open for all">{">"}Open for all</option>
                    <option value=">10 years old">{">"}10 years old</option>
                    <option value=">15 years old">{">"}15 years old</option>
                    <option value=">20 years old">{">"}20 years old</option>
                    <option value=">30 years old">{">"}30 years old</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Select
                    value={location}
                    onChange={(ev) => setLocation(ev.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bogor">Bogor</option>
                    <option value="Depok">Depok</option>
                    <option value="Tangerang">Tangerang</option>
                    <option value="Bekasi">Bekasi</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Subang">Subang</option>
                    <option value="Sumedang">Sumedang</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="cost">
                  <Form.Label>Cost</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter the cost"
                    value={cost}
                    onChange={(ev) => setCost(ev.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="registrationForm">
                  <Form.Label>Registration Form</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter the registration form link"
                    value={registrationForm}
                    onChange={(ev) => setRegistrationForm(ev.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Enter the event description"
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button type="submit" className="py-2 px-3 rounded btn-green">
                  Submit
                </Button>
                <a
                  href="/"
                  type="button"
                  className="py-2 px-3 rounded btn ms-2"
                >
                  Back
                </a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
