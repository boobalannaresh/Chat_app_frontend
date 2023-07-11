import { io } from "socket.io-client";
import React from "react";


// const SOCKET_URL ="https://chat-app-backend-chi-virid.vercel.app";
// export const socket = io(SOCKET_URL);


var connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  const ENDPOINT = "https://chat-app-backend-chi-virid.vercel.app"; 
export  const socket = io(ENDPOINT, connectionOptions);


// app context
export const AppContext = React.createContext();