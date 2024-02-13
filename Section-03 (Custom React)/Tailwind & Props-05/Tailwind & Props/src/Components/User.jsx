import React from "react";
import image from "./image-03.jpg";

export default function User({ username }) {
  return (
    <>
      <div>
        <h1 className="text-xl bg-orange-600 m-1 rounded p-3 cursor-pointer">
          {username}
        </h1>
      </div>
    </>
  );
}
