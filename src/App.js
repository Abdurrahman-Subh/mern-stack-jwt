import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Unauthorized from "./components/Unauthorized/Unauthorized";
import LinkPage from "./components/LinkPage/LinkPage";
import Admin from "./components/Admin/Admin";
import Editor from "./components/Editor/Editor";
import User from "./components/User/User";
import AdminEditor from "./components/Admin-Editor/AdminEditor";
import Missing from "./components/Missing/Missing";
import RequireAuth from "./components/requireAuth/RequireAuth";
import PersistLogin from "./components/PersistLogin/PersistLogin";
function App() {
  const ROLES = {
    User: 2001,
    Editor: 1984,
    Admin: 5150,
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" index element={<LinkPage />}></Route>
        <Route path="/unauthorized" element={<Unauthorized />}></Route>

        {/* Private Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/admin" element={<Admin />}></Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="/editor" element={<Editor />}></Route>
          </Route>
          <Route
            element={
              <RequireAuth
                allowedRoles={[ROLES.Admin, ROLES.Editor, ROLES.User]}
              />
            }
          >
            <Route path="/user" element={<User />}></Route>
          </Route>
          <Route
            element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}
          >
            <Route path="/admin-editor" element={<AdminEditor />}></Route>
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<Missing />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
