import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function useSocket(url) {
  const socket = io.connect(URI);
  return socket;
}

export default useSocket;
