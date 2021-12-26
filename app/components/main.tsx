import { useState } from 'react';
import { NextPage } from 'next'
import Link from 'next/Link';
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

  const returnTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleButton = () => {
    const newResult = doGacha(menus, input)
    useResult(newResult)
    returnTop();
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
      <div className="result">
        <Items result={result} />
        <Summary result={result} />
        <Twitter result={result} />
      </div>
      <div className="buttonarea buttonarea-fixed">
        <div className="buttonarea-container">
          <button onClick={() => { handleButton() }} className="btn">
            {"ガチャを回す"}
          </button>
          <div className="footerlink">
            <a href="https://shop.saizeriya.co.jp/sz_restaurant/" target="_blank" rel="noopener noreferrer">店舗検索 (公式)</a>
            <br />
            <Link href="/about">このサイトについて</Link>
          {" / "}
          <a href="https://twitter.com/saizeriyagacha" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
