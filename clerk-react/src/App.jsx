import { useUser, useSession } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './components/Login';
import { useEffect } from 'react';
import axios from 'axios'
import Register from './pages/Register';

export default function App() {
  const { isLoaded, user } = useUser()
  const { session } = useSession()
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log("API en:", backendUrl);

  useEffect(() => {
    if (!isLoaded || !user) return;

    axios.post(
      `${backendUrl}/api/auth/clerk`,
      {
        clerkUserId: user.id,
        email:       user.primaryEmailAddress?.emailAddress,
        name:        user.fullName,
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(({ data }) => console.log("Sync OK:", data))
    .catch(err => console.error("Sync error:", err));
  }, [isLoaded, user, session, backendUrl]);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  );
}