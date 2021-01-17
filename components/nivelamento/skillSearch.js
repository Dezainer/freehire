import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Slide from '@material-ui/core/Slide'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import skills from 'data/skills.json'

const SkillSearch = ({ onSelect, open, onClose }) => {
  const [term, setTerm] = useState('')
  const [filteredSkills, setFilteredSkills] = useState(skills)

  useEffect(() => {
    setFilteredSkills(skills.filter(skill => (
      skill.name.toLowerCase().includes(term.toLowerCase())
    )))
  }, [term])

  return (
    <Slide direction='up' in={open}>
      <div className='bg-white w-full h-3/6 rounded-t-2xl fixed bottom-0'>
        <div className='px-6 pt-6 flex flex-col justify-between h-full'>
          <TextField
            variant='filled'
            label='Busque pela Skill'
            onChange={e => setTerm(e.target.value)}
            value={term}
            color='secondary'
            fullWidth
          />
          <div className='pt-2 pb-6 overflow-y-auto h-full'>
            {filteredSkills.map(skill => (
              <h3
                className='text-2xl font-bold px-4 pt-4'
                key={skill.name}
                onClick={() => onSelect(skill)}
              >
                {skill.name}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}

export default SkillSearch
