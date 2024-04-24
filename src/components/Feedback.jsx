import { useState } from "react";
import "./Feedback.css";
import { FaThumbsUp, FaThumbsDown, FaRedoAlt   } from 'react-icons/fa';
import { sendFeedback } from "../utils/comunication";


const Feedback = ({conversation}) => {

    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackText, setFeedbackText] = useState("");
    const [likedState, setLikedState] = useState(0);
    const [loading, setLoading] = useState(false);

    return(
    <>
        <div className="feedback_container">
            <div className="switch" onClick={
                () => {
                    console.log("feedback")
                    setShowFeedback(!showFeedback)
                }
            
            }>
                Feedback
            </div>
            <div className= {"feedback_main" + (!showFeedback? " vanish": "") }>
                <input 
                    type="text" 
                    name="feedback_text"  
                    placeholder="Write your feedback..."
                    value={feedbackText}
                    onChange={(e) => {
                        setFeedbackText(e.target.value)
                    }}
                    />
                <div className="like_dislike">
                    <div className={"button like " + (likedState == 1 ? "selected" : "")} onClick={()=>{setLikedState(1)}}>
                        <FaThumbsUp />
                    </div>
                    <div className={"dislike button "  + (likedState == -1 ? "selected": "")} onClick={()=>{setLikedState(-1)}}>
                        <FaThumbsDown />
                    </div>
                </div>
                <div className="submit_feedback button "
                    onClick={()=>{
                        console.log("submitting feedback")
                        console.log("feedback text: ", feedbackText)
                        console.log("liked state: ", likedState)
                        
                        setLoading(true)
                        sendFeedback(feedbackText, likedState, conversation).then((response) => {
                            console.log("feedback sent: ", response)
                            setFeedbackText("")
                            setLikedState(0)
                            setShowFeedback(false)
                            setLoading(false)
                        })
                    }}
                    
                >{
                !loading ? 
                "Submit" 
                : 
                <FaRedoAlt></FaRedoAlt>}</div>
            </div>
        </div>
    </>
    )

}

export default Feedback;

