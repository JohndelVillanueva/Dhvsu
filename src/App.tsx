import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "../components/Content"; // Ensure the file exists at 'src/components/Content.tsx' or adjust the path accordingly
import Layout from "../components/Layout"; // Ensure the file exists at 'src/components/Layout.tsx' or adjust the path accordingly
import AdminDashboard from "../pages/admin/AdminDashboard"; // Ensure the file exists at 'src/pages/admin/AdminDashboard.tsx' or adjust the path accordingly
import StudentRecords from "../pages/student/StudentRecord"; // Ensure the file exists at 'src/pages/student/StudentRecords.tsx' or adjust the path accordingly
import ClassScheduling from "../pages/student/ClassScheduling"; // Ensure the file exists at 'src/pages/student/ClassScheduling.tsx' or adjust the path accordingly
export default function App() {
  return (
    <div className="App">
      {/* Main content area */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/class-scheduling" element={<ClassScheduling />} />
            <Route path="/student-records" element={<StudentRecords />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
          </Routes>
        </Layout>
        {/* Footer */}
      </Router>
    </div>
  );
}
