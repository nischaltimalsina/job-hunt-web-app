import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Main/>}/>
      <Route>

      </Route>
     </Routes>
    </div>
  );
}

export default App;
