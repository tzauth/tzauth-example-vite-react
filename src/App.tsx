import { useState } from 'react'
import { OidcProvider, OidcSecure } from '@axa-fr/react-oidc';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './UserInfo';

const configuration = {
  client_id: 'test_client_frontend',
  redirect_uri: window.location.origin + '/authentication/callback',
  scope: 'openid profile balance tokens offline_access',
  authority: 'http://localhost:3000',
  // service_worker_relative_url:'/OidcServiceWorker.js',
  service_worker_only:false,
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <OidcProvider configuration={configuration}>
      <OidcSecure>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <UserInfo />
      </OidcSecure>
    </OidcProvider>
  )
}

export default App
