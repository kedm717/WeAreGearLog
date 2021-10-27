import React, { useState } from 'react';

import './Brands.css';
import { Link } from 'react-router-dom';
import { Corsairs } from '../../DummyData';
const Csr = () => {
  const [csr, SetCser] = useState(Corsairs);

  const gear = csr.map((el) => {
    return (
      <div className="card">
        <img src={el.img} alt=""></img>

        <p className="card-1">
          {el.title}

          <br></br>
          {el.Review}
        </p>

        <Link to={el.path}>
          <span className="card-2">{el.click}</span>
        </Link>
      </div>
    );
  });

  return (
    <section className="Logitech-page">
      <div className="top-wrap">
        <div className="Roccat-top">
          <div className="Roccat-top1">CORSAIR</div>
        </div>
      </div>
      <div className="flex-warp">
        <div className="flexContainer">
          <div className="card-container">{gear}</div>
        </div>
      </div>
    </section>
  );
};

export default Csr;