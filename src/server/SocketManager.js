const io = require('./index.js').io;
const {VERIFY_USER, USER_CONNECTED, LOGOUT} = require('../Events')
const { createUser, createMessage, createChat } = require('../Factories')
let connectedUsers= {}

module.exports = function(socket){
    console.log("Socket Id is " + socket.id);  
    //Verify username
    socket.on(VERIFY_USER, (nickname, callback)=>{
        if(isUser(connectedUsers ,nickname)) {
            callback({ isUser:true, user:null})
        }else{
            callback({ isUser:false, user:createUser({name:nickname})})
        }
    })

    //User connects with username
    socket.on(USER_CONNECTED, (user)=>{
        connectedUsers= addUser(connectedUsers,user)
        socket.user = user
        io.emit(USER_CONNECTED, connectedUsers);
        console.log(connectedUsers);
    })
}

//Add new user
function addUser(userlist,user){
    let newlist = Object.assign({},userlist)
    newlist[user.name] = user
    return newlist
}

//Removes user from the list passed in 
function removeUser(userlist,username){
    let newlist = Object.assign({},userlist)
    delete newlist[username]
    return newlist
}

//Check if user exists
function isUser(userlist, username){
    return username in userlist;
}
