import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { FaHeart } from "react-icons/fa";

const Post = () => {
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
  ];

  return (
    <div style={styles.wrapper}>
      {posts.map((post) => (
        <div key={post._id} style={styles.postContainer}>
          <UserPost post={post} />
          <Comments comments={post.comments} />
        </div>
      ))}
    </div>
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
  postContainer: {
    maxWidth: "800px",
    width: "100%",
    marginBottom: "2rem",
  },
  card: {
    maxWidth: "800px",
    margin: "0 auto",
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
  createdAt: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    fontSize: "0.8rem",
    color: "#777",
  },
  likeCount: {
    position: "absolute",
    bottom: "0.5rem",
    left: "0.5rem",
    display: "flex",
    alignItems: "center",
    fontSize: "0.8rem",
    color: "#777",
  },
  heartIcon: {
    marginRight: "0.5rem",
    color: "red",
  },
};

const UserPost = ({ post }) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card style={{ ...styles.card, ...styles.postContainer }}>
      <CardBody>
        <span style={styles.createdAt}>{formattedDate}</span>
        <h2 className="mb-3">{post.title}</h2>
        <div className="mb-3">
          {post.tags.map((tag, index) => (
            <Badge color="success" className="me-2" key={index}>
              {tag}
            </Badge>
          ))}
        </div>
        <p><strong>Category:</strong> {post.category}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div style={styles.likeCount}>
          <FaHeart style={styles.heartIcon} />
          {post.likeCount}
        </div>
      </CardBody>
    </Card>
  );
};

const Comments = ({ comments }) => {
  return (
    <div>
      <Card style={styles.card}>
        <CardBody>
          <h3>Comments</h3>
          <hr style={{ margin: "2rem 0" }} />
          {comments.map((comment) => (
            <div key={comment.id} className="mb-2">
              <strong>{comment.author}:</strong> {comment.text}
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
