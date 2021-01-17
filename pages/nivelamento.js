import { useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useRouter } from 'next/router'

import Header from 'components/header'
import MainButton from 'components/mainButton'
import Skill from 'components/skill'
import AddSkill from 'components/nivelamento/addSkill'
import SkillSearch from 'components/nivelamento/skillSearch'
import UserService from 'services/userService'

const Nivelamento = () => {
  const [open, setOpen] = useState(false)
  const [skills, setSkills] = useState([])
  const minSkills = 3
  const remainingToSelect = Math.max(minSkills - skills.length, 0)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const addSkill = skill => {
    setSkills([...skills, skill])
    setOpen(false)
  }

  const removeSkill = skillToRemove => {
    setSkills(skills.filter(skill => skill.name !== skillToRemove.name))
  }

  const procceed = async () => {
    setLoading(true)
    await UserService.create({ skills })

    router.push('/perfil')
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='bg-green flex flex-col flex-1'>
        <h1 className='pt-6 text-4xl text-center'>
          Encontre as<br />
          suas <b>skills</b>
        </h1>
        <p className='text-base text-center pt-4'>
          Selecione <b>{remainingToSelect > 0 && remainingToSelect} skills</b> que você ja manja<br />
          ou gostaria de aprender
        </p>
        <div className='p-6 flex-1'>
          <AddSkill
            onClick={() => setOpen(true)}
          />
          {skills.map(skill => (
            <Skill
              key={skill.name}
              {...skill}
              onRemove={() => removeSkill(skill)}
            />
          ))}
        </div>
        <div className='p-6'>
          <MainButton
            disabled={loading || skills.length < minSkills}
            onClick={procceed}
            startIcon={loading && (
              <CircularProgress color='secondary' size={24} />
            )}
          >
            {loading ? 'CALCULANDO SEU NÍVEL' : 'FAZER NIVELAMENTO'}
          </MainButton>
        </div>
      </div>
      <SkillSearch
        open={open}
        onClose={() => open && setOpen(false)}
        onSelect={skill => addSkill(skill)}
      />
    </div>
  )
}

export default Nivelamento
