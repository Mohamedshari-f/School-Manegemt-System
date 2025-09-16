import { Route, Routes } from "react-router-dom";
import Add from "./student/AddS";
import DisplayS from "./student/DisplayS";
import Dashboard from "./Dashboard";
import UpdateStudent from "./student/update";
import DisplayT from "./Teacher/Display";
import AddT from "./Teacher/AddT";
import UpdateTeacher from "./Teacher/UpdateTeacher";
import Assingment from "./classAssignment/Assignment";
import AddAssignment from "./classAssignment/AddAssignment";
import Update from "./classAssignment/uppdateAssi";
import DisplayAttendance from "./Attendance/attendance";
import DisplayBooks from "./Books/Book";

import Fee from "./Fee/AddF";
// import StudentLogin from "./ExamAdmin/StudentLogin";
import ExamAdmin from "./ExamAdmin/Exam Admin";
import StudentRegister from "./PaasStudent/Register";
import StudentLogin from "./PaasStudent/StudentLogin";
// import StudentLogin from "./ExamAdmin/StudentLogin";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/Student" element={<DisplayS />} />
      <Route path="/update/student/:id" element={<UpdateStudent />} />
      <Route path="/addstudent" element={<Add />} />
      <Route path="/Teachers" element={<DisplayT />} />
      <Route path="/addteacher" element={<AddT />} />
      <Route path="/Assingment" element={<Assingment/>} />
      <Route path="/AddAssignment" element={<AddAssignment/>} />
      <Route path="/Fee" element={<Fee/>} />
      <Route path="/StudentLogin" element={<StudentLogin/>} />
      <Route path="/Update/:id" element={<Update/>} />
      <Route path="/ExamAdmin" element={<ExamAdmin/>} />
      <Route path="/StudentLogin" element={<StudentLogin/>} />
      <Route path="/StudentRegister" element={<StudentRegister/>} />

<Route path="/update/Teacher/:id" element={<UpdateTeacher />} />
<Route path="/Attendance" element={<DisplayAttendance />} />
<Route path="/Courses" element={<DisplayBooks />} />

    </Routes>
  </>
}

export default App;