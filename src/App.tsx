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

  // function toggleChecked(id: number) {
  //     emails.map((email:Email) => {
  //       const newEmail = structuredClone(emails);
  //       const checkedEmail = newEmail.find((email) => email.id === id);
  //         checkedEmail.read = !checkedEmail.read;
  //         setEmails(checkedEmail);
  //     });
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
          {initialEmails.map((email:Email) => (
            <li className= {email.read ? "email read" : "email"}>
              <div className="read">
                <input
                  onChange={() => {
                  // toggleChecked(email.id);
                  const newEmail = structuredClone(emails);
                  console.log(newEmail);
                  const checkedEmail = newEmail.find((email:Email) => email.id === email.id);
                  checkedEmail.read = !checkedEmail.read;
                  setEmails(checkedEmail);
                  }}
                  type="checkbox"
                />
              </div>

              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  title="bookmark page"
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
