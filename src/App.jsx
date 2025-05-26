import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import About from "./pages/About";
import { CreatePost } from "./pages/CreatePost";
import { PostDetails } from "./pages/PostDetails";
import { Contact } from "./pages/Contact";
// import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="flex flex-col lg:flex-row gap-8">
            <main className="pt-20 pb-8 flex-grow order-2 lg:order-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            {/* <aside className="w-full lg:w-1/4 order-1 lg:order-2">
              <Sidebar />
            </aside> */}
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;