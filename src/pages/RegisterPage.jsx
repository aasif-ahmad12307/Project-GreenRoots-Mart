  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom'; // Import the hook
  
  const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const navigate = useNavigate(); // Initialize the navigate function
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
  
      try {
        const response = await fetch('http://localhost:8080/Home/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password, role, address }),
        });
  
        if (response.ok) {
          setSuccess("Registration successful! Redirecting to login...");
          setError('');
          
          // Clear form fields
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setRole('');
          setAddress('');
  
          // Redirect to login page after a short delay
          setTimeout(() => {
            navigate('/login'); // Redirect to the login page
          }, 2000);
        } else {
          const data = await response.json();
          setError(data.message || 'Registration failed');
        }
      } catch (error) {
        setError('An error occurred. Please try again later.');
      }
    };

  return (
    <div
  className="min-h-screen bg-cover bg-center relative"
  style={{
    backgroundImage: "url('src/assets/login_bg_1.jpg')",
  }}>

  {/* Overlay for Contrast */}
  <div className="absolute inset-0 bg-green-900 min-h-full bg-opacity-40"></div>

  {/* Form Container */}
  <div className="min-h-screen  flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-lg transform transition hover:scale-105 w-full max-w-md">
    <h2 className="text-3xl font-extrabold text-green-700 text-center mb-8">
      Create Your Account
    </h2>

    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
    {success && <p className="text-green-500 text-center mb-4">{success}</p>}

    <form onSubmit={handleRegister} className="space-y-6">
      
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
    
      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-gray-700">
          Select Role
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="" disabled>
            Choose a role
          </option>
          <option value="BUYER">Buyer</option>
          <option value="SELLER">Seller</option>
        </select>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>


      <div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-md font-semibold hover:shadow-lg hover:from-green-500 hover:to-green-700 transition duration-300"
        >
          Register
        </button>
      </div>
    </form>

    <p className="text-center text-sm text-gray-500 mt-6">
      Already have an account?{" "}
      <a href="/login" className="text-green-600 font-medium hover:underline">
        Login
      </a>
    </p>
  </div>
</div>
</div>

  );
};

export default RegisterPage;
