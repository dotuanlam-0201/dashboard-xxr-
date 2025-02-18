import { PathRoute } from "#src/contants/route.ts"
import CalendarPage from "#src/pages/application/Calendar/index.tsx"
import DataTable from "#src/pages/application/DataTable/index.tsx"
import { Analytics } from "#src/pages/home/Analytics/index.tsx"
import Report from "#src/pages/pages/Pages/index.tsx"
import Project from "#src/pages/pages/Pages/Project.tsx"
import Billing from "#src/pages/pages/ProfileOverview/Billing.tsx"
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
      <Route path={PathRoute.billing} element={<Billing />} />
      <Route path={PathRoute.calendar} element={<CalendarPage />} />
      <Route path={PathRoute.data_table} element={<DataTable />} />
    </Routes>
  )
}

export default App
