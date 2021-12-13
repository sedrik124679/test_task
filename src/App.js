import './App.scss';
import Users from "./components/users/Users";
import PageToggler from "./components/pageToggler/PageToggler";
import Navbar from "./components/Navbar/Navbar";
import {useState} from "react";

function App() {

    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="container">
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Users searchQuery={searchQuery} />
            <PageToggler/>
        </div>
    );
}

export default App;
