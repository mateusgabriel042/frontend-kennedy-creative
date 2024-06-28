import React, { useState, useEffect, useContext } from "react";
import '@/styles/globals.css'
import '@/styles/colors.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Kennedy Creative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
