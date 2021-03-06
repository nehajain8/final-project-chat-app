import React, { Component } from 'react';
import Sidebar from './Sidebar';

class ChatContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            chats:[],
            activeChat:null
        };
    }
    setActiveChat = (activeChat)=>{
        this.setState({activeChat})
    }
    render() {
        const { user, logout } = this.props
        return (
            <div className="container">
                <Sidebar
                    logout={logout}
                    chats={chats}
                    user={user}
                    activeChat={activeChat}
                    setActiveChat={this.setActiveChat}

                />
            </div> 
        )
    }
}

export default ChatContainer;