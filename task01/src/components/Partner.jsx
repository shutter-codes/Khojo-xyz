import React, { useEffect, useState } from "react";
import axios from "axios";

function Partner() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/partner")
      .then((response) => {
        console.log("printing response");
        console.log(response.data.partner.length);
        setPartners(response.data.partner);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {partners.map((partner) => (
        <div key={partner.id} className="card w-96 bg-base-100 shadow-xl mb-8 mx-4">
          <div className="card-body items-center text-center">
            {/* <h1>Partner Length: {partners.length}</h1> */}
            <h3>{partner.partnerName}</h3>
            <p>{partner.desc}</p>
            <p>{partner.experience}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Partner;
