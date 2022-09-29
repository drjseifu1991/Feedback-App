import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
const FeedbackList = ({feedbackList}) => {
    if (!feedbackList || feedbackList.length === 0) {
        return <p>No Feedback yet!</p>
    }
  return (
    <div>
      {feedbackList.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback ={feedback} reverse={false}/>
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
    feedbackList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}
export default FeedbackList
