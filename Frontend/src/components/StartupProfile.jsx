// import React, { useEffect, useState } from 'react'
// import Spinner from "./Spinner";
// import { useNavigate } from 'react-router-dom';
// import { MdEdit } from "react-icons/md";

// const StartupProfile = () => {
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState(null);
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         const token = sessionStorage.getItem("token");
//     //         setLoading(true); // Set loading to true before making the API call

//     //         try {
//     //             const response = await viewProfile(token);
//     //             setData(response.data)
//     //         } catch (error) {
//     //             alert(error.message);
//     //         } finally {
//     //             setLoading(false); // Set loading back to false after the API call completes
//     //         }
//     //     }

//     //     fetchData()
//     // }, [])
//     return (
//         <>
//             <div className="container">
//                 <div
//                     className="spinner text-center"
//                     style={{
//                         margin: "auto",
//                         justifyContent: "center",
//                         display: loading ? "block" : "none",
//                     }}
//                 >
//                     <Spinner />
//                 </div>

//             </div>
//             {
//                 data && <div className='animate__animated animate__fadeIn'>
//                     <div style={styles.profileImageContainer} className='container'>
//                         <img className='bg-light' src={data?.profilePhotoURL} style={styles.profileImage}></img>
//                     </div>

//                     <div style={styles.profileDetailsSection} className='container'>
//                         <div>
//                             <h2 className='text-center'>{data?.name}</h2>
//                             <p>{data?.bio}</p>
//                             <div className="d-flex gap-3 links">
//                                 {
//                                     data?.links.map((link, index) => {
//                                         return (
//                                             <a href={link} key={index} target="_blank" rel="noopener noreferrer" className='link'>Link</a>
//                                         )
//                                     })
//                                 }
//                             </div>
//                         </div>
//                     </div>

//                     <div className="container">
//                     <ProfileOptionsTab firstTab={<RenderProfileDetails data={data}/>} secondTab={<AllPosts/>}/>
//                     </div>
                    
//                     <button className='btn btn-success' data-bs-toggle="tooltip" data-bs-title="Edit Profie" style={styles.editBtn} onClick={() => { navigate("/edit-profile") }}><MdEdit /></button>
//                 </div>
//             }
//         </>
//     )
// }

// export default StartupProfile