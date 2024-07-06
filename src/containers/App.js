import React from "react";
import { Navbar } from "../components/common/Navbar/Navbar.jsx";
import Footer from "../components/common/Footer/Footer";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
