import { Routes, Route } from "react-router-dom";
import Onboarding from "./layouts/Onboarding";
import Login from "./layouts/Login";
import CreateAccount from "./layouts/CreateAccount";
import Feeds from "./pages/Feeds";
import MainLayout from "./layouts/MainLayout";
import Messages from "./pages/Messages";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sing-up" element={<CreateAccount />} />
      <Route element={<MainLayout />}>
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/messages" element={<Messages />} />
      </Route>
    </Routes>
  );
}
