
import React, { useState } from 'react';
import SuffixInput from './components/SuffixInput';

const App: React.FC = () => {
  const [username, setUsername] = useState('your-username');
  const [domain, setDomain] = useState('example');

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-md mx-auto p-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Suffix Input Component</h1>
          <p className="text-slate-500">A seamless way to add suffixes to your inputs.</p>
        </header>

        <main className="bg-white p-8 rounded-xl shadow-md space-y-8">
          {/* Example 1: Domain Name */}
          <div>
            <label htmlFor="domain-input" className="block text-sm font-medium text-slate-700 mb-2">
              Your Custom Domain
            </label>
            <SuffixInput
              id="domain-input"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              suffix=".myapp.com"
              placeholder="your-domain"
              className="w-full text-lg"
              autoComplete="off"
            />
            <p className="mt-2 text-xs text-slate-500">
              Full domain: <span className="font-medium text-slate-700">{domain || '(empty)'}.myapp.com</span>
            </p>
          </div>

          {/* Example 2: GitHub Username */}
          <div>
            <label htmlFor="username-input" className="block text-sm font-medium text-slate-700 mb-2">
              GitHub Profile URL
            </label>
            <div className="flex items-center gap-1 text-slate-500">
              <span>github.com/</span>
              <SuffixInput
                id="username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                suffix="" // Suffix can be empty
                placeholder="username"
                autoComplete="off"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Profile URL: <span className="font-medium text-slate-700">github.com/{username || '(empty)'}</span>
            </p>
          </div>
        </main>

        <footer className="text-center mt-10">
          <p className="text-sm text-slate-400">Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
