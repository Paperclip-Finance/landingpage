import React from 'react';
import './App.css';
import MacGuyver from './macguyver.js'

function App() {
  return (
    <div className="App">
      <video autoPlay={true} muted={true} playsInline={true} loop={true} id="myVideo">
          <source src="/retro-background.mp4" type="video/mp4"></source>
          <source src="/retro-background.webm" type="video/webm"></source>
      </video>
      
      <div className="content">
          <img id="site-logo" src="/paperclip-logo.png" alt="Paperclip Logo" />
          <MacGuyver speed={6000} startIdx={0} />
      </div>
    </div>
  );
}

export default App;
