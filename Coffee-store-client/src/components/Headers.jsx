import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/addCoffee"}>Addcoffee</NavLink>
      <NavLink to={"/signup"}>SignUp</NavLink>
      <NavLink to={"/signin"}>SignIn</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
    </div>
  );
};

export default Headers;
