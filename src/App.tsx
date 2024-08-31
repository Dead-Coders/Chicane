// Let's start by importing our router
import  Header  from "./components/Header";
import  Home  from "./Home";
import  NotFound  from "./NotFound";
import About from "./About";
import { Router } from "./router";
import { match} from 'ts-pattern';


export const App = () => {
  // Then pass the route subset this component should listen to (the order isn't important)
  const route = Router.useRoute(["Home", "About"]);

  // And then, simply make each route return its component
  return (
    <>

      { match(route)
        .with({ name: "Home" }, () => <Home />)
        .with({ name: "About" }, () =><About/>)
        .otherwise(() => (
          <NotFound />
        ))}
        <Header />
    </>
  );
};

export default App