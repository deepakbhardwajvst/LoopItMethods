"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Logout</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn("github")}>Github</button>
    <button onClick={() => signIn("google")}>Google</button> 
  </>
}