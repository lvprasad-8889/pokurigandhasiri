import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import "./App.css";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Contact from "./components/contactus/contact";
import About from "./components/aboutus/about";
import Support from "./components/support/support";
import Members from "./components/members/members";
import AddBloodDonor from "./components/donors/blood/blood";
import BloodDonorsList from "./components/donors/list/blood-list";
import NotFound from "./components/not-found/not-found";
import Temples from "./components/temples/temples";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";
import Enquiries from "./components/enquiries/enquiries";
import ProtectedRoute from "./components/protected/protected";
import Family from "./components/family/add/family";
import FamilyMembers from "./components/family/members/members";

function App() {
  return (
    <div className="position-relative">
      <Toaster
        toastOptions={{
          className: "",
          style: {
            width: "100%",
          },
        }}
      />
      <div className="d-flex justify-content-between flex-column first-frame">
        <Navbar />
        <div className="container mb-5">
          <Routes>
            <Route path="" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="members" element={<Members />} />
            <Route path="support" element={<Support />} />
            <Route path="profile" element={<Profile />} />
            <Route path="admin" element={<ProtectedRoute />}>
              <Route path="enquiries" element={<Enquiries />} />
            </Route>
            <Route path="donors">
              <Route path="" element={<Navigate to="blood" />} />
              <Route path="add-donor" element={<AddBloodDonor />} />
              <Route path="list" element={<BloodDonorsList />} />
            </Route>
            <Route path="temples" element={<Temples />} />
            <Route path="contact" element={<Contact />} />
            <Route path="family">
            <Route path="" element={<Navigate to="members" />} />
              <Route path="members" element={<FamilyMembers />} />
              <Route path="add" element={<Family />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
