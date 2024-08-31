import { Link } from "@swan-io/chicane";
import { Router } from "../router";

const Header = () => (
  <div>
    <h1>My super app</h1>
    <Link to={Router.Home()}>Home</Link>
    <Link to={Router.About()}>About</Link>
  </div>
);

export default Header