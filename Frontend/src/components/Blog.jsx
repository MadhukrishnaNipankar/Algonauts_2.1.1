

import React, { useState, useRef, useEffect } from "react";
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";

const Blog = () => {
    const editor = useRef(null);
    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState({
        title: '',
        content: '',
        categoryId: ''
    });
    const [image, setImage] = useState(null);

    useEffect(() => {
        // Simulated data loading for categories
        const sampleCategories = [
            { categoryId: 1, categoryTitle: 'Category 1' },
            { categoryId: 2, categoryTitle: 'Category 2' },
            { categoryId: 3, categoryTitle: 'Category 3' }
        ];
        setCategories(sampleCategories);
    }, []);

    const fieldChanged = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };

    const contentFieldChanged = (data) => {
        setPost({ ...post, 'content': data });
    };

    const createPost = (event) => {
        event.preventDefault();
        if (post.title.trim() === '') {
            toast.error("Post title is required!!");
            return;
        }
        if (post.content.trim() === '') {
            toast.error("Post content is required!!");
            return;
        }
        if (post.categoryId === '') {
            toast.error("Select some category!!");
            return;
        }
        // Here you would send the post data to the backend
        // For now, let's just log the post data
        console.log("Post Data:", post);
        // Reset form fields
        setPost({
            title: '',
            content: '',
            categoryId: ''
        });
        setImage(null); // Reset selected image
        toast.success("Post Created!!");
    };

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    const styles = {
        wrapper: {
            padding: "2rem", // Adjust as needed
            backgroundColor: "#f9f9f9", // Adjust as needed
            minHeight: "calc(100vh - 56px)" // Adjust as needed
        },
        card: {
            maxWidth: "800px", // Adjust as needed
            margin: "0 auto" // Center the card horizontally
        }
    };

    return (
        <div style={styles.wrapper}>
            <Card style={styles.card}>
                <CardBody>
                    <h3>What's on your mind?</h3>
                    <Form onSubmit={createPost}>
                        <div className="my-3">
                            <Label for="title">Post Title</Label>
                            <Input
                                type="text"
                                id="title"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="title"
                                value={post.title}
                                onChange={fieldChanged}
                            />
                        </div>
                        <div className="my-3">
                            <Label for="content">Post Content</Label>
                            <JoditEditor
                                ref={editor}
                                value={post.content}
                                onChange={(newContent) => contentFieldChanged(newContent)}
                            />
                        </div>
                        {/* <div className="mt-3">
                            <Label for="image">Select Post Banner</Label>
                            <Input id="image" type="file" onChange={handleFileChange} />
                        </div> */}
                        <div className="my-3">
                            <Label for="category">Post Category</Label>
                            <Input
                                type="select"
                                id="category"
                                className="rounded-0"
                                name="categoryId"
                                value={post.categoryId}
                                onChange={fieldChanged}
                            >
                                <option value="">-- Select category --</option>
                                {categories.map((category) => (
                                    <option value={category.categoryId} key={category.categoryId}>
                                        {category.categoryTitle}
                                    </option>
                                ))}
                            </Input>
                        </div>
                        <Container className="text-center">
                            <Button type="submit" className="rounded-0" color="primary">Create Post</Button>
                            <Button className="rounded-0 ms-2" color="danger">Reset Content</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Blog;
