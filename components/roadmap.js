import Link from 'next/link'

import IslandService from 'services/islandService'

const Roadmap = ({ id, name, modules }) => {
  const islands = IslandService.get()
  console.log(modules.filter(module => islands[module.id]))
  const completed = modules.filter(module => islands[module.id]).length

  return (
    <Link href={`/perfil/roadmaps/${id}`}>
      <div className='p-4 mt-4 border-2 border-black rounded-md flex justify-between'>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold'>{name}</h2>
          <p className='text-base'><b>{completed}/{modules.length}</b> ILHAS DOMINADAS</p>
        </div>
      </div>
    </Link>
  )
}

export default Roadmap
