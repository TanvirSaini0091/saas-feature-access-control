import logo from './logo.svg';
import './App.css';
import TierSwitcher from './components/TierSwitcher';
import Dashboard from './features/dashboard/Dashboard';

function App() {
  return (
    <>
      <Dashboard/>
      <TierSwitcher/>
    </>
  );
}

export default App;
