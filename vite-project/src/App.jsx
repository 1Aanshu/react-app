import { Routes, Route, Link } from "react-router-dom";
import CheckboxSelectAll, { Checkbox } from "./practice/Checkbox";
import { AppNavbar } from "./layouts/Navbar";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Blogs } from "./components/Blogs";
import { Blog } from "./components/Blog";
import { AdminNavbar } from "./layouts/AdminNavbar";

const App = () => {
  return (
    <>
      <CheckboxSelectAll />
      <Checkbox />
      <Routes>
        <Route path="/" element={<AppNavbar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="blogs">
            <Route index element={<Blogs />} />
            <Route path=":id" element={<Blog />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminNavbar />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="users" element={<Blogs />} />
          <Route path="blogs/:id" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
