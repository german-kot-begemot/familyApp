import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/router';
import { ThemeProvider } from './app/providers/ThemeProvider';

// const App: React.FC = () => {
//   return (
//     <ThemeProvider>
//       <AuthProvider>
//         <RouterProvider router={router} />
//       </AuthProvider>
//     </ThemeProvider>
//   );
// };

// export default App;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
