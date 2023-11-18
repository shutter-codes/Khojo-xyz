import React, { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [aboutContents, setAboutContent] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/about")
      .then((response) => {
        console.log("printing about response");
        console.log(response.data.about);
        const lastItem = response.data.about[response.data.about.length - 1];
        setAboutContent([lastItem]); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-3xl text-white my-6 py-3 font-bold flex justify-center items-center">
        About US
      </h1>
      {aboutContents.map((aboutContent) => (
        <div key={aboutContent.id} className="card w-96 bg-base-100 shadow-xl mb-8 mx-4">
          <div className="card-body items-center text-center">
            <h3>{aboutContent.content}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
