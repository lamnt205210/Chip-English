import React from "react";
import HeaderLandingPage from "../ui/HeaderLandingPage";
import SignUp from "./SignUp";
import Login from "./Login";
import ClassCard from "../ui/ClassCard";

const LandingPage = () => {
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  return (
    <div>
      <HeaderLandingPage
        openSignUp={openSignUp}
        setOpenSignUp={setOpenSignUp}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
      />
      <SignUp
        openSignUp={openSignUp}
        setOpenSignUp={setOpenSignUp}
        setOpenLogin={setOpenLogin}
      />
      <Login
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        setOpenSignUp={setOpenSignUp}
      />
      <ClassCard />
    </div>
  );
};

export default LandingPage;
