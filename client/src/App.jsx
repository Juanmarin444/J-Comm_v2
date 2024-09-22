import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="mx-auto max-w-[1900px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;