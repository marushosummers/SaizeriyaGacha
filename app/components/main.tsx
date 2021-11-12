import { useState } from 'react';
import { NextPage } from 'next'
import { Items } from './items'
import { Summary } from './summary';
import { Twitter } from './twitter';
import { doGacha } from '../hooks/doGatya';
import { Menu } from '../domain/Menu';
import * as gtag from '../lib/gtag'
interface Props {
  menus: Menu[]
}

export const Main: NextPage<Props> = ({ menus }) => {
  const [result, useResult] = useState([])
  const input = 1000;

  const handleButton = () => {
    const newResult = doGacha(menus, input)
    useResult(newResult)
    gtag.event({
      action: 'click',
      category: 'gacha',
      label: '1000yen',
    })
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

export default Main;
