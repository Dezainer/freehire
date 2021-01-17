const Roadmap = ({ name, source, link }) => (
  <a href={link} target='_blank'>
    <div className='p-4 mt-4 border-2 border-black rounded-md flex justify-between'>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p className='text-base'>{source}</p>
      </div>
    </div>
  </a>
)

export default Roadmap
