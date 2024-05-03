import { Register, SignUp } from "./components/Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="signup/*" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
