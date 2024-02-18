import { React, useState } from 'react'
import { MdDeleteOutline, MdEdit } from "react-icons/md";

const EditProfile = () => {
  // Initial skills array
  const initialSkills = ["JavaScript", "React", "Node.js", "HTML", "CSS"];
  const [skills, setSkills] = useState(initialSkills);

  // Function to update a skill
  const updateSkill = (index, newValue) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = newValue;
    setSkills(updatedSkills);
  };

  // Function to delete a skill
  const deleteSkill = (index) => {
    const filteredSkills = skills.filter((_, i) => i !== index);
    setSkills(filteredSkills);
  };

  const initialExperiences = [
    {
      jobTitle: "Software Engineer",
      company: "ABC Company",
      duration: "2020 - 2022",
      description: "Worked on developing web applications using React and Node.js."
    },
    {
      jobTitle: "Intern",
      company: "XYZ Inc.",
      duration: "2019",
      description: "Assisted in testing and debugging code for mobile applications."
    }
  ];

  const [experiences, setExperiences] = useState(initialExperiences);
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const saveExperience = (updatedExperience) => {
    if (isAdding) {
      setExperiences([...experiences, updatedExperience]);
    } else {
      const updatedExperiences = experiences.map((exp, i) => i === selectedExperienceIndex ? updatedExperience : exp);
      setExperiences(updatedExperiences);
    }
    closeModal();
  };

  // Function to delete a experience
  const deleteExperience = (index) => {
    const filteredExperience = experiences.filter((_, i) => i !== index);
    setExperiences(filteredExperience);
  };

  const openModalForEdit = (index) => {
    setIsAdding(false);
    setSelectedExperienceIndex(index);
  };

  const openModalForAdd = () => {
    setIsAdding(true);
    setSelectedExperienceIndex(null); // Ensure no experience is selected for edit
  };

  const closeModal = () => {
    setSelectedExperienceIndex(null);
    setIsAdding(false);
  };


    // Initial skills array
    const initialInterests = ["Reading", "Traveling", "Photography"];
    const [interests, setInterests] = useState(initialInterests);
  
    // Function to update a skill
    const updateInterests = (index, newValue) => {
      const updatedInterests = [...interests];
      updatedInterests[index] = newValue;
      setInterests(updatedInterests);
    };
  
    // Function to delete a skill
    const deleteInterests = (index) => {
      const filteredInterests = interests.filter((_, i) => i !== index);
      setInterests(filteredInterests);
    };

  return (
    <div className="container d-flex justify-content-center p-3 ">
      <div className="d-flex flex-column" style={{ width: "50rem" }}>
        <h4 className='text-center'>Edit Profile</h4>

        <div className='card p-2 mb-3'>
          <div className='d-flex flex-column gap-1 mb-3'>
            <label htmlFor="fname">Name</label>
            <input className="form-control" type="text" id="fname" name="name" placeholder="Enter Your Name" />
          </div>

          <div className='d-flex flex-column gap-1 mb-3'>
            <label htmlFor="bio">Bio</label>
            <input className="form-control" type="text" id="bio" name="bio" placeholder="Enter Bio" />
          </div>
        </div>

        {/* skills */}
        <div className='card p-2 d-flex flex-column gap-1 mb-3'>
          <label>Skills</label>
          <div className='d-flex flex-column flex-wrap gap-3'>
            <div className='d-flex flex-wrap gap-3'>
              {skills.map((skill, index) => (
                <div className='d-flex gap-1' key={index}>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => updateSkill(index, e.target.value)}
                    className='form-control'
                  />
                  <button className='btn btn-danger btn-sm' onClick={() => deleteSkill(index)}><MdDeleteOutline /></button>
                </div>
              ))}
            </div>
            <button className='btn btn-primary btn-sm w-50 m-auto' onClick={() => setSkills([...skills, ''])}>Add New Skill</button>
          </div>

        </div>

        {/* experiences */}
        <div className='card p-2 d-flex flex-column gap-1 mb-3' >
          <label>Experiences</label>
          {experiences.map((experience, index) => (
            <div className='card p-2 d-flex flex-row align-items-center gap-2' key={index} >
              <span>{experience.company} </span>
              <MdEdit className='ms-auto text-success' style={{ cursor: 'pointer' }} onClick={() => openModalForEdit(index)} />

              <MdDeleteOutline className='text-danger' style={{ cursor: 'pointer' }} onClick={() => deleteExperience(index)} />
            </div>


          ))}
          <button className='btn btn-primary btn-sm w-50 m-auto mt-2' onClick={openModalForAdd}>Add Experience</button>
          {(selectedExperienceIndex !== null || isAdding) && (
            <ExperienceModal
              experience={isAdding ? null : experiences[selectedExperienceIndex]}
              onSave={saveExperience}
              onClose={closeModal}
            />
          )}
        </div>

        {/* Interests */}
        <div className='card p-2 d-flex flex-column gap-1 mb-3'>
          <label>Interests</label>
          <div className='d-flex flex-column flex-wrap gap-3'>
            <div className='d-flex flex-wrap gap-3'>
              {interests.map((interest, index) => (
                <div className='d-flex gap-1' key={index}>
                  <input
                    type="text"
                    value={interest}
                    onChange={(e) => updateInterests(index, e.target.value)}
                    className='form-control'
                  />
                  <button className='btn btn-danger btn-sm' onClick={() => deleteInterests(index)}><MdDeleteOutline /></button>
                </div>
              ))}
            </div>
            <button className='btn btn-primary btn-sm w-50 m-auto' onClick={() => setInterests([...interests, ''])}>Add New Skill</button>
          </div>

        </div>

        <input type="submit" value="Save Changes" className='btn btn-success m-auto' />
      </div>
    </div>
  )
}

export default EditProfile



const ExperienceModal = ({ experience, onSave, onClose }) => {
  // Initialize local state with experience or empty fields for a new experience
  const [localExperience, setLocalExperience] = useState(experience || {
    jobTitle: '',
    company: '',
    duration: '',
    description: ''
  });

  const handleChange = (field, value) => {
    setLocalExperience({ ...localExperience, [field]: value });
  };

  const style = {
    model: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgba(0, 0, 0,.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "10"
    },
    modelContent: {
      backgroundColor: "white",
      padding: "2rem",
      display: 'flex',
      flexDirection: "column",
      gap: "2rem",
      width: "50rem",
      borderRadius: ".5rem"
    }
  }

  return (
    <div className='animate__animated animate__fadeIn' style={style.model}>
      <div style={style.modelContent} className='shadow'>

        <input
          type="text"
          placeholder="Job Title"
          value={localExperience.jobTitle}
          onChange={(e) => handleChange('jobTitle', e.target.value)}
          className='form-control'
        />
        <input
          type="text"
          placeholder="Company"
          value={localExperience.company}
          onChange={(e) => handleChange('company', e.target.value)}
          className='form-control'
        />
        <input
          type="text"
          placeholder="Duration"
          value={localExperience.duration}
          onChange={(e) => handleChange('duration', e.target.value)}
          className='form-control'
        />
        <textarea
          placeholder="Description"
          value={localExperience.description}
          onChange={(e) => handleChange('description', e.target.value)}
          className='form-control'
        />
        <button className='btn btn-success' onClick={() => onSave(localExperience)}>Save</button>
        <button className="btn btn-danger" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};