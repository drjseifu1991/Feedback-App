import { useState } from "react"
import React from "react"
import Header from "./component/Header"
import FeedbackList from "./component/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from './component/FeedbackStats'
import FeedbackForm from "./component/FeedbackForm"

const App = () => {
    const [feedbackData, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete the feedback?")) {
            setFeedback(feedbackData.filter((item) => item.id !== id))
        }
    }
    const addFeedback = (text) => {
        setFeedback(feedbackData.push({
            id : feedbackData.lastIndexOf()+1,
            rating : 10,
            text : text
        }))
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