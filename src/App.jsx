import { useState } from 'react'
import { AuthProvider } from "./AuthContext.jsx";


export default function App() {
  return (
    <div className="bg-purple-800 text-white min-h-screen p-4 flex flex-col justify-center  items-center">
      <AuthProvider>
        <h1 className="text-3xl font-thin">
            Hello FARM stack!!!
        </h1>
      </AuthProvider>{" "}
    </div>
  )
}
