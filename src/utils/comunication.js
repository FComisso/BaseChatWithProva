
const endpoint = 'http://127.0.0.1:5000';
// const endpoint = "https://aib2app.azurewebsites.net"
const generative_answer_endpoint =  endpoint + '/generate_answer';
const feedback_endpoint = endpoint + '/feedback';
const conversation_id_endpoint = endpoint + '/get_conversation_id';
const login_endpoint = endpoint + '/login';

console.log("Base endpoint: ", endpoint)

const getConversationId = async () => {
    console.log("calling endpoint: ", conversation_id_endpoint)
    let response = await fetch(conversation_id_endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })

    response = await response.json();

    return response.conversation_id;
}

const sendFeedback = async (feedback_text, liked_state, conversation_id) => {
    let body = {
        "feedback_text": feedback_text,
        "liked_state": liked_state,
        "conversation_id": conversation_id
    }

    let response = await fetch(feedback_endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(body)
    })

    return response.status == 200;
}

const getGenerativeAnswer = async (question, conversation_id) => {
    
    let body = {
        "question": question,
        "conversation_id": conversation_id
    }

    console.log("requesting generative answer with body: ", body)

    let response =  await fetch(generative_answer_endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(body)

    })

    response = await response.json();
    console.log("response: ", response)

    return response;
}

const getFakeGenerativeAnswer = async (question, history) => {
    let result = "ciao belo"
    return result;
}

const login = async (username, password) => {
    let body = {
        "username": username,
        "password": password
    }

    let response = await fetch(login_endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(body)
    })

    return response.status == 200;
}

export {getFakeGenerativeAnswer, getGenerativeAnswer, getConversationId, sendFeedback, login};