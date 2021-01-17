import { useState, useEffect } from 'react'
import Image from 'next/image'
import Avatar from '@material-ui/core/Avatar'

import Header from 'components/header'
import MainButton from 'components/mainButton'
import Skill from 'components/skill'
import Roadmap from 'components/roadmap'
import UserService from 'services/userService'

import roadmaps from 'data/roadmaps'

const Profile = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(UserService.get())
  }, [])

  return user ? (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='bg-green flex-1 p-6'>
        <div className='flex items-center'>
          <Avatar
            src='/images/avatar.png'
            style={{ width: 76, height: 76 }}
          />
          <div className='pl-4'>
            <h1 className='text-2xl font-bold'>Joanna Farinha</h1>
            <p className='text-base'>Nível 24</p>
          </div>
        </div>
        <div className='pt-6'>
          <h2 className='text-base font-bold'>
            MINHAS SKILLS
          </h2>
          <div>
            {user.skills.map(skill => (
              <Skill key={skill.name} {...skill} />
            ))}
          </div>
        </div>
        <div className='pt-6'>
          <h2 className='text-base font-bold'>
            MEUS ROADMAPS
          </h2>
          <div>
            {roadmaps.map(roadmap => (
              <Roadmap key={roadmap.name} {...roadmap} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Profile
