import { io } from "socket.io-client";
import React from "react";
import { API } from "../config";

const SOCKET_URL =`${API}`;
export const socket = io(SOCKET_URL);
// app context
export const AppContext = React.createContext();