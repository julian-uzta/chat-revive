"use client"

import React from "react";
import { TrashIcon } from "./svg/TrashIcon";
import { ChatSmileyIcon } from "./svg/ChatSmileyIcon";
import { LoadingModal } from "./components/LoadingModal";
import { AvatarIcon } from "./svg/AvatarIcon";
import { BackIcon } from "./svg/BackIcon";

interface User {
  id: string,
  name: string
}
interface Message {
  dateTime: Date,
  content: string,
  direction: "to"|"from"
}
interface Chat {
  recipient: User,
  messages: Message[]
}
interface Backup {
  sender: User,
  backupDate: Date,
  logLength: number,
  chats: Chat[]
}

interface ChatBubbleProps {
  chat: Chat | undefined;
}


export default function HomePage() {
  const [backup, setBackup] = React.useState<Backup|undefined>(undefined)
  const [viewState, setViewState] = React.useState<"upload"|"chats">("upload")

  const [loading, setLoading] = React.useState<boolean>(false)

  const [currentChat, setCurrentChat] = React.useState<Chat|undefined>(undefined)
  
  const chatRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scrollToBottom();
  }, [currentChat]);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 0);
  };



  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target) return
      const content = e.target.result as string

      try {
        const data = JSON.parse(content) as Backup
        if(data) {
          setBackup(data)
        }
      }
      catch(error) {
        console.error("Error parsing JSON:", error);
      }
    }

    reader.readAsText(file);
  }

  const removeBackup = () => {
    setBackup(undefined)
  } 

  const toggleView = () => {
    if(viewState == "upload") {
      setLoading(true)
      setTimeout(() => {
        setViewState("chats")
        setLoading(false)
      }, 2000); 
    }
    if(viewState == "chats") {
      setBackup(undefined)
      setViewState("upload")
    }    
  }

  const changeChat = (chat: Chat) => {
    setCurrentChat(chat)
  }

  const ChatBubble = ({ chat }: ChatBubbleProps) => {
    const lastMessage = chat?.messages[chat?.messages.length - 1]
    return (
      <button onClick={() => { chat && changeChat(chat)}} className="w-full mx-auto border border-slate-500 bg-gray-700 bg-opacity-20 rounded-xl justify-around my-4 p-4 text-left">
        <div>
          <div>
            {chat?.recipient.name}
          </div>
          <div>
            {
              lastMessage?.dateTime ?
              lastMessage?.dateTime.toString()
              : "N/A"
            }
          </div>
          { chat?.messages && 
            <div className="badge badge-accent relative float-right bottom-12 h-6 w-10 mx-1">{chat.messages.length}</div>
          }
        </div>      
      </button>
    )    
  }

  const renderMessages = () => {
    const fromClass = "chat chat-start"
    const toClass = "chat chat-end"
    return (
      <div ref={chatRef} className="h-128 my-4 w-full bg-base-default border border-slate-300 border-opacity-25 rounded-xl p-4 overflow-y-auto">
        {
          currentChat?.messages.map((message, index) => (
            <div className={`group ${message.direction == "to" ? toClass : fromClass}` } key={index}>
              <div className="chat-image avatar">
                <div className="w-12 rounded-full bg-gray-700 bg-opacity-25">
                  <div className="w-full h-full flex items-center justify-center">
                    <AvatarIcon/>
                  </div>
                </div>
              </div>
              <div className="chat-bubble">{message.content}</div>
              <div className="chat-footer opacity-50 hidden group-hover:block">
                {message?.dateTime.toString()}
              </div>                
            </div>
          ))
        }
      </div>
    );
  };

  React.useEffect(() => {
    const modal = document.getElementById('loading_modal') as HTMLDialogElement | null;
    if(modal) {
      if(loading) {
        modal.showModal()
      } else {
        modal.close()
      }
    }
  }, [loading])
  
  return (
    viewState == "upload" ?
    <div className="flex-grow flex flex-col items-center mt-32">
      <h1 className="text-3xl font-bold">Revive your chats!</h1>
      <ul className="steps my-12">
        <li data-content="↑" className="step step-neutral">Load backup</li>
        <li data-content="●" className="step step-neutral">See chats</li>
        <li data-content="✓" className="step step-neutral">Success</li>
      </ul>
      { backup ?
        <div className="file-input file-input-bordered file-input-success w-1/3 h-24 flex items-center justify-between">
          <div className="px-8">
            <p>Backup recovered from {backup.sender.name}&apos;s iPhone on {backup.backupDate.toString()}</p>
            <p>Log length: {backup.logLength} days</p>
          </div>
          <div className="opacity-50 px-2 hover:opacity-100">
            <button onClick={removeBackup}>
              <TrashIcon/>
            </button>
          </div>
        </div>
        :
        <input type="file" className="file-input file-input-bordered file-input-success w-1/3 h-24" accept=".wsp.bk" onChange={handleFileUpload}/>
      }
      <div className="my-8">
        { backup ? 
          <button className="btn btn-outline btn-success w-40" onClick={toggleView}>View chats</button>
          :
          <button className="btn btn-neutral w-40">View chats</button>
        }
      </div>
      { loading && <LoadingModal/>}      
    </div>
    : viewState == "chats" &&
    <div className="flex-grow flex flex-row items-center mt-24">
      <button onClick={toggleView}>
        <div className="absolute right-12 top-24 rounded-full bg-gray-700 bg-opacity-25 p-2 opacity-75 hover:opacity-100 hover:bg-opacity-50 hover:scale-125 hover:right-14 hover:top-28">
            <BackIcon/>
        </div>      
      </button>
      <div className="w-1/3 items-center">
        <div className="w-5/6 mx-auto">
          <h2 className="text-2xl font-bold mx-2">Chats</h2>
          <div className="overflow-y-auto h-160 mt-6" style={{boxShadow: "inset 0 25px 25px -25px rgba(46, 52, 64, 0.05), inset 0 -25px 25px -25px rgba(46, 52, 64, 0.05)"}}>
            {
              backup?.chats.map((chat) => <ChatBubble key={chat.recipient.id} chat={chat}/>)
            }
          </div>
        </div>
      </div>
      <div className="w-2/3 h-160 rounded-xl bg-gray-700 bg-opacity-25 mt-16 mr-12">
        {
          currentChat ?
          <div className="flex flex-col m-8">
            <div className="h-12 w-full bg-base-default border border-slate-300 border-opacity-25 rounded-xl items-center flex justify-between">
              <h2 className="mx-4">To: {currentChat.recipient.name}</h2>
              <h2 className="mx-4 italic opacity-50">{currentChat.messages.length} messages recovered</h2>
            </div>
            { renderMessages() }
          </div>
          :
          <div className="items-center opacity-25 h-full flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold pb-4">Select a chat...</h2>
            <ChatSmileyIcon/>
          </div>
        }
      </div>      
    </div>
  );
}
