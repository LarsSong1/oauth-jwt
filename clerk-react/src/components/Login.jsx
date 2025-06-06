import { SignInButton } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Inicia Sesión</h2>
        <p className="text-gray-600 mb-6">
          Accede a tu cuenta para continuar usando la aplicación.
        </p>
        <SignInButton>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
            Iniciar sesión
          </button>
        </SignInButton>
      </div>
    </section>
  )
}

export default Login
