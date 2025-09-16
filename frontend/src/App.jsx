import { Route, Routes } from "react-router-dom";
// import Add from "./student/AddS";
import DisplayS from "./student/DisplayS";
import Dashboard from "./Dashboard";
import UpdateStudent from "./student/update";
import DisplayT from "./Teacher/Display";
import AddT from "./Teacher/AddT";
import UpdateTeacher from "./Teacher/UpdateTeacher";
// import Assingment from "./classAssignment/Assignment";
import AddAssignment from "./classAssignment/AddAssignment";
import Update from "./classAssignment/uppdateAssi";
import DisplayAttendance from "./Attendance/attendance";
import DisplayBooks from "./Books/Book";

import Fee from "./Fee/AddF";
import Adds from "./student/AddS";
// import StudentLogin from "./ExamAdmin/StudentLogin";
import ExamAdmin from "./ExamAdmin/Exam Admin";
import Assignment from "./classAssignment/Assignment";
import MainPage from "./Security/Login&register";

import AddBook from "./Books/AddBook";
import RegisterStudent from "./Security/Register";


function App() {
  return <>
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/Dash" element={<Dashboard />} />

      <Route path="/Student" element={<DisplayS />} />
      <Route path="/update/student/:id" element={<UpdateStudent />} />
      <Route path="/Teachers" element={<DisplayT />} />
      <Route path="/Adds" element={<Adds/>} />
      <Route path="/addteacher" element={<AddT />} />
      <Route path="/Assignment" element={<Assignment/>} />
      <Route path="/AddAssignment" element={<AddAssignment/>} />
      <Route path="/Fee" element={<Fee/>} />
      {/* <Route path="/StudentLogin" element={<StudentLogin/>} /> */}
      <Route path="/Update/:id" element={<Update/>} />
      <Route path="/ExamAdmin" element={<ExamAdmin/>} />
      <Route path="/AddBook" element={<AddBook/>} />
     
<Route path="/update/Teacher/:id" element={<UpdateTeacher />} />
<Route path="/Attendance" element={<DisplayAttendance />} />
<Route path="/Courses" element={<DisplayBooks />} />
<Route path="/login-student" element={<RegisterStudent />} />

    </Routes>
  </>
}

export default App;