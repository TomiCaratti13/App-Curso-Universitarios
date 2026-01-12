import { Outlet } from 'react-router-dom';
import { YearSelector } from './components/YearSelector';

function App() {
  return (
    <div className="app min-h-screen bg-gray-50">
      <main className="pt-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
