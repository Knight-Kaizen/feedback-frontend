import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getAllFilters, getAllProducts } from "./actions/api";

  const UserContext = createContext();
function App() {

  const [userLoggedIn, setUserLoggedIn] = useState();
  const [modalToShow, setModalToShow] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [filterSelected, setFilterSelected] = useState();
  const [sortBy, setSortBy] = useState();

  useEffect(()=>{

    const isUserLoggedIn = ()=>{
      //check if user is logged in
      const currUser = JSON.parse(localStorage.getItem('feedbackUser'));
      if(currUser){
        setUserLoggedIn(true);
      }
      else{
        setUserLoggedIn(false);
      }
    }
    
    isUserLoggedIn();
    setFilterSelected('All');
    setSortBy('Select');
    
  }, [])
 
  // useEffect(()=>{
    
    

  // }, [products])


  return (
    <UserContext.Provider
      value={{
        userLoggedIn, setUserLoggedIn,
        modalToShow, setModalToShow,
        showModal, setShowModal,
        filterSelected, setFilterSelected,
        sortBy, setSortBy
      }}
    >

    
    <div>
      <BrowserRouter>
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/signUp" element={<SignUpPage/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-center" autoClose={false} closeOnClick />
    </div>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };