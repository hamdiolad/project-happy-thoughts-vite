import PropTypes from "prop-types";
//import SingleMessage from "./Components/singleMessage"; // Adjust the path as needed
//import SingleMessage from "./SingleMessage";
import { SingleMessage } from "../SingleMessageC/SingleMessage"; // Adjust the path as needed

import "./messageList.css";

export const MessageList = ({ messageList, fetchPosts }) => {
  return (
    <div className="message-list-container">
      {messageList.map((singleMessage) => (
        <div className="message-container" key={singleMessage._id}>
          <SingleMessage
            key={singleMessage._id}
            singleMessage={singleMessage}
            fetchPosts={fetchPosts}
          />
        </div>
      ))}
    </div>
  );
};

// Define prop types for the MessageList component
MessageList.propTypes = {
  messageList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired, // Assuming _id is a string and required
      // Add other prop validations for the singleMessage object as needed
    })
  ).isRequired,
  fetchPosts: PropTypes.func.isRequired, // Assuming fetchPosts is a function and required
};

//export default MessageList;
