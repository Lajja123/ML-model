import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "@rainbow-me/rainbowkit/styles.css";
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
//   darkTheme,
// } from "@rainbow-me/rainbowkit";
// import { configureChains, createClient, WagmiConfig } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
import Dashboard from "./pages/Dashboard";
import Registrationpage from "./components/Registrationpage";
import Dataset from "./components/Dataset";
import Code from "./components/Code.js";
import Model from "./components/Model.js";
import "./App.css";
import Home from "./pages/Home";
import DashboardNavbar from "./components/DashboardNavbar";
import CreateDataset from "./components/CreateDataset";
import SingleDataset from "./components/SingleDataset";
import Profile from "./components/Profile";

function App() {
  // const { chains, provider } = configureChains(
  //   // [BTTChain],
  //   [mainnet, polygon, optimism, arbitrum],
  //   [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
  // );

  // const { connectors } = getDefaultWallets({
  //   appName: "My RainbowKit App",
  //   chains,
  // });

  // const wagmiClient = createClient({
  //   autoConnect: false,
  //   connectors,
  //   provider,
  // });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Registrationpage />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/code" element={<Code />} />
          <Route path="/model" element={<Model />} />
          <Route path="/dash-navbar" element={<DashboardNavbar />} />
          <Route path="/createdataset" element={<CreateDataset />} />
          <Route path="/singledataset" element={<SingleDataset />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
