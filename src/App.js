import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider/StateProvider";

function App() {

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app components loads...

    // loads when user logs in
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER is ", authUser);

      if(authUser){
        // user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  
  return (
    // BEM
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={[<Header />,<Home />, ]} />
          <Route path="/login" element={[<Login/>]}/>
          <Route path="/checkout" element={[<Header />,<Checkout />, ]} />
          <Route path="/payment" element={[<Header />, <h1>Hello</h1>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
