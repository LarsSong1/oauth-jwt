import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Bienvenido a la Aplicación</h1>

        <SignedIn>
          <p className="text-gray-600 mb-6">Estás autenticado. Puedes acceder a tu perfil o cerrar sesión.</p>
          <div className="flex justify-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>

        <SignedOut>
          <p className="text-red-500">No has iniciado sesión. Por favor inicia sesión para continuar.</p>
        </SignedOut>
      </div>
    </section>
  )
}

export default Home
