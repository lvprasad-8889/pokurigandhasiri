import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Contact from "./components/contactus/contact";
import About from "./components/aboutus/about";
import Support from "./components/support/support";
import Members from "./components/members/members";
import AddBloodDonor from "./components/donors/blood/blood";
import BloodDonorsList from "./components/donors/list/blood-list";
import NotFound from './components/not-found/not-found'
import Temples from './components/temples/temples'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mb-5">
        <Routes>
          <Route path="" element={<Navigate to="donors/list" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="members" element={<Members />} />
          <Route path="support" element={<Support />} />
          <Route path="donors">
            <Route path="" element={<Navigate to="blood" />} />
            <Route path="add-donor" element={<AddBloodDonor />} />
            <Route path="list" element={<BloodDonorsList />} />
          </Route>
          <Route path="temples" element={<Temples />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*"element ={ <NotFound />} />
        </Routes>
        <Outlet></Outlet>
      </div>
    </React.Fragment>
  );
}

export default App;
