import React from "react";
import "./globals.css";
import Link from "next/link";
export default function Home() {
  return (
    <ul className="parent">
      <li>
        <Link href={"/otpinput"}>OTP Input</Link>
      </li>
      <li>
        <Link href={"/todo"}>Todo App</Link>
      </li>
      <li>
        <Link href={"/cardlist"}>Card List</Link>
      </li>
      <li>
        <Link href={"/chipsinput"}>Chip Input</Link>
      </li>
      <li>
        <Link href={"/table"}>Table</Link>
      </li>
      <li>
        <Link href={"/accordion"}>Accordion</Link>
      </li>
      <li>
        <Link href={"/progressbar"}>Progress Bar</Link>
      </li>
      <li>
        <Link href={"/useState"}>Use State</Link>
      </li>
      <li>
        <Link href={"/calculater"}>Calculater</Link>
      </li>
    </ul>
  );
}
