// import React from "react";
import { createRoot } from "react-dom/client";
import Pet from './Pet';

const App = () => {
  <div>
    <h1>Pet Adoption Application!</h1>
    <Pet name='Panda' animal='Dog' breed='Husky' />
    <Pet name='Pike' animal='Turtle' breed='Spotted Turtle' />
    <Pet name='Fluffy' animal='Cat' breed='Persian' />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);