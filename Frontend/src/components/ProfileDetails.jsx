import React, { useEffect } from 'react'
import '../App.css'
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const ProfileDetails = () => {
    const navigate = useNavigate();
    const styles = {
        profileImage: {
            borderRadius: "50%",
            position: "relative",
            bottom: "-5rem",
            border: ".3rem solid white"
        },
        profileImageContainer: {
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            backgroundImage: `url("https://t3.ftcdn.net/jpg/00/32/43/82/360_F_32438200_oMeluL7Q2cR50GALrJQMCwgYImFK7hkl.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "15rem"
        },
        profileDetailsSection: {
            padding: "5rem 1rem 1rem 1rem",
            backgroundColor: "white",
            border: "1px solid rgb(219, 219, 219)",
            borderRadius: "0 0 1rem 1rem"
        },
        section: {
            border: "1px solid rgb(219, 219, 219)",
            backgroundColor: "white",
            padding: "1rem",
            margin: "1rem 0",
            borderRadius: "1rem"
        },
        editBtn: {
            position: "fixed",
            bottom: "4rem",
            right: "2rem",
            borderRadius: "10rem",
            fontSize: "1.3rem"
        }
    }



    return (
        <div>
            <div style={styles.profileImageContainer} className='container'>
                <img src='https://media.licdn.com/dms/image/D4D35AQGiDWGuJ5Vuug/profile-framedphoto-shrink_200_200/0/1700740384484?e=1708801200&v=beta&t=gP4mEMy7RTxgz-wh6vZhR0ZlEglYdCtp4Hy3zOXo_Uw' style={styles.profileImage}></img>
            </div>

            <div style={styles.profileDetailsSection} className='container'>
                <div>
                    <h2 className='text-center'>Siddhesh Chaudhari</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur sapiente odio perferendis sed? Accusamus accusantium iste beatae eius harum animi deleniti inventore non laborum labore illum dolorem modi, ducimus aspernatur.</p>
                    <div className="d-flex gap-4 links">
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='link'>LinkedIn</a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='link'>LinkedIn</a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='link'>LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className='container p-0'>
                <div>
                    <div style={styles.section}>
                        <h4>Past Experience</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, natus animi labore dignissimos sequi sint! Debitis asperiores iure laborum, possimus dolore praesentium dolorem quas similique ut alias illum consectetur laudantium.</p>
                    </div>

                    <div style={styles.section}>
                        <h4>Skills</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, natus animi labore dignissimos sequi sint! Debitis asperiores iure laborum, possimus dolore praesentium dolorem quas similique ut alias illum consectetur laudantium.</p>

                    </div>

                    <div style={styles.section}>
                        <h4>Interests</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, natus animi labore dignissimos sequi sint! Debitis asperiores iure laborum, possimus dolore praesentium dolorem quas similique ut alias illum consectetur laudantium.</p>

                    </div>
                </div>
            </div>
            <button className='btn btn-success' data-bs-toggle="tooltip" data-bs-title="Edit Profie" style={styles.editBtn} onClick={()=>{navigate("/edit-profile")}}><MdEdit /></button>
        </div>
    )
}

export default ProfileDetails