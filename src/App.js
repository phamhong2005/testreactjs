import Home from "./pages/Home";
import {Route, Routes, Navigate} from "react-router-dom";
import Admin from "./pages/Admin";
import {ListStudent} from "./pages/students/ListStudent";
import CreateStudent from "./pages/students/CreateStudent";
import {EditStudent} from "./pages/students/EditStudent";

function App() {
    return (
        <>
            <Routes>
                <Route path={'students'} element={<Home/>}>
                    <Route path={'home'} element={<ListStudent/>}/>
                    <Route path={'add'} element={<CreateStudent/>}/>
                    <Route path={'edit/:id'} element={<EditStudent/>}/>
                </Route>
                <Route path={'admin'} element={<Admin/>}/>
                <Route path="*" element={<Navigate to="students/home"/>}/>
            </Routes>
        </>
    );
}

export default App;
