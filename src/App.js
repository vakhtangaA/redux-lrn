import React from "react";
import VisibilityFilter from "./components/VisibilityFilter";
import NewNote from "./NewNote";
import Notes from "./Notes";

const App = () => {
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
