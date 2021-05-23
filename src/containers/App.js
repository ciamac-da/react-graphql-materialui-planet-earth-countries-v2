import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from '../components/common/Footer/Footer';
import Translate from "../components/Translate/Translate";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
  })
  return (
    <>
    <ApolloProvider client={client}>
    <Navbar />
    <Translate />
    <Footer />
    </ApolloProvider>
    </>
  );
}

export default App;
