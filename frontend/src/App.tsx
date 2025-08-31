import { Route, Routes } from "react-router-dom";
import AuthCallBackPage from "./pages/auth-callback/AuthCallBackPage";
import HomePage from "./pages/HomePage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

export default function App() {
  return (
    <Routes>
      <Route
        path="/sso-callback"
        element={
          <AuthenticateWithRedirectCallback
            signUpForceRedirectUrl={"/auth-callback"}
          />
        }
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/auth-callback" element={<AuthCallBackPage />} />
    </Routes>
  );
}
