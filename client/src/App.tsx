import { Route, Routes } from "react-router-dom";
import { Display } from "./components/Display";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";
import { Topbar } from "./components/Topbar";


function App() {
  return (
    <div className="app">

      <Topbar/>
      <Routes>
        <Route path="/" element={<Display/>}/>
        <Route path="/add-user" element={<CreateUser/>}/>
        <Route path="/edit-user/:id" element={<EditUser/>}/>
      </Routes>
    </div> 
  );
}

export default App;
