import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import { useAuthState } from '@/store/auth-store';

const Login = () => {
    const { setAuth } = useAuthState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gradient-to-br  ">
      <div className="bg-white shadow-xl rounded-xl p-8 w-[90%] max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8">
          🍏 Oziq-Ovqat   <span
          className="text-blue-500 text-xl cursor-pointer hover:underline "
          onClick={() => setAuth("register")}
        >
          Sign Up
        </span>
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="flex items-center border rounded px-3 py-2 ">
            <Mail className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="email"
              placeholder="admin@gmail.com"
              className="flex-1 outline-none text-black bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Parol</label>
          <div className="flex items-center border rounded px-3 py-2 ">
            <Lock className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="password"
              placeholder="Parolni kiriting"
              className="flex-1 outline-none text-black bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Login;
