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
import DisplayFee from "./Fee/DisplayF";
import AddFee from "./Fee/AddF";
import InvoiceCard from "./Fee/CArds";
import DisplayAttendance from "./Attendance/attendance";

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
      <Route path="/Update/:id" element={<Update/>} />

<Route path="/update/Teacher/:id" element={<UpdateTeacher />} />
<Route path="/Fees" element={<DisplayFee />} />
<Route path="/addfee" element={<AddFee />} />
<Route path="/Attendance" element={<DisplayAttendance />} />

    </Routes>
  </>
}

export default App;