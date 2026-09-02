import { useState } from 'react';
import api from "../api/client.js";
import { useNavigate } from 'react-router-dom';
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [loading,setloading] = useState(false);
   const [error,setError] = useState('');
 
   const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');
    setloading(true);
    try {
        const response = await api.post('/auth/register', {
            name,
            email,
            password,
        });
        console.log(response.data);
     navigate('/login'); // Redirect to login page after successful registration
    }
    catch (error) {
        setError('Registration failed. Please try again.');
        console.log(error);
    }finally{
        setloading(false);
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <form className="mt-6 space-y-4" onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="name"
              className="block mb-1"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

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
              onChange={(event) => setEmail(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
       {error && (
  <p className="text-sm">
    {error}
  </p>
)}
          <button
            type="submit"
            className="w-full rounded-lg px-4 py-2 font-semibold"
            disabled={loading}
          >
           {loading ? 'Registering...' : 'Register'}
            
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;