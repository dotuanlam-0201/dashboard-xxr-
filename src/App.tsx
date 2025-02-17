import { PathRoute } from "#src/contants/route.ts"
import { Analytics } from "#src/pages/home/Analytics/index.tsx"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Dashboard from "./pages/home/Dashboard"

function App() {
  return (
    <Routes>
      <Route path={PathRoute.dashboard} element={<Dashboard />} />
      <Route path={PathRoute.analytics} element={<Analytics />} />
    </Routes>
  )
}

export default App
