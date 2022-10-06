import React from 'react'
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
const FeedbackItem = ({ feedback, reverse, handleDelete }) => {
  return (
    <Card reverse={reverse}>
      <div className='num-display'>{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className='close'>
        <FaTimes color="purple"/>
      </button>
      <div className='text-display'>{feedback.text}</div> 
    </Card>
  )
}

FeedbackItem.propTypes = {
  feedback : PropTypes.object.isRequired,
  reverse : PropTypes.bool.isRequired
}

export default FeedbackItem
