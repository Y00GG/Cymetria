import './App.css'
import Home from './page/Home'
import { NextUIProvider } from "@nextui-org/react";

function App() {

  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  )
}

export default App
