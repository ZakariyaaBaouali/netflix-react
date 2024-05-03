import { Register, SignUp } from "./components/Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signup/*" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
