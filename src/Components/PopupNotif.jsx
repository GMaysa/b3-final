/** @format */

// /** @format */

// import React, { useEffect, useState } from "react";
// import SockJS from "sockjs-client";
// import Stomp from "stompjs";
// import { AiOutlineClose } from "react-icons/ai";

// const Popup = ({ onClose }) => {
//   const [open, setOpen] = useState(true);

//   const handleClose = () => {
//     setOpen(false);
//     onClose();
//   };

//   useEffect(() => {
//     let stompClient = null;
//     let privateStompClient = null;

//     let socket = new SockJS(
//       "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/ws"
//     );
//     stompClient = Stomp.over(socket);
//     stompClient.connect({}, function (frame) {
//       console.log(frame);
//       stompClient.subscribe("/public/all", function (result) {
//         show(JSON.parse(result.body));
//       });
//     });

//     socket = new SockJS("https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/ws");
//     privateStompClient = Stomp.over(socket);
//     privateStompClient.connect({}, function (frame) {
//       console.log(frame);
//       privateStompClient.subscribe("/user/private", function (result) {
//         console.log(result.body);
//         show(JSON.parse(result.body));
//       });
//     });
//   }, []);

//   const show = (message) => {
//     const response = document.getElementById("messages");
//     const div = document.createElement("div");
//     div.className = "notification";
//     const divContent = document.createElement("div");
//     divContent.className = "notification-content";
//     const pCategory = document.createElement("h6");
//     pCategory.className = "text-gray-500";
//     pCategory.innerText = message.categoryName;
//     const pTitle = document.createElement("p");
//     pTitle.className = "text-base font-medium";
//     pTitle.innerText = message.title;
//     const pContent = document.createElement("p");
//     pContent.className = "text-gray-500 text-sm";
//     pContent.innerText = message.content;

//     divContent.appendChild(pCategory);
//     divContent.appendChild(pTitle);
//     divContent.appendChild(pContent);
//     div.appendChild(divContent);
//     response.appendChild(div);
//   };

//   return (
//     <>
//       {open && (
//         <div className="absolute font-medium bg-white rounded-md shadow-lg w-1/2 px-3 py-2 top-10 right-0 z-50">
//           <div className="justify-end flex mx-auto" onClick={handleClose}>
//             <AiOutlineClose />
//           </div>
//           <div></div>
//           <div id="messages" className="mt-4"></div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;
import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { AiOutlineClose } from "react-icons/ai";

const PopupNotif = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    let stompClient = null;
    let privateStompClient = null;

    let socket = new SockJS(
      "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/ws"
    );
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      console.log(frame);
      stompClient.subscribe("/public/all", function (result) {
        showNotification(JSON.parse(result.body));
      });
    });

    socket = new SockJS("https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/ws");
    privateStompClient = Stomp.over(socket);
    privateStompClient.connect({}, function (frame) {
      console.log(frame);
      privateStompClient.subscribe("/user/private", function (result) {
        console.log(result.body);
        showNotification(JSON.parse(result.body));
      });
    });

    const showNotification = (message) => {
      // setMessages((prevMessages) => [...prevMessages, message]);
      // setShowPopup(true);
      console.log(showNotification);
    };

    // return () => {
    //   stompClient.disconnect();
    //   privateStompClient.disconnect();
    // };
  }, []);

  return (
    <div>
      {/* ...komponen lainnya... */}
      {showPopup && (
        <div className="absolute font-medium bg-white rounded-md shadow-lg w-1/2 px-3 py-2 top-10 right-0 z-50">
          <div className="justify-end flex mx-auto" onClick={handleClosePopup}>
            <AiOutlineClose />
          </div>
          <div></div>
          <div id="messages" className="mt-4">
            {messages.map((message, index) => (
              <div className="notification" key={index}>
                <div className="notification-content">
                  <h6 className="text-gray-500">{message.categoryName}</h6>
                  <p className="text-base font-medium">{message.title}</p>
                  <p className="text-gray-500 text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupNotif;
