import React, { useEffect, useState } from "react";
import { CallAPI } from "../../service/call_api/CallAPI";
import SimpsonAPI from "../../service/simpsonAPI";
import { Simpson } from "../../types/Simpson";

function Main() {
  const [data, setData] = useState<Simpson[]>([]);
  const serviceAPI = new CallAPI(new SimpsonAPI());

  useEffect(() => {
    serviceAPI
    .get()
    .then(data => {
      if (!data) return
      setData(data)
    })
    .catch(console.log)
  }, [serviceAPI])


  return (
      <main className="container d-flex">
        <div>Image</div>
        <div>Text</div>
      </main>
  );
}

export default Main;
