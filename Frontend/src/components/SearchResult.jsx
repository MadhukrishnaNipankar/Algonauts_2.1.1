import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Card, Heading, Divider, CardBody, Stack, Badge, Text, Image, Button } from '@chakra-ui/react'
import { SlUserFollow, SlUserUnfollow } from "react-icons/sl";
const SearchResult = () => {
  const location = useLocation();
  const data = location.state?.data;
  const [users, setUsers] = useState(null);
  const [startups, setStartups] = useState(null);
  const randomImage = ["https://xsgames.co/randomusers/avatar.php?g=female", "https://xsgames.co/randomusers/avatar.php?g=male"]

  const selectRamdomImage = () => {
    console.log("hey", randomImage[Math.floor(Math.random() * randomImage.length)])
    return randomImage[Math.floor(Math.random() * randomImage.length)];
  }

  function filterDataByRole(data) {
    const filteredData = {
      user: [],
      startup: []
    };

    data.forEach(entry => {
      if (entry.role === "user") {
        const userData = {
          _id: entry._id,
          name: entry.name,
          emailId: entry.emailId,
          profilePhotoURL: entry.profilePhotoURL,
          bio: entry.bio,
          links: entry.links,
          skills: entry.skills,
          interests: entry.interests,
          pastExperiences: entry.pastExperiences
        };
        filteredData.user.push(userData);
      } else if (entry.role === "startup") {
        const startupData = {
          _id: entry._id,
          name: entry.name,
          emailId: entry.emailId,
          startupName: entry.startupName,
          description: entry.description,
          missionStatement: entry.missionStatement,
          founders: entry.founders,
          industry: entry.industry,
          location: entry.location,
          websiteUrl: entry.websiteUrl,
          createdAt: entry.createdAt,
          updatedAt: entry.updatedAt
        };
        filteredData.startup.push(startupData);
      }
    });

    return filteredData;
  }

  useEffect(() => {
    const filteredData = filterDataByRole(data);
    setUsers(filteredData.user);
    setStartups(filteredData.startup)
  }, [data])

  return (
    <div className="container mt-3">
      {
        users?.length > 0 &&
        <div>
          <h4>Users</h4>
          <div className='d-flex flex-wrap gap-3'>
            {
              users?.map((user, i) => {
                const img = selectRamdomImage();
                return (
                  <UserCard name={user.name} bio={user.bio} skills={user.skills} img={img} />
                )
              })
            }
          </div>
          <Divider />
        </div>
      }



      {
        startups?.length > 0 &&
        <div className='mt-3'>
          <h4>Startups</h4>
          <div className='d-flex flex-wrap gap-3'>
            {
              startups?.map((startup, i) => {
                const img = selectRamdomImage();
                return (
                  <StartUpCard startupName={startup.startupName} description={startup.description} offerings={startup.offerings} img={img} />
                )
              })
            }
          </div>
        </div>
      }
    </div>
  )
}

export default SearchResult

const UserCard = ({ name, bio, skills, img }) => {
  return (
    <Card maxW='sm' style={{width:"30rem"}}>
      <CardBody>
        <Image
          src={img}
          alt='image'
          borderRadius='lg'
          style={{textAlign:"center", margin:"auto"}}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>
            {bio}
          </Text>
          <div className='d-flex gap-3 flex-wrap'>
            {
              skills?.map((skill, index) => {
                return (
                  <Badge colorScheme='purple' key={index}>{skill}</Badge>
                )
              })
            }
          </div>

        </Stack>
      </CardBody>
    </Card>
  )
}


const StartUpCard = ({ startupName, description, offerings, img }) => {
  return (
    <Card maxW='sm' style={{width:"30rem"}}>
      <CardBody >
        <Image
          src={img}
          alt='user image'
          borderRadius='lg'
          style={{textAlign:"center", margin:"auto"}}
        />
        <Stack mt='6' spacing='3' style={{height:" 80%"}}>
          <Heading size='md'>{startupName}</Heading>
          <Text>
            {description}
          </Text>
          <Button colorScheme='blue' style={{position:"absolute",top:"4px",right:"4px"}} leftIcon={<SlUserFollow />}
          >Follow
          </Button>
          <div className='d-flex gap-3 flex-wrap'>
            {
              offerings?.map((offering, index) => {
                return (
                  <Badge colorScheme='purple' key={index}>{offering}</Badge>
                )
              })
            }
          </div>

        </Stack>
      </CardBody>
    </Card>
  )
}
