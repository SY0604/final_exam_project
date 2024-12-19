import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PostDetails from './pages/PostDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchResults from './pages/SearchResults'; // Import SearchResults page
import './styles/layout.css'; // Import the CSS file

const App = () => (
    <Router>
        <MyNavbar />
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/post/:id" element={<PostDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<SearchResults />} /> {/* Add SearchResults route */}
            </Routes>
        </div>
        <Footer />
    </Router>
);

export default App;
