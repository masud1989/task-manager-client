import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import NewPage from "./pages/NewPage";
import ProgressPage from "./pages/ProgressPage";
import CompletedPage from "./pages/CompletedPage";
import CanceledPage from "./pages/CanceledPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import FullScreenLoader from "./components/MasterLayout/FullScreenLoader";
import { getToken } from "./helpers/SessionHelper";
import { Fragment } from "react";

function App() {
  if(getToken () ){
    return (
      <Fragment> 
          <Routes>
            <Route path="/" element={< DashboardPage/>} />
            <Route path="/Create" element={<CreatePage />} />
            <Route path="/All" element={<NewPage/>} />
            <Route path="/Progress" element={<ProgressPage/>} />
            <Route path="/Completed" element={<CompletedPage />} />
            <Route path="/Canceled" element={<CanceledPage />} />
            <Route path="/profileDetails" element={<ProfilePage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Registration" element={<RegistrationPage />} />
            <Route path="/ForgetPass" element={<ForgetPasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <FullScreenLoader />
      </Fragment>
    );
  }

  else{
    return (
      <Fragment>
            <Routes>
              <Route path="/" element={<Navigate to="/Login" replace />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Registration" element={<RegistrationPage />} />
              <Route path="/ForgetPass" element={<ForgetPasswordPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          <FullScreenLoader />
      </Fragment>
    );
  }


  
}

export default App;
