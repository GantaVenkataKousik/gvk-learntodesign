import './style.css'
export default function Nav () {
  return (
    <>
      <div className='nav-container'>
        <nav className='navbar'>
          <div className='logo'>
            <h3>designwith_GVK</h3>
          </div>
          <div className='elements'>
            <li>home</li>
            <li>designs</li>
            <li>pricing</li>
            <li className='active'>Testimonals</li>
          </div>
          <div className='learnDesign'>Learn Design today</div>
        </nav>
        <div className='nav-tagline'>
          <div className='nav-tags'>
            <li>Top rated on Insta</li>
            <li>Unlimited Access</li>
            <li>100+ designs</li>
            <li>Daily Updates</li>
          </div>
        </div>
      </div>
    </>
  )
}
