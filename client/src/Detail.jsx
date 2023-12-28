import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavigationBar from "./NavigationBar";

import eventPhoto from "./assets/eventPhoto.svg";

export default function Detail() {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/datas/${id}`)
      .then((response) => {
        setEventData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${id}`); // Redirect to the edit page
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event data?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(`/datas/${id}`);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const formattedDate = new Date(eventData.date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="ctr">
      <div id="result">
        <div className="container">
          <h1 className="d-flex justify-content-center">Detail of Event</h1>
          <h3 className="d-flex justify-content-center">
            {eventData.eventName}
          </h3>
          <div className="row my-4">
            <div className="col-10">
              <p>Desc: &quot;{eventData.description}&quot;</p>
              <p>Date: {formattedDate}</p>
              <p>Location: {eventData.location}</p>
              <p>Category: {eventData.category}</p>
              <p>Terms and Conditions: {eventData.eligibility}</p>
              <p>Cost: {eventData.cost}</p>
              <p>Registration Form: {eventData.registrationForm} </p>
            </div>
          </div>

          <div className="d-flex justify-content-center my-3">
            <Button variant="danger" onClick={() => navigate("/")}>
              Kembali
            </Button>
            <Button variant="danger" onClick={handleEdit} className="mx-2">
              Edit
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
