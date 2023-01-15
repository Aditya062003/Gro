import React, { useState } from "react";
import Axios from "axios";

const InputCompanyData = () => {
  const [data, setData] = useState({ name: "", nametwo: "" });
  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      Axios.post(
        "https://webhook.site/8f013451-e408-4196-9546-f858586da447",
        {
          name: data.name,
          date: data.nametwo,
        }
      ).then((res) => {
        console.log(res);
      });
      // let result = await fetch(
      //   "https://webhook.site/8f013451-e408-4196-9546-f858586da447",
      //   {
      //     method: "post",
      //     mode: "no-cors",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name: data.name,
      //       nametwo: data.nametwo,
      //     }),
      //   }
      // );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="name"
          placeholder="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          id="nametwo"
          placeholder="nametwo"
          value={data.nametwo}
          onChange={(e) => handleChange(e)}
        />
        <button style={{ backgroundColor: "white" }}>Submit</button>
      </form>
    </div>
  );
};

export default InputCompanyData;
