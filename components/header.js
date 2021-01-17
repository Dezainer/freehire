import Logo from 'components/logo'
import Link from 'next/link'

const Header = () => (
  <div>
    <div className='flex justify-center items-center h-20'>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
    </div>
    <div className='bg-green h-5 rounded-t-2xl' />
  </div>
)

export default Header
