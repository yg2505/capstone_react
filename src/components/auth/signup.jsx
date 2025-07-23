import { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, database } from './firebaseConfig';
import { ref, set } from 'firebase/database';
import './signup.css';

export default function SignUp({ onNavigate }) {
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Field validation
    if (!form.email || !form.password) {
      setError('All fields are required');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      // Store in Realtime Database
      await set(ref(database, 'users/' + user.uid), {
        uid: user.uid,
        name: form.name,
        email: form.email,
        createdAt: new Date().toISOString(),
      });

      
      onNavigate('login');
      signOut(auth).catch(console.error);
      
    } catch (err) {
      setIsSubmitting(false);
      if (err.code === 'auth/email-already-in-use') {
        setError('User already exists. Redirecting to login...');
        onNavigate('login');
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="signup-input"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="signup-input"
          />

          {error && <p className="signup-error">{error}</p>}

          <button type="submit" className="signup-button" disabled={isSubmitting}>{isSubmitting ? 'Creating Account...' : 'Create Account'}</button>
        </form>

        <p className="signup-footer">
          Already have an account?{' '}
          <span className="signup-login-link" onClick={() => onNavigate('login')}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}
