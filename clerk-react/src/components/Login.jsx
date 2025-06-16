import { SignIn } from '@clerk/clerk-react'


const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className=" rounded-lg p-8 max-w-md w-full text-center">
        <div className='flex justify-center'>
            <SignIn signUpUrl="/register"/>
        </div>
      </div>

    </section>
  )
}

export default Login
