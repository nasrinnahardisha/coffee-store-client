import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-around p-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signUp">SignUp</NavLink>
            <NavLink to="/signIn">SignIn</NavLink>
            <NavLink to="/addCoffee">AddCoffee</NavLink>
        
        </div>
    );
};

export default Header;