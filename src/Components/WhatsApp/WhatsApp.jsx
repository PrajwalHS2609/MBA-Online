import React from "react";
import "./WhatsApp.css";
// import Scent from "./../../../Images/SCENT Logo.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  // let [visible, setVisible] = useState();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible(true);
  //     setTimeout(() => {
  //       setVisible(false);
  //     }, 10000); // Hide after 5 seconds
  //   }, 10000); // Show every 10 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <img src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="919742232700"
        accountName="R18 Education"
        // avatar={Scent} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="Welcome to R18 Education! " // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;
