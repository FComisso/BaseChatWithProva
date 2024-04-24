import { useEffect, useRef, useState } from "react";
import "./Chat.css";
import { getGenerativeAnswer, getConversationId } from "../utils/comunication";
import MarkdownToJsx from "markdown-to-jsx";
import Feedback from "./Feedback";
import { FaRedoAlt, FaArrowRight } from 'react-icons/fa';


const fake_messages = [
    [

        {
            "role": "human",
            "message": "Hello! How do i get the something?"
        },
        {
            "role": "assistant",
            "message": "Hello! You can get the something by doing this and that."
        }
    ],

]

const USE_FAKE_DATA = false;
const USE_FAKE_ANSWER = false;


const Message = ({ role, message, showPopup }) => {
    return (
        <div className={role + " message"} onClick={() => {
            console.log("copy to clipboard")
            navigator.clipboard.writeText(message)
            showPopup()
        }}>
            <MarkdownToJsx>
                {message}
            </MarkdownToJsx>
        </div>
    )
}

const Chat = ({ showPopup }) => {

    const [history, setHistory] = useState(USE_FAKE_DATA ? fake_messages : [])
    const [question, setQuestion] = useState(null)
    const [input, setInput] = useState("")
    const [conversationId, setConversationId] = useState(null)
    const [loading, setLoading] = useState(false)
        
    const reloadConversation = () => {
        setLoading(true)
        setHistory([])
        getConversationId()
            .then(
                response => {
                    setConversationId(response)
                    setLoading(false)
                }
            )
    }

    const messages = history.map((message, index) => {

        let user_message = message[0]
        let assistant_message = message[1]

        return (
            <div className="interaction" key={index}>
                <Message role={"human"} message={user_message.message} showPopup={showPopup} />
                <Message role={"assistant"} message={assistant_message.message} showPopup={showPopup} />

            </div>
        )
    });

    if (question !=     null) {
        messages.push(
            <div className="interaction" key={history.length}>

                <Message role={"human"} message={question} showPopup={showPopup} />

                <div className="assistant message animation">
                    <p>Searching...</p>
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (question !== null) {

            if (!USE_FAKE_ANSWER) {
                setLoading(true)
                getGenerativeAnswer(question, conversationId)
                    .then(
                        response => {
                            let new_interaction = [
                                {
                                    "role": "human",
                                    "message": question
                                },
                                {
                                    "role": "assistant",
                                    "message": response.answer
                                }
                            ];

                            setHistory([...history, new_interaction])
                            setQuestion(null)
                            setLoading(false)
                        }
                    )
            } else {
                let new_interaction = [
                    {
                        "role": "human",
                        "message": question
                    },
                    {
                        "role": "assistant",
                        "message": "I'm sorry, I'm not able to answer that right now."
                    }
                ];

                setHistory([...history, new_interaction])
                setQuestion(null)
            }
        }
    }
        , [question])




    useEffect(() => {
        if (conversationId === null) {

            reloadConversation()
        }
    }, [])

    useEffect(() => {
        console.log("conversation id: ", conversationId)
    }, [conversationId])

    return (
        <div className="chat_container">
            <h1>Chat with Data!</h1>

            <div className="messages">
                {messages}
            </div>

            <Feedback conversation= {conversationId}></Feedback>

            <div className="input">
                <button
                    className="reload_button"
                    disabled={loading}
                    onClick={() => {
                        reloadConversation()
                    }}>
                    <FaRedoAlt />
                </button>
                <input
                    type="text"
                    placeholder="Type your message here..."
                    value={input}
                    disabled={loading}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }
                    }
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (input === "")
                                return;
                            setQuestion(input)
                            setInput("")
                        }
                    }}
                />
                <button
                    disabled={loading}
                    className="send_button"
                    onClick={() => {
                        if (input === "")
                            return;
                        setQuestion(input)
                        setInput("")
                    }}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Chat;