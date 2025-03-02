import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// Wait for DOM to be fully loaded before mounting
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root")

  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } else {
    console.error("Root element with id 'root' not found in the document")
  }
})

