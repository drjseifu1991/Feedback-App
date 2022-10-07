import { useState } from "react"
import React from "react"
import Header from "./component/Header"
import FeedbackList from "./component/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from './component/FeedbackStats'
import FeedbackForm from "./component/FeedbackForm"
import { v4 as uuidv4 } from 'uuid'

const App = () => {
    const [feedbackData, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete the feedback?")) {
            setFeedback(feedbackData.filter((item) => item.id !== id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = +uuidv4()
        setFeedback([newFeedback, ...feedbackData])
        console.log(newFeedback)
    }
    return (
        <>
            <Header text="Feedback-UI"/>
            <FeedbackForm handleAdd = {addFeedback}/>
            <FeedbackStats feedback = {feedbackData}/>
            <div className="container">
                <FeedbackList 
                feedbackList = { feedbackData }
                handleDelete = { deleteFeedback }/>
            </div>
            
        </>

    )
}
export default App