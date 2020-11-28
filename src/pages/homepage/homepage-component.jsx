import { render } from "@testing-library/react";
import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";
const HomePage = () => (
  <div className="homepage">
    <Directory></Directory>
  </div>
);

export default HomePage;
