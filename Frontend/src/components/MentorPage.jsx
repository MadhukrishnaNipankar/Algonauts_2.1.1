import React, { useState, useEffect } from "react";
import { Card, CardBody, Badge } from "reactstrap";
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
        program: "Entrepreneurship Mentorship Program",
        description: "Join our mentorship program to receive guidance and support in your entrepreneurial journey.",
        resources: ["Guide to Business Planning", "Financial Management Tips"],
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

const MentorCard = ({ mentor, navigate }) => {
  return (
    <Card style={styles.card} onClick={() => navigate(`/mentor/${mentor.id}`)}>
      <CardBody>
        <div style={styles.username}>
          <FaUserCircle style={styles.userProfileIcon} />
          <span>{mentor.name}</span>
        </div>
        <div>
          <strong>{mentor.program}</strong>
          <p>{mentor.description}</p>
          <div><strong>Resources:</strong></div>
          <ul>
            {mentor.resources.map((resource, index) => (
              <li key={index}>{resource}</li>
            ))}
          </ul>
          
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
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  },
  username: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  userProfileIcon: {
    marginRight: "0.5rem",
    fontSize: "1.5rem",
    color: "#777",
  },
};

export default MentorPage;
