import React from "react";
import { Card, CardBody, Badge, Row, Col } from "reactstrap";

const AllPosts = () => {
  const posts = [
    {
      "_id": "65d19fbe38181ff7120e8114",
      "title": "How to continue warsa",
      "category": "Technology",
      "content": "<p>This is the content1 of the blog post in HTML format.</p>",
      "likeCount": 0,
      "comments": [
        { id: 1, author: "User1", text: "Great post!" },
        { id: 2, author: "User2", text: "Interesting insights." },
      ],
      "author": "65d0c5bb08ef84d081a5cb6f",
      "tags": ["sample", "technology", "blog"],
      "createdAt": "2024-02-18T06:12:14.155Z",
      "__v": 0
    },
    // Add more posts as needed
  ];

  return (
    <div style={styles.wrapper}>
      <Row xs="1" md="2" lg="3">
        {posts.map((post, index) => (
          <Col key={post._id}>
            <UserPost post={post} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    minHeight: "calc(100vh - 56px)",
  },
  card: {
    marginBottom: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    animation: "fadeInUp 0.5s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  postNumber: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  title: {
    fontSize: "1.2rem",
  },
  tags: {
    fontSize: "1rem",
  },
};

const UserPost = ({ post, index }) => {
  return (
    <Card style={{ ...styles.card, ...styles.cardHover }}>
      <CardBody>
        <div style={styles.postNumber}>Post {index + 1}</div>
        <div style={styles.title}>{post.title}</div>
        <div style={styles.tags}>
          {post.tags.join(", ")}
        </div>
      </CardBody>
    </Card>
  );
};

export default AllPosts;
