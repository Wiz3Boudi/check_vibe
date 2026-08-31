import "./App.css";
import { Route, Routes } from "react-router";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import MainLayout from "./pages/layouts/MainLayout";
import Feeds from "./pages/Feeds";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Notifactions from "./pages/Notifactions";
import SearchExplore from "./pages/Search-explore";
import Setting from "./pages/Setting";
import Reels from "./pages/Reels";

function App(style) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route element={<MainLayout />}>
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/search-explore" element={<SearchExplore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifactions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
