import Link from "next/link"
import Image from "next/image"
export default function Firstpost() {
  return (
    <>
    <h1>firstpost</h1>
    <h2><Link href="/">Back to home</Link></h2>
    <Image src="/images/profile.jpeg" alt="Atif" width={144} height={200} style={{cursor:"pointer",objectFit:"cover"}}/>
    </>
  )
}
