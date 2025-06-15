import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import Login from '../components/Login'

const Home = () => {
  return (

    <div className="flex justify-center w-full h-screen items-center text-center">



      <SignedIn >
        <div>
          <p className="text-gray-600 mb-6">Estás autenticado. Puedes acceder a tu perfil o cerrar sesión.</p>
          <div className="flex justify-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </SignedIn>


      <SignedOut>
        <Login />
      </SignedOut>
    </div>

  )
}

export default Home
