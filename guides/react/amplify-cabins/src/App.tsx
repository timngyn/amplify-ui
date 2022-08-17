import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Properties from './routes/Properties';
import Login from './routes/Login';
import EditProperty from './routes/EditProperty';
import Theme from './routes/Theme';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<EditProperty />} />
        <Route path="/theme" element={<Theme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
