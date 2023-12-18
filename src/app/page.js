import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Search />
    </main>
  )
}
