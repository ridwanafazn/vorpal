import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";

// export default function AddData() {
//   const [validated, setValidated] = useState(false);
//   const [stageName, setStageName] = useState("");
//   const [realName, setRealName] = useState("");
//   const [group, setGroup] = useState("");
//   const [usernameInstagram, setUsernameInstagram] = useState("");
//   const [birthplace, setBirthplace] = useState("");
//   const [birthDate, setBirthDate] = useState("");
//   const [position, setPosition] = useState("");
//   const [bestSong, setBestSong] = useState("");
//   const [description, setDescription] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//     }

//     setValidated(true);
//     await axios.post("/data", {
//       eventName,
//       description,
//       date,
//       category,
//       eligibility,
//       location,
//       cost,
//       registrationForm,
//     });
//     navigate("/");
//   };

//   return (
//     <>
//       <NavigationBar />
//       <div className="container my-4">
//         <h2 className="my-5">Add Musician Data</h2>
//         <div className="row">
//           <div className="col">
//             <Form noValidate validated={validated} onSubmit={handleSubmit}>
//               <Row className="mb-3">
//                 <Form.Group as={Col} md="3" controlId="stageName">
//                   <Form.Label>Stage Name</Form.Label>
//                   <Form.Control required type="text" placeholder="Enter the stage name" value={stageName} onChange={(ev) => setStageName(ev.target.value)} />
//                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group as={Col} md="3" controlId="realName">
//                   <Form.Label>Real Name</Form.Label>
//                   <Form.Control required type="text" placeholder="Enter the real name" value={realName} onChange={(ev) => setRealName(ev.target.value)} />
//                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group as={Col} md="3" controlId="group">
//                   <Form.Label>Group</Form.Label>
//                   <Form.Control required type="text" placeholder="Enter the group" value={group} onChange={(ev) => setGroup(ev.target.value)} />
//                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group as={Col} md="3" controlId="usernameInstagram">
//                   <Form.Label>Username</Form.Label>
//                   <InputGroup hasValidation>
//                     <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                     <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" value={usernameInstagram} onChange={(ev) => setUsernameInstagram(ev.target.value)} required />
//                     <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
//                   </InputGroup>
//                 </Form.Group>
//               </Row>
//               <Row className="mb-3">
//                 <Form.Group as={Col} md="3" controlId="birthPlace">
//                   <Form.Label>Birthplace</Form.Label>
//                   <Form.Control type="text" placeholder="Enter the birthplace" value={birthplace} onChange={(ev) => setBirthplace(ev.target.value)} required />
//                   <Form.Control.Feedback type="invalid">Please provide a valid birthplace.</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group as={Col} md="3" controlId="birthDate">
//                   <Form.Label>Birth Date</Form.Label>
//                   <Form.Control type="date" placeholder="Enter the birth date" value={birthDate} onChange={(ev) => setBirthDate(ev.target.value)} required />
//                   <Form.Control.Feedback type="invalid">Please provide a valid birth date.</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group as={Col} md="3" controlId="position">
//                   <Form.Label>Position</Form.Label>
//                   <Form.Select value={position} defaultValue={"Vocalist"} onChange={(ev) => setPosition(ev.target.value)} required>
//                     <option disabled>Choose</option>
//                     <option value="Vocalist">Vocalist</option>
//                     <option value="Guitarist">Guitarist</option>
//                     <option value="Basist">Basist</option>
//                     <option value="Pianist">Pianist</option>
//                     <option value="Violinist">Violinist</option>
//                     <option value="Percussionist">Percussionist</option>
//                     <option value="Drummer">Drummer</option>
//                     <option value="Kendanger">Kendanger</option>
//                   </Form.Select>
//                   <Form.Control.Feedback type="invalid">Please provide a valid position.</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group as={Col} md="3" controlId="bestSong">
//                   <Form.Label>Best Song</Form.Label>
//                   <Form.Control type="text" placeholder="Enter the best song" value={bestSong} onChange={(ev) => setBestSong(ev.target.value)} required />
//                   <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
//                 </Form.Group>
//               </Row>
//               <Row>
//                 <Form.Group as={Col} md="5" className="mb-3" controlId="description">
//                   <Form.Label>Description</Form.Label>
//                   <Form.Control as="textarea" value={description} onChange={(ev) => setDescription(ev.target.value)} required />
//                 </Form.Group>
//               </Row>
//               <Button type="submit" className="py-2 px-3 rounded btn-red">
//                 Submit
//               </Button>
//               <a href="/" type="button" class="py-2 px-3 rounded btn-red ms-2">
//                 Back
//               </a>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState } from "react";

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

    // await axios.post("/data", {
    //   eventName,
    //   description,
    //   date,
    //   category,
    //   eligibility,
    //   location,
    //   cost,
    //   registrationForm,
    // });

    try {
      const response = await axios.post("/datas", {
        eventName,
        description,
        date,
        category,
        eligibility,
        location,
        cost,
        registrationForm,
      });

      // Log the response to the console for debugging
      console.log("Response from server:", response.data);

      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }

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
                    <option disabled>Choose</option>
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
                    <option disabled>Choose</option>
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
                    <option disabled>Choose</option>
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

              <Button type="submit" className="py-2 px-3 rounded btn-red">
                Submit
              </Button>
              <a
                href="/"
                type="button"
                className="py-2 px-3 rounded btn-red ms-2"
              >
                Back
              </a>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
