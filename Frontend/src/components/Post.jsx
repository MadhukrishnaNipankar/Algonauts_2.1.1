import React, { useEffect, useState } from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { getPost, likePost, commentPost } from "../../controllers/PostController";
import { formatDateTime } from "../utils/dateConversion.js";
import { FcLike, FcLikePlaceholder, FcComments } from "react-icons/fc";
import { jwtDecode } from "jwt-decode";
import {
  Divider, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  FormLabel 
} from '@chakra-ui/react'

const Post = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(null);
  const [comment, setComment] = useState("");
  const postID = location.state?.postId;

  const likeHandler = async () => {
    const tempLiked = !isLiked;
    setIsLiked(tempLiked);
    const token = sessionStorage.getItem("token");
    try {
      const response = await likePost(postID, tempLiked, token);
    } catch (error) {
      alert(error.message);
    } finally {

    }
  }

  const addComment = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await commentPost(postID, comment, token);
      console.log(response.message)
      onClose();
    } catch (error) {
      alert(error.message);
    } finally {

    }
  }


  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      setLoading(true); // Set loading to true before making the API call

      try {
        const response = await getPost(postID, token);
        setPost([response.data]);

        const likedBy = response.data.likedBy
        console.log(response.data)
        setIsLiked(likedBy.includes(jwtDecode(token).id));
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false); // Set loading back to false after the API call completes
      }
    };
    fetchData();
  }, [isLiked, comment]);

  return (
    <div style={styles.wrapper}>
      {post == null && "Loading"}
      {post &&
        post?.map((p) => (
          <div key={p._id} style={styles.postContainer}>
            <UserPost post={p} isLiked={isLiked} likeHandler={likeHandler} />
            <Comments comments={p.comments} />
            <Button onClick={onOpen} leftIcon={<FcComments />} colorScheme='teal' variant='outline'>
              Comment
            </Button>

            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add your comment</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Comment</FormLabel>
                    <Input ref={initialRef} value={comment} onChange={e=>setComment(e.target.value)} placeholder='Drop a comment here...' />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='teal' mr={3} onClick={addComment}>
                    Add Comment
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
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
};

const UserPost = ({ post, isLiked, likeHandler }) => {
  return (
    <Card style={{ ...styles.card, ...styles.postContainer }}>
      <CardBody>
        <span style={styles.createdAt}>{formatDateTime(post.createdAt)}</span>
        <h2 className="mb-3">{post.title}</h2>
        <div className="mb-3">
          {post.tags.map((tag, index) => (
            <Badge color="success" className="me-2" key={index}>
              {tag}
            </Badge>
          ))}
        </div>
        <p>
          <strong>Category:</strong> {post.category}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="d-flex gap-3 align-items-center" onClick={likeHandler}>

          {isLiked ? <FcLike className="fs-3" /> : <FcLikePlaceholder className="fs-3" />}
          <span>{post.likeCount}{post.likeCount == 1 ? " Like" : " Likes"} </span>
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
            <div key={comment.id} className="d-flex flex-column gap-2">
              <strong>{comment.user}</strong>
              <p className="ms-3 mb-0">{comment.content}</p>
              <Divider />
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
