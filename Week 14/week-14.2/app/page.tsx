import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [data, setData] = useState('')

  async function getUserDetails(){
    const response = await axios.get("");
    setData(response.data)
    return response.data;
  }

  return (
    <div>
      Name is {data}
    </div>
  );
}
