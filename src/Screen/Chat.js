import React, { Component } from "react";
import { chatData } from "./chatData";
import "./chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.messagesEndRef = React.createRef();
  }
  scrollToBottom() {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div>
        <div className="chatmain">
          <div className="chathead">
            <img src={chatData.imageMe} />
            <p className="chatheading ps-3">{chatData.name}</p>
          </div>
          <div className="chatcontent">
            {chatData.chat.map(
              (values, index) => (
                <div
                  className={values.titleType === "me" ? "chatme" : "chatyou "}
                  ref={this.messagesEndRef}
                >
                  {values.titleType === "you" ? (
                    <>
                      <img
                        src={
                          values.titleType === "me"
                            ? chatData.imageMe
                            : chatData.imageYou
                        }
                      />
                      <p>{values.message}</p>
                    </>
                  ) : (
                    <>
                      <p>{values.message}</p>
                      <img
                        src={
                          values.titleType === "me"
                            ? chatData.imageMe
                            : chatData.imageYou
                        }
                      />
                    </>
                  )}
                </div>
              )
              // ) : (
              //   <div className="chatyou" ref={this.messagesEndRef}>
              //     <img src={chatData.imageYou} />
              //     <p>{values.message}</p>
              //   </div>
              // );
            )}
            <div></div>
          </div>
        </div>
        <div className="chatinput">
          <img src="images/browse.png" className="browse m-1" />
          <input type="text" className="input m-1" />
          <img src="images/emoji.png" className="float-end m-1" alt="photo" />
        </div>
      </div>
    );
  }
}

export default Chat;
