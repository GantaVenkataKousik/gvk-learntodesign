import Image from 'next/image'
import Nav from './components/nav/Nav'
import Testimonals from './components/testimonials/Testimonials'
import './responsive.css'

export default function Main () {
  return (
    <>
      <Nav></Nav>
      <Testimonals></Testimonals>
    </>
  )
}
