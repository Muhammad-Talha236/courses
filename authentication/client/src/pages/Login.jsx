import {useState} from 'react'
import api from '../api/client.js'
function Login() {

  const [email,  setEmail] = useState('');
  const [password, setPassword] = useState('');
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   } 

const handleLogin = async (event) => {
  event.preventDefault();

  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <form className="mt-6 space-y-4" 
        onSubmit={handleLogin}
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-1"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg px-4 py-2 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;