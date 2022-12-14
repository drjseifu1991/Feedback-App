import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
const FeedbackList = ({feedbackList, handleDelete}) => {
    if (!feedbackList || feedbackList.length === 0) {
        return <p>No Feedback yet!</p>
    }
  return (
    <div>
      <AnimatePresence>
        {feedbackList.map((feedback) => (
          <motion.div 
          key={feedback.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            <FeedbackItem key={feedback.id} feedback ={feedback} 
            reverse={false} 
            handleDelete = {handleDelete}/>
          </motion.div>
          
        ))}
      </AnimatePresence>
    </div>

    // <div>
    //   {feedbackList.map((feedback) => (
    //     <FeedbackItem key={feedback.id} feedback ={feedback} 
    //     reverse={false} 
    //     handleDelete = {handleDelete}/>
    //   ))}
    // </div>
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
