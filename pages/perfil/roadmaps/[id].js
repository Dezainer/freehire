import { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import Header from 'components/header'
import MainButton from 'components/mainButton'
import Islands from 'components/islands'
import Course from 'components/course'
import IslandService from 'services/islandService'

import roadmaps from 'data/roadmaps'

const Roadmap = () => {
  const roadmap = roadmaps[0]
  const [tab, setTab] = useState(0)
  const currentModule = roadmap.modules[tab]
  const [islands, setIslands] = useState({})
  const [loading, setLoading] = useState(false)
  const completed = islands && roadmap.modules.filter(module => islands[module.id]).length
  const percentage = completed / roadmap.modules.length * 100

  const fetchIslands = () => {
    const islands = IslandService.get()
    setIslands(islands)
  }

  const handleTest = async () => {
    setLoading(true)
    await IslandService.testIsland(currentModule.id)

    fetchIslands()
    setLoading(false)
  }

  useEffect(() => {
    fetchIslands()
  }, [])

  return islands ? (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='bg-green flex-1 p-6'>
        <div>
          <h1 className='text-2xl font-bold'>
            {roadmap.name}
          </h1>
          <h2 className='text-base'>
            <b>{percentage.toFixed(0)}%</b> CONCLUÍDO
          </h2>
        </div>
        <div className='flex justify-center pt-6'>
          <Islands
            onClick={tab => setTab(tab)}
            completed={roadmap.modules.map(module => islands[module.id])}
          />
        </div>
        <div className='pt-6'>
          <h3 className='text-base font-bold'>
            {currentModule.name}
          </h3>
          <div>
            {currentModule.courses.map(course => (
              <Course key={course.name} {...course} />
            ))}
          </div>
        </div>
        <div className='pt-6'>
          <MainButton
            disabled={loading}
            onClick={handleTest}
            startIcon={loading && (
              <CircularProgress color='secondary' size={24} />
            )}
          >
            FAZER PROVA
          </MainButton>
        </div>
      </div>
    </div>
  ) : null
}

export default Roadmap
