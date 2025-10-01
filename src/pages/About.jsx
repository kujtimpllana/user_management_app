import React from "react";
import linkpluslogo from "../assets/linkplus_full_logo.png";

const About = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-center">
      <img src={linkpluslogo} alt="LINKPLUS Logo" className="w-[600px]" />
      <h2 className="text-lg w-[900px]">
        LinkPlus IT was founded in November of 2013. In it’s beginning LinkPlus
        started developing highly customized business applications for different
        companies and providing services to a new and rising technology industry
        with a special focus on enterprise software development. In the same
        year, LinkPlus proved themselves and it became a reliable partner for a
        premier AI and Data company in Canada that helps clients discover how AI
        and Data can be leveraged to provide actionable, data-driven outcomes.
      </h2>
    </div>
  );
};

export default About;
