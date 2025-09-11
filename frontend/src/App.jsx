import { Route, Routes } from "react-router-dom";
import UpdateStudent from "./student/update";
import Add from "./student/AddS";
import DisplayS from "./student/DisplayS";
import Dashboard from "./Dashboard";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/Student" element={<DisplayS />} />
      <Route path="/update/student/:id" element={<UpdateStudent />} />
      <Route path="/addstudent" element={<Add />} />

      
    </Routes>
  </>
}

export default App;