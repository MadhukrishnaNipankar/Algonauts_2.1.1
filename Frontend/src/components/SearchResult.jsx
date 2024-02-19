import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Card, Heading, Divider, CardBody, Stack, Badge, Text, Image } from '@chakra-ui/react'
const SearchResult = () => {
  const location = useLocation();
  const data = location.state?.data;
  const [users, setUsers] = useState(null);
  const [startups, setStartups] = useState(null);

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
    console.log("users", users);
    console.log("start", startups)
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
              return (
                <UserCard name={user.name} bio={user.bio} skills={user.skills} />
              )
            })
          }
        </div>
        </div>
      }
<Divider/>

      {
        startups?.length > 0 &&
        <div className='mt-3'>
          <h4>Startups</h4>
        <div className='d-flex flex-wrap gap-3'>
          {
            startups?.map((startup, i) => {
              return (
                <StartUpCard startupName={startup.startupName} description={startup.description} offerings={startup.offerings} />
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

const UserCard = ({ name, bio, skills }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='image'
          borderRadius='lg'
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


const StartUpCard = ({ startupName, description, offerings }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='image'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{startupName}</Heading>
          <Text>
            {description}
          </Text>
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
