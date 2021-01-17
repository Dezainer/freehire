import Image from 'next/image'

import Header from 'components/header'
import MainButton from 'components/mainButton'
import Link from 'next/link'

const Home = () => (
  <div className='h-screen flex flex-col'>
    <Header />
    <div className='bg-green h-full flex flex-col flex-1 justify-between'>
      <div className='pt-16'>
        <h1 className='text-4xl text-center'>
          Quer <b>Aprender</b><br />
          com a Gente?
        </h1>
        <p className='text-base text-center pt-4'>
          Tem de 14 a 24 anos, é inovador e<br />
          gosta de desafios? <b>Então esse<br />
          game é seu!</b>
        </p>
      </div>
      <div>
        <Image
          src='/images/lule.png'
          width={824}
          height={824}
        />
        <div className='p-6'>
          <Link href='/nivelamento'>
            <MainButton component='a'>
              VAMOS NESSA
            </MainButton>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Home
