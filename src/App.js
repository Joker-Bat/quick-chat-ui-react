import { useEffect } from "react";
import "./App.scss";

import { useDispatch } from "react-redux";

import { ChatApp } from "./container/ChatApp";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // To measure correct height on mobile
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
    };

    window.addEventListener("resize", appHeight);
    appHeight();

    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, [dispatch]);

  return (
    <div className="App">
      <ChatApp />
    </div>
  );
}

export default App;
