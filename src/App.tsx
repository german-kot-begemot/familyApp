import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/router';
import { ThemeProvider } from './app/providers/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;

//todo: добавить QueryClientProvider для react-query, если будет использоваться
// <QueryClientProvider client={queryClient}>
//   <ThemeProvider>

//       <RouterProvider router={router} />

//   </ThemeProvider>
// </QueryClientProvider>
