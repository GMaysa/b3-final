/** @format */

import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";

const PopupNotif = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [notifications, setNotifications] = useState([]);

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
      stompClient.subscribe("/public/all", function (result) {
        showNotification(JSON.parse(result.body));
      });
    });

    socket = new SockJS("https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/ws");
    privateStompClient = Stomp.over(socket);
    privateStompClient.connect({}, function (frame) {
      privateStompClient.subscribe("/user/private", function (result) {
        showNotification(JSON.parse(result.body));
      });
    });

    const showNotification = (message) => {
      setNotifications((prevNotifications) => [...prevNotifications, message]);
      setShowPopup(true);
    };
  }, []);

  return (
    <div>
      {showPopup && (
        <>
          {notifications.map((notification) => (
            <div className="absolute font-medium bg-white rounded-md shadow-lg w-1/2 px-1 py-2 p-5 top-10 right-0 z-50 border">
              <div
                className="justify-end flex mx-auto px-6 pt-4 hover:text-red-600"
                onClick={handleClosePopup}
              >
                <AiOutlineClose className="text-xl" />
              </div>

              <div id="messages" className="mt-4">
                <div
                  className="flex gap-4 px-4 py-7 w-full pt-3 "
                  key={notification.payload.notificationId}
                >
                  <div className="pt-1">
                    <button className="bg-[#A06ECE] rounded-full p-1">
                      <IoMdNotifications className="text-white" />
                    </button>
                  </div>
                  <div className="w-full mx-auto">
                    <div className="flex">
                      <h6 className="text-gray-500">
                        {notification.payload.categoryName}
                      </h6>
                      <p className="text-gray-500 justify-end flex gap-3 items-center text-sm w-full">
                        {new Date(
                          notification.payload.createdAt * 1000
                        ).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                    <p className="text-lg font-medium">
                      {notification.payload.title}
                    </p>
                    <p className="text-gray-600 text-base">
                      {" "}
                      {notification.payload.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PopupNotif;
