import { PathRoute } from "#src/contants/route.ts"
import { Analytics } from "#src/pages/home/Analytics/index.tsx"
import PagesOverview from "#src/pages/pages/ProfileOverview/index.tsx"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Dashboard from "./pages/home/Dashboard"

function App() {
  return (
    <Routes>
      <Route path={PathRoute.dashboard} element={<Dashboard />} />
      <Route path={PathRoute.analytics} element={<Analytics />} />
      <Route path={PathRoute.profile_overview} element={<PagesOverview />} />
    </Routes>
  )
}

export default App
