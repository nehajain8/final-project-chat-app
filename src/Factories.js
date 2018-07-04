const uuidv4= require('uuid/v4')
/*
    Create user
    creates a user.
    @prop id {string}
    @prop name {string}
    @param {object}
    name {string}
*/
const createUser = ({name=""} = { })=>(
    {
        id: uuidv4(),
        name
    }
)
/* 
    Creates message object
    @prop id {string}
    @prop time date {Date}
    @prop message  {string} sender of the message
    @param {object}
        message {string}
        sender {string}
*/
const createMessage = ({message="", sender=""} = { }) => (
    {
        id: uuidv4(),
        time:new Date(Date.now()),
        message,
        sender
    }
)
/* 
    create Chat
    Creates a Chat object
    @prop id {string}
    @prop name {string}
    @prop users {Array.Message}
    @param {object}
        message {Array.message}
        name {string}
        users {Array.string}
*/
const createChat = ({message=[], name= "Community", users= []} = {}) => (
    {
        id: uuidv4(),
        name,
        messages,
        users,
        typingUsers: []
    }
)
/*
    @param date {Date}
    @return a string represented in 24hr format
*/
const getTime = (date) => {
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports ={
    createUser,
    createMessage,
    createChat,
    getTime
}
