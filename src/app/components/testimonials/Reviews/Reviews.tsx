import './style.css'
import Review from './Review/Review'
import StaticReview from './Review/StaticReview'
import review from '../../../../../controllers/reviews'
import { Suspense } from 'react'
import { useEffect, useState } from 'react'
import React from 'react'
const UserReviews = React.lazy(() => import('./UserReviews'))
export default function Reviews () {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    // Fetch posts when the component mounts
    const fetchPosts = async () => {
      try {
        const data = await review.fetchPosts()
        console.log(data)
        setReviews(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()

    // Clean up function to avoid memory leaks
    return () => {
      setReviews([])
    }
  }, [])
  return (
    <>
      <div className='mainSec'>
        {' '}
        <div className='Reviews'>
          <StaticReview></StaticReview>
          <StaticReview></StaticReview>
          <StaticReview></StaticReview>
          <StaticReview></StaticReview>
        </div>
        <form>
          {' '}
          <div className='inputForm'>
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Email'></input>
            <textarea placeholder='Review'></textarea>
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className='userReviews'>
        <Suspense fallback={<div>Loading...</div>}>
          <UserReviews reviews={reviews}></UserReviews>
        </Suspense>
      </div>
    </>
  )
}
