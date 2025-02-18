import { PathRoute } from "#src/contants/route.ts"
import { Analytics } from "#src/pages/home/Analytics/index.tsx"
import Report from "#src/pages/pages/Pages/index.tsx"
import Project from "#src/pages/pages/Pages/Project.tsx"
import PagesOverview from "#src/pages/pages/ProfileOverview/index.tsx"
import Setting from "#src/pages/pages/ProfileOverview/Setting.tsx"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Dashboard from "./pages/home/Dashboard"

function App() {
  return (
    <Routes>
      <Route path={PathRoute.dashboard} element={<Dashboard />} />
      <Route path={PathRoute.analytics} element={<Analytics />} />
      <Route path={PathRoute.profile_overview} element={<PagesOverview />} />
      <Route path={PathRoute.user_report} element={<Report />} />
      <Route path={PathRoute.project} element={<Project />} />
      <Route path={PathRoute.setting} element={<Setting />} />
    </Routes>
  )
}

export default App
