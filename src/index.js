import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiProvider from './contexts/ApiContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardSearchByName from './Pages/CardSearchByName.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>
      
      <BrowserRouter>
        <Routes>
          {/* Homepage route  */}
          <Route path="/" element={<App />}/>
          {/* API fetch route */}
          <Route path="/card/search/:pokemonName" element={<CardSearchByName />} />

          
        </Routes>
      
      </BrowserRouter>
      
    </ApiProvider>
  </React.StrictMode>,
);