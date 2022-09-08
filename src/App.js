import "./App.css";
import React, { useEffect, useState } from "react";
import User from "./Pages/User/User";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileError from "./Error/MobileError";
function App() {
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(orientation:portrait)").matches) {
      // eslint-disable-next-line
      setMobile(false);
    } else if (window.innerWidth < "1000") {
      setMobile(false);
    }


    document.body.requestFullscreen();

    // console.log(mobile);
    // eslint-disable-next-line
  }, []);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

// Watch for fullscreenchange
useEffect(() => {
  function onFullscreenChange() {
    setIsFullscreen(Boolean(document.body));
  }
        
  document.addEventListener('fullscreenchange', onFullscreenChange);

  return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
}, []);

  return mobile === true ? <User /> : <MobileError />;
}

export default App;
