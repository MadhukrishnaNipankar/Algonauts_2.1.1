import React, { useState, useEffect } from "react";
import { Card, CardBody, Badge, Button } from "reactstrap";
import { FaUserCircle } from "react-icons/fa";
import Spinner from "./Spinner";
import { useNavigate } from 'react-router-dom';

const MentorPage = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated mentor data
    const mentorData = [
      {
        id: 1,
        name: "John Doe",
        qualification: "MBA in Entrepreneurship",
        program: "Entrepreneurship Mentorship Program",
        insights: "Gain valuable insights and support to kickstart your entrepreneurial journey.",
        description: "Join our mentorship program to receive guidance and support in your entrepreneurial journey.",
        resources: ["Guide to Business Planning", "Financial Management Tips"],
        tags: ["Entrepreneurship", "Business"],
        // Add a photo of the mentor
        photo: "https://example.com/mentor-photo.jpg"
      },
      // Add more mentor data as needed
    ];

    setLoading(true);
    // Simulating API call delay
    setTimeout(() => {
      setMentors(mentorData);
      setLoading(false);
    }, 1500); // Adjust delay time as needed
  }, []);

  return (
    <div style={styles.wrapper}>
      <h1>Mentorship Program</h1>
      {loading && <Spinner />}
      {!loading && mentors.map(mentor => (
        <MentorCard key={mentor.id} mentor={mentor} navigate={navigate} />
      ))}
    </div>
  );
};

const MentorCard = ({ mentor }) => {
  return (
    <Card style={styles.card}>
      <CardBody>
        <div style={styles.avatar}>
          <img src={mentor.photo} alt="Mentor Avatar" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
          <span style={styles.title}>{mentor.program}</span>
        </div>
        <div style={styles.header}>
          <FaUserCircle style={styles.userProfileIcon} />
          <div>
            <span>{mentor.name}</span>
            <span style={styles.qualification}>{mentor.qualification}</span>
          </div>
        </div>
        <p>{mentor.insights}</p>
        <p>{mentor.description}</p>
        <div><strong>Resources:</strong></div>
        <ul>
          {mentor.resources.map((resource, index) => (
            <li key={index}>{resource}</li>
          ))}
        </ul>
        <div>
          {mentor.tags.map((tag, index) => (
            <Badge color="success" className="me-2" key={index}>{tag}</Badge>
          ))}
        </div>
        <div style={styles.footer}>
          <small>For basic access, enroll now. For unlimited access and complete resources, buy the premium.</small>
          <div style={styles.buttons}>
            <Button color="primary" className="me-2" onClick={() => alert("Enroll Now")}>Enroll</Button>
            <Button color="warning" onClick={() => alert("Buy Premium")}>Buy Premium</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    minHeight: "calc(100vh - 56px)",
  },
  card: {
    maxWidth: "800px",
    width: "100%",
    marginBottom: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "default",
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  userProfileIcon: {
    marginRight: "0.5rem",
    fontSize: "1.5rem",
    color: "#777",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginTop: "0.5rem",
  },
  qualification: {
    fontStyle: "italic",
    fontSize: "0.8rem",
    marginLeft: "0.5rem",
    color: "#777",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: "1rem",
  },
  buttons: {
    display: "flex",
  },
};

export default MentorPage;
