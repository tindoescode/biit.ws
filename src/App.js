/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import "./App.css";
import Button from "./components/Button.js";

function App() {
  return (
    <div className="App">
      <header>
        <div tw="flex flex-col items-center absolute left-3">
          <h1 tw="font-black text-3xl p-2 text-white">Biit.ws</h1>
          <p tw="font-light text-white -mt-2">
            Your decentralized blog platform
          </p>
        </div>
        <Button tw="fixed top-2 right-4 bg-purple-400 ">
          <img
            src="/assets/images/polygon-matic-logo.svg"
            alt="polygon logo"
            width="20rem"
          />
          Connect wallet
        </Button>
      </header>

      <div tw="flex flex-col gap-4 justify-center items-center h-screen">
        <textarea
          tw="rounded outline-none transition duration-500 ease-out focus:ring-2 ring-purple-400 p-3 bg-gray-300 bg-opacity-40 text-white font-mono text-2xl"
          css="width: 80%; min-height: 50%;"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <Button>Send</Button>
      </div>
    </div>
  );
}

export default App;
