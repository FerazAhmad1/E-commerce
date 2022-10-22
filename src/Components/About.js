import React from "react";
import { Link } from "react-router-dom";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <img src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"></img>
      <p>
        ggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
        gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
        gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
        gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
        ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
        gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
      </p>
      <Link to="/contactus">Contactus</Link>
    </div>
  );
};

export default About;
