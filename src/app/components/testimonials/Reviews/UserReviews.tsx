import './style.css'
import React from 'react'
import Review from './Review/Review'

interface ReviewData {
  name: string
  review: string
}

interface UserReviewsProps {
  reviews: ReviewData[]
}
const UserReviews: React.FC<UserReviewsProps> = ({ reviews }) => {
  return (
    <div className='userReviewsContainer'>
      {reviews.map((review: ReviewData, index: number) => (
        <Review key={index} username={review.name} content={review.review} />
      ))}
    </div>
  )
}

export default UserReviews
