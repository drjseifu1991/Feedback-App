import { useState } from "react"
import React from "react"
import Header from "./component/Header"
import FeedbackList from "./component/FeedbackList"
import FeedbackData from "./data/FeedbackData"

const App = () => {
    const [feedbackData, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header text="Feedback-UI"/>
            <div className="container">
                <FeedbackList feedbackList={feedbackData}/>
                
            </div>
            
        </>

    )
}
export default App