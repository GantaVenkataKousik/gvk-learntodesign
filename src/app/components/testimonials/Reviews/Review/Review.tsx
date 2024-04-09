import './style.css'
import React from 'react'

interface ReviewProps {
  username: string
  content: string
}

const Review: React.FC<ReviewProps> = ({ username, content }) => {
  return (
    <>
      <div className='Review'>
        <h2 className='username'>{username}</h2>
        <div className='review'>
          <p>{content}</p>
        </div>
        <div>
          <h3 className='readmore'>Read more</h3>
        </div>
      </div>
    </>
  )
}

export default Review
