import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Home from './components/Home';
import Login from './components/Login';

export default function App() {
  return (
    <header>
      <SignedOut>
        <Login/>
      </SignedOut>



      <SignedIn>
        <Home />
      </SignedIn>
    </header>
  );
}