import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "@/components/layout";

export default function Firstpost() {
  return (
    <>
      <Head>
        <title>First post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/profile.jpeg"
        alt="Atif"
        width={108}
        height={108}
        style={{ cursor: "pointer", objectFit: "cover" }}
      />
      <Layout/>
    </>
  );
}
