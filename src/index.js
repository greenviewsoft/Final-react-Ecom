import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/custom.css';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/placeholder-loading.min.css';
import { render } from "react-dom";
import axios from 'axios' 

axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token')


const root = document.getElementById("root");
render(<App />, root);

reportWebVitals();
