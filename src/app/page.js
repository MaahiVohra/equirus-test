import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
export default function Home() {
  return (
    <main>
      <div className='diagonal-section'></div>
      <Navbar />
      <Search />
    </main>
  )
}
