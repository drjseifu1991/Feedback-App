import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'
import Button from './Button'
const FeedbackForm = (handleAdd) => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
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
            <form>
                <h2>How do you rate your service with us?</h2>
                <div className='input-group'>
                    <input type = "text" placeholder='Write your review' onChange={changeText} value={text}/>
                    <Button type="Submit" text="Send" isDisabled = {btnDisabled}/>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
