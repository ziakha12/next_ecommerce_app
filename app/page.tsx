"use client"

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Footer from "./components/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import client from './utils/apolloClients';

export default function Home() {

  return (
    <>
      <ApolloProvider client={client}>
        <Hero />
        <Products />
        <Footer />
      </ApolloProvider>
    </>
  );
}
