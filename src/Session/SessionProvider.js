import React, { useState, useEffect } from "react";
import SessionContext from "./SessionContext";
import { Redirect } from "react-router-dom";

export default function SessionProvider({ children }) {

  return (
    <SessionContext.Provider>
      {children}
    </SessionContext.Provider>
  );
}
