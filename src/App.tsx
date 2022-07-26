import Header from "./components/Header";

import initialEmails from "./data/emails";

import { useState } from "react";

import "./App.css";

function App() {
  // Use initialEmails for state
  console.log(initialEmails);
  const [emails, setEmails] = useState(initialEmails);

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
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* Render a list of emails here */}
        <ul className="email-list">
          {initialEmails.map((email) => (
            <li className="email">
              <div className="read"><input onClick={
                () => {
                  // change the class of the email to "read"
                  // if it is already "read", change it to "unread"
                  email.read ? ;
                }
                } type="checkbox"/></div>
              <div className="sender">{email.sender}
              </div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
