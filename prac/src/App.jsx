import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin_login from "./pages/Admin_login";
import { Landing } from "./pages/Landing";
import { Loginback } from "./pages/Loginback";
import { Registerback } from "./pages/Registerback";
import Admin from "./pages/Admin";
import Admin_Uni_create from "./pages/Admin_Uni_create";
import Student_pf from "./pages/Student_pf";
import Upload_profile from "./pages/Upload_profile";
import AdminProfCreate from "./pages/AdminProfCreate";
import UniUpdate from "./pages/UniUpdate";
import ProfUpdate from "./pages/ProfUpdate";
import StudentUpdate from "./pages/StudentUpdate";
import Ai from "./components/Ai";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Loginback />} />
        <Route path="/Register" element={<Registerback />} />
        <Route path="/AdminLogin" element={<Admin_login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/StudentUpdate/:email" element={<StudentUpdate />} />
        <Route path="/Admin_Uni_create" element={<Admin_Uni_create />} />
        <Route path="/Student_pf/:email" element={<Student_pf />} />
        <Route path="/Update/:email" element={<Upload_profile />} />
        <Route path="/AdminProfCreate" element={<AdminProfCreate />} />
        <Route path="/UniUpdate/:universityId" element={<UniUpdate/>}/>
        <Route path="/ProfUpdate/:ProfId" element={<ProfUpdate/>}/>
        <Route path="/Ai/:email" element={<Ai />} />
      </Routes>
    </Router>
  );
}

export default App;
