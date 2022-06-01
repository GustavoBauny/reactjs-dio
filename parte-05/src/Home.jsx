import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <p>Selecione uma aula abaixo</p>
    <Link to="/aula-1">Aula 1</Link><br/>
    <Link to="/aula-2">Aula 2</Link><br/>
    <Link to="/aula-3">Aula 3</Link><br/>
    <Link to="/aula-4">Aula 4</Link>
  </div>
)

export default Home;
