import "@/styles/globals.css";
import Context from "../utils/Context";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { SessionProvider } from "next-auth/react";
import Loading from "@/components/loading-page/Loading";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return <Loading />;
  }

  if (typeof window === "undefined") {
    return <><p>Something went wrong, try again later!</p></>;
  } else {
    return (
      <SessionProvider session={session}>
        <Navbar />
        <Context>
          <Component {...pageProps} />
        </Context>
        <Footer />
      </SessionProvider>
    );
  }
};
export default MyApp;
