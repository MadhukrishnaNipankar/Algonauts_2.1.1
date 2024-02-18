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
        categoryId: '',
        tags: ''
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
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
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
        const postData = {
            title: post.title,
            content: post.content,
            category: post.categoryId,
            tags: post.tags.split(',') 
        };
        console.log("Post Data:", postData);
 
        setPost({
            title: '',
            content: '',
            categoryId: '',
            tags: ''
        });
        setImage(null); 
        toast.success("Post Created!!");
    };

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    const styles = {
        wrapper: {
            padding: "2rem", 
            backgroundColor: "#f9f9f9", 
            minHeight: "calc(100vh - 56px)" 
        },
        card: {
            maxWidth: "800px",
            margin: "0 auto"
        }
    };

    return (
        <div style={styles.wrapper}>
            <Card style={styles.card}>
                <CardBody>
                    <h3>Let's Write Something...✍️🤔</h3>
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
                            <Label for="category">Post Category</Label>
                            <Input
                                type="text"
                                id="category"
                                placeholder="Enter category"
                                className="rounded-0"
                                name="categoryId"
                                value={post.categoryId}
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
                        <div className="my-3">
                            <Label for="tags">Tags (comma-separated)</Label>
                            <Input
                                type="text"
                                id="tags"
                                placeholder="Enter tags"
                                className="rounded-0"
                                name="tags"
                                value={post.tags}
                                onChange={fieldChanged}
                            />
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
