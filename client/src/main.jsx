// /* eslint-disable no-unused-vars */
// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext.jsx";
// import {AnimatePresence, motion, useScroll } from "framer-motion";
// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <AnimatePresence>
//       <AuthProvider>
//         <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-50}} transition={{duration:0.8,ease:"easeOut"}}>
//              <App />
//         </motion.div>
       
//       </AuthProvider>
//     </AnimatePresence>

//     </BrowserRouter>
//   </React.StrictMode>
// );
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
