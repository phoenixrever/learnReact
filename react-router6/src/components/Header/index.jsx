import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function back() {
    navigate(-1);
  }

  function forward() {
    navigate(1);
  }

  return (
    <div className="page-header">
      <h2>React Router Demo</h2>
      <button onClick={back} className="btn btn-sm btn-primary ">
        back
      </button>
      <button onClick={forward} className="btn btn-sm btn-success">
        go
      </button>
    </div>
  );
}
