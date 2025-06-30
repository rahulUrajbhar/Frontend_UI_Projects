"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "../components/progress/progressBar";
import Table from "@/components/table/table";
import "./globals.css"
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
        <h1>Progress Bar</h1>
        <ProgressBar progress={3} />
      </div>
      <div>
        <h1>Table Component</h1>
        <Table users={userData} />
      </div>
    </>
  );
}
