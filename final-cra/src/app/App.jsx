import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';
import {
  Home,
  LogIn,
  SignUp,
  About,
  Guam,
  Saipan,
  Notice,
  Community,
  Reservation,
  Reservation1,
  Reservation2,
  Reservation3,
  Reservation4,
} from 'pages';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/guam" element={<Guam />} />
        <Route path="/saipan" element={<Saipan />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/community" element={<Community />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation1" element={<Reservation1 />} />
        <Route path="/reservation2" element={<Reservation2 />} />
        <Route path="/reservation3" element={<Reservation3 />} />
        <Route path="/reservation4" element={<Reservation4 />} />
      </Routes>
    </Router>
  );
};

export default App;