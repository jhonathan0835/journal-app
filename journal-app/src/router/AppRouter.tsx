import { Route, Routes } from "react-router"
import AuthRoutes from "../auth/routes/AuthRoutes"
import JournalRoutes from "../journal/routes/JournalRoutes"

const AppRouter = () => {
  return (
    <Routes>
        {/* Login */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* JournalApp */}
        <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}

export default AppRouter
