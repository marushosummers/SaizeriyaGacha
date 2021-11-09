import { useState } from 'react';
import { Items } from './items'
import { Summary } from './summary';
import { Twitter } from './twitter';
import { doGacha } from '../hooks/doGatya';

export const Main: React.FC = () => {
  const [result, useResult] = useState([])
  const input = 1000;

  const handleButton = () => {
    const newResult = doGacha(input)
    useResult(newResult)
  }

  return (
    <div className="page">
      <div className="heading">
        <h1>サイゼリヤ</h1>
        <h1>1000円ガチャ</h1>
      </div>
      <div className="buttonarea">
        <button onClick={() => { handleButton() }} className="btn">
          {"ガチャを回す"}
        </button>
      </div>
      <div className="result">
        <Items result={result} />
        <Summary result={result} />
        <Twitter result={result} />
      </div>
    </div>
  );
}
