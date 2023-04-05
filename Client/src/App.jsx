import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./Pages/addUser";
import UserTable from "./Pages/userTable";
import UpdateUser from "./Pages/updateUser";
import { Routes, Route  } from "react-router-dom";

function App() {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/table" element={<UserTable/>}/>
        {/* <Route path="/updateUser/${id}" element={<UpdateUser/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
