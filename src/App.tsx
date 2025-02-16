import { PathRoute } from "#src/contants/route.ts"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Dashboard from "./pages/home/dashboard"

function App() {
  return (
    <Routes>
      <Route path={PathRoute.dashboard} element={<Dashboard />} />
    </Routes>
  )
}

export default App
