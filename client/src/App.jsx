
import React, { useState } from "react";
import About from "./components/about";
import Nav from "./components/nav";
import Signup from "./components/SignUp";
import ImageUpload from "./components/ImageUpload";
import Result from "./components/Result";
import Footer from "./components/footer";


const App = () => {
  const [user, setUser] = useState(null);
  const [result, setResult] = useState(null);

  const handleSignup = (username) => {
    setUser({ name: username });
  };

  const handleSignout = () => {
    setUser(null);
    setResult(null);
  };

  const handleAnalysis = (res) => {
    if (!user) {
      alert("Please sign up or sign in first.");
      return;
    }
    setResult(res);
  };

  return (
    <div className="min-h-screen flex flex-col transition-all ">
      <Nav
        isLoggedIn={!!user}
        handleLogin={() => {}}
        handleLogout={handleSignout}
       
      />
      <div className="flex">
        <div className="px-20 ">
          <About />
        </div>
        <div className="ml-20">
          <Signup onSignup={handleSignup} isLoggedIn={!!user} />
        </div>
      </div>
      <ImageUpload onAnalyze={handleAnalysis} />
      <Result result={result} />
      <Footer />
    </div>
  );
};

export default App;


