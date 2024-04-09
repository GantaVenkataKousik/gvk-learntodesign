import './style.css'
export default function Headline () {
  return (
    <>
      <div className='Headline'>
        <div className='request'>
          <img src='./images/gvk/gvk.png'></img>

          <h3>
            <span>{'{'}</span>Your Feedback means a lot<span>{'}'}</span>
          </h3>
        </div>
        <h1>View my work on social platforms</h1>
        <h1>Give Your Valuable Feedback</h1>
        <div className='socialProfiles'>
          <li>
            <a href='https://www.instagram.com/_uiux_gvk/' target='_blank'>
              <img src='./images/icons/twitter.png'></img>
              <span>_uiux_gvk</span>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/_uiux_gvk' target='_blank'>
              {' '}
              <img src='./images/icons/insta.png'></img>
              <span>_uiux_gvk</span>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/venkatakousik/'
              target='_blank'
            >
              {' '}
              <img src='./images/icons/LinkedIn_icon.svg.png'></img>
              <span>venkatakousik</span>
            </a>
          </li>
        </div>
      </div>
    </>
  )
}
