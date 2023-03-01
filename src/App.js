import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import DashboardScreen from "./screens/dashboard";


function App() {
  return (
    <>
     <Provider store={store}>
     <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/signup" exact element={<SignUpPage />} />
          <Route path="/dashboard" exact element={<DashboardScreen/>}/>
        </Routes>
      </Router>
     </Provider>
     
    </>
  );
}

export default App;
