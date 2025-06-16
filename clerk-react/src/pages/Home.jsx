import React, { useEffect, useState } from 'react'
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/clerk-react'
import Login from '../components/Login'

const Home = () => {
  const { getToken } = useAuth(); // Hook to manually get the token if needed
  const [protectedData, setProtectedData] = useState(null);
  const [error, setError] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;



  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/auth/clerck_jwt`);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch protected data');
        }

        const data = await response.json();
        setProtectedData(data);
      } catch (err) {
        console.error("Error fetching protected data:", err);
        setError(err.message);
      }
    };

   
    if (getToken) { 
        fetchProtectedData();
    }
  }, [backendUrl, getToken]);

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
