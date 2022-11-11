import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/Routers';

function App() {
  return (
    <div className='max max-w-screen-lg mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
