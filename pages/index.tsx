import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LoginScreen from "../components/layouts/login";

const Home: NextPage = () => {
  return (
    <div className="grid h-screen bg-background">
      <LoginScreen />
    </div>
  );
};

export default Home;
