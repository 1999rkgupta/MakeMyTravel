import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Apis/AuthContextApi";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import Profile from "./components/profile/Profile";
import Spinner from "./pages/Spinner";
import UploadPhoto from "./components/profile/UploadPhoto";
import ProfileDefault from "./components/profile/ProfileDefault";
import UpdatePhone from "./components/profile/UpdatePhone";
import ResetPassword from "./components/auth/ResetPassword";
import PhoneAuth from "./components/auth/PhoneAuth";
import AddProfileData from "./components/profile/AddProfileData";
import Hotels from "./components/hotelsandcity/Hotels";
import AddHotel from "./components/hotelsandcity/AddHotel";
import Admin from "./components/admin/Admin";
import AdminRoute from "./routes/AdminRoute";
import ListOfUsers from "./components/admin/ListOfUsers";
import Users from "./components/admin/Users";
import AdminPanelContainer from "./components/admin/AdminPanelContainer";
import UserDetails from "./components/admin/UserDetails";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ToastContainer theme="dark" />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* hotel route */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          >
            <Route
              index
              element={
                <AdminRoute>
                  <AdminPanelContainer />
                </AdminRoute>
              }
            />
            <Route
              path="users"
              element={
                <AdminRoute>
                  <Users />
                </AdminRoute>
              }
            />
            <Route
              path=":id"
              element={
                <AdminRoute>
                  <UserDetails />
                </AdminRoute>
              }
            />
          </Route>
          <Route
            path="/add-hotel"
            element={
              <ProtectedRoute>
                <AddHotel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/phone-auth"
            element={
              <PublicRoute>
                <PhoneAuth />
              </PublicRoute>
            }
          />

          <Route
            path="/reset-password"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <ProfileDefault />
                </ProtectedRoute>
              }
            />
            <Route
              path="upload-profile-photo"
              element={
                <ProtectedRoute>
                  <UploadPhoto />
                </ProtectedRoute>
              }
            />
            <Route
              path="add-profile"
              element={
                <ProtectedRoute>
                  <AddProfileData />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
