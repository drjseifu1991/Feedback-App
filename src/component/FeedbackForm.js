import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'
import Button from './Button'
import RatingSelector from './RatingSelector'
import PropTypes from 'prop-types'
const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
            
        }
        setText('')
    }
    const changeText = (event) => {
        if(text === ' ') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== ' ' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }
        else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(event.target.value)
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How do you rate your service with us?</h2>
                <RatingSelector select = {(rating) => setRating(rating) }/>
                <div className='input-group'>
                    <input type = "text" placeholder='Write your review' onChange={changeText} value={text}/>
                    <Button type="Submit" text="Send" isDisabled = {btnDisabled}/>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

FeedbackForm.propTypes = {
    handleAdd : PropTypes.func
}

export default FeedbackForm
