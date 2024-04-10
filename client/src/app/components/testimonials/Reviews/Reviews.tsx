import './style.css'
import { useEffect, useState } from 'react'
import { Suspense } from 'react'
import React from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'

const UserReviews = dynamic(() => import('./UserReviews'), { ssr: false })
const StaticReview = dynamic(() => import('./Review/StaticReview'), {
  ssr: false
})
interface Review {
  name: string
  email: string
  review: string
}

export default function Reviews () {
  const [reviews, setReviews] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [review, setReview] = useState('')
  const fp = async () => {
    try {
      const response = await axios.get('http://localhost:9002/fetchPosts')
      console.log(response)
      setReviews(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  useEffect(() => {
    // Fetch posts when the component mounts

    fp()

    // Clean up function to avoid memory leaks
    return () => {
      setReviews([])
    }
  }, [])
  const addReview = async () => {
    try {
      const response = await axios.post('http://localhost:9002/addReview', {
        name: name,
        email: email,
        review: review
      })
      console.log(response)

      setReviews(prevReviews => [...prevReviews, response.data] as Review[])
      // Clear input fields after successful addition
      setName('')
      setEmail('')
      setReview('')
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }
  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handleReviewChange = event => {
    setReview(event.target.value)
  }
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
        <form action={addReview}>
          {' '}
          <div className='inputForm'>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={handleNameChange}
            />
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              placeholder='Review'
              value={review}
              onChange={handleReviewChange}
            ></textarea>
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
