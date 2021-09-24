/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";

function Button(props) {
  return (
    <button
      {...props}
      tw="rounded-md bg-gray-400 text-white text-xl px-4 py-2 transition ease-in hover:opacity-80 hover:translate-y-0.5 flex items-center gap-2"
    >
      {props.children}
    </button>
  );
}

export default Button;
