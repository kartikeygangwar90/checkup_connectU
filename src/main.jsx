import React from "react";
import reactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { TeamProvider } from "./context/TeamContext";
import Access from "./access";
import ProfileSetup from "./profile"
import PrivateRoute from "./privateRoute";
import Policy from "./Terms&Conditions";
import Home from "./home";
import Mainpage from "./mainpage";

reactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TeamProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Access />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileSetup />
                </PrivateRoute>
              }
            />
            <Route path="/policy" element={<Policy />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/mainpage"
              element={
                <PrivateRoute>
                  <Mainpage />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </TeamProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
