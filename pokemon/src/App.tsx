/**
 *
 * @param {NodeList} Home - App of the pokemon
 * statemanagement of Context 
 * statemanagemnt of Redux toolkit
 *
 */

import { Fragment } from "react";
import "./App.css";
import { DataContext } from "./components/management/user";
import Home from "./components/views/home";


function App() {
  return (
    <Fragment>
      <DataContext>
        <Home />
      </DataContext>
    </Fragment>
  );
}

export default App;
