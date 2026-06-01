import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/router';

const App: React.FC = () => {
  return (
    <div data-testid="app" className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
