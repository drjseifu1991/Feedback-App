import { useState } from "react"
import React from "react"
import Header from "./component/Header"
import FeedbackList from "./component/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from './component/FeedbackStats'

const App = () => {
    const [feedbackData, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete the feedback?")) {
            setFeedback(feedbackData.filter((item) => item.id !== id))
        }
    }
    return (
        <>
            <Header text="Feedback-UI"/>
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