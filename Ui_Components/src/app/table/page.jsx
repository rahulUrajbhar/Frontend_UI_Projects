"use client";
import React, { useEffect, useState } from "react";
import Table from "@/components/table/table";

let api = "https://jsonplaceholder.typicode.com/users";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const fetchCall = async (api) => {
    try {
      let data = await fetch(api);
      let Users = await data.json();
      setUserData(Users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCall(api);
  }, []);

  return (
    <>
      <div>
        <h1 style={{textAlign:"center", margin:"20px"}}>Table Component</h1>
        <Table users={userData} />
      </div>
    </>
  );
}
