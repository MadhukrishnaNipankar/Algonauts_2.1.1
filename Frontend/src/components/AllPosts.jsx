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
      <div style={{display:"flex",flexDirection:"column"}} >
        {posts.map((post, index) => (
          <Col key={post._id}>  
            <UserPost post={post} index={index} />
          </Col>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    minHeight: "calc(100vh - 56px)",
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    
  },
  card: {
    width:"50vw",
    height:"5rem",
cursor:"pointer",
    marginLeft: "5px",
    marginRight: "5px",
    marginBottom: "20px",
    borderRadius: "15px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    animation: "fadeInUp 0.5s ease",
  },
  postNumber: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "0.5rem",
    fontWeight: "bold",
  },
  tags: {
    fontSize: "1rem",
  },
};

const UserPost = ({ post, index }) => {
  return (

    <Card style={{ ...styles.card, ...styles.cardHover }} >
      <CardBody>
        <div style={styles.postNumber}>Post{post.title}</div>
        {/* <hr style={{ margin: "0.5rem 0" }} /> */}
      
        <div className="mb-3">
        {/* <hr style={{ margin: "0.5rem 0" }} /> */}
        <div style={{width:"30%",margin:"auto",display:"flex",justifyContent:"center"}}>
            {/* <p>posted on {post.createdAt}</p> */}
            <p>❤️ {post.likeCount} likes</p>
        </div>
    
        </div>
     
      </CardBody>
    </Card>
  );
};

export default AllPosts;
