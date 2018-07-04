import React, { Component } from 'react';
import FAChevronDown from 'react-icons/lib/md/keyboard-arrow-down'
import FAMenu from 'react-icons/lib/fa/list-ul'
import FASearch from 'react-icons/lib/fa/search'
import MdEject from 'react-icons/lib/md/eject'

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state={
            chats:[],
            activeChat:null
        };
    }
    
    render() {  
        const { chats, activeChat, user, setActiveChat, logout} = this.props
        return (
            <div id="side-bar">
                <div className="heading">
                    
                </div>
            </div>
        )
    }
}
export default ChatContainer;