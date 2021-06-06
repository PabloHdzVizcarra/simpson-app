import React, { useState } from "react";
import { CallAPI } from "../../service/call_api/CallAPI";
import SimpsonAPI from "../../service/simpsonAPI";

function Main() {
  const [data, setData] = useState();
  const serviceAPI = new CallAPI(new SimpsonAPI());
  serviceAPI
      .get()
      .then(data => {
    console.log(data);
  })
      .catch(console.log)

  return (
      <main className="container d-flex">
        <div>Image</div>
        <div>Text</div>
      </main>
  );
}

export default Main;
