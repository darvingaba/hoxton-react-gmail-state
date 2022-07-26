import Header from "./components/Header";

import initialEmails from "./data/emails";

import { useState } from "react";

import "./App.css";

type Email = {
  id: number;
  read: boolean;
  sender: string;
  title: string;
  starred: boolean;
} 

function App() {
  // Use initialEmails for state
  // console.log(initialEmails);
  const [emails, setEmails] = useState(initialEmails);
  const [hiddenEmails, setHiddenEmails] = useState(false);
  
  function toggleRead(clickedEmails){
    const newEmails = structuredClone(emails);
    const clickedEmail = newEmails.find(email => email.id === clickedEmails.id);
    clickedEmail.read = !clickedEmail.read;
    setEmails(newEmails);
  }
  function toggleStar(clickedEmails){
    const newEmails = structuredClone(emails);
    const clickedEmail = newEmails.find(email => email.id === clickedEmails.id);
    clickedEmail.starred = !clickedEmail.starred;
    setEmails(newEmails);
  }
  let listOfEmails = emails;

  if (hiddenEmails) {
    listOfEmails = emails.filter(email => !email.read);
  } 
  function toggleHidden() {
    setHiddenEmails(!hiddenEmails);
  }
  

  let unreadEmails = 0;
  for (let i = 0; i < listOfEmails.length; i++) {
    if (!listOfEmails[i].read) {
      unreadEmails++;
    }
  }

  // for (let unreadEmail of listOfEmails) {
  //   if (!unreadEmail.read) {
  //     unreadEmail++;
  //   }
  // }

  let starredEmails = 0;
  for (let i = 0; i < listOfEmails.length; i++) {
    if (listOfEmails[i].starred) {
      starredEmails++;
    }
  }
  // for (let starred of listOfEmails) {
  //   if (starred.starred) {
  //     starredEmails++;
  //   }
  // }
  return (

    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails}</span>
          </li>
          <li
            className="item"
            onClick={() => {

            }}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              onChange={() => {
                toggleHidden();
              }}
            />
          </li>
        </ul>
      </nav>


      <main className="emails">
        {/* Render a list of emails here */}
        <ul className="email-list">
          {listOfEmails.map((email) => (
            <li className= {email.read ? "email read" : "email unread"}>
                <input
                  checked={email.read}
                  onClick={() => {
                    toggleRead(email);
                  }}
                  type="checkbox"
                />

              <div className="star">
                <input
                  
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onClick={() => {
                    toggleStar(email);
                  }}
                />

              </div>

              <div className="sender">{email.sender}</div>
              
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
