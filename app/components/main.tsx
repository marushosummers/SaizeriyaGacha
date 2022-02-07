import { useEffect, useState } from 'react';
import { NextPage } from 'next'
import Link from 'next/link';
import { Result } from './result';
import { doGacha } from '../hooks/doGatya';
import { Menu } from '../domain/Menu';
import { Spinner } from './spinner';
import  CloseBtn from './close.svg';
import * as gtag from '../lib/gtag'
import _sleep from '../hooks/sleep';
import { GoogleBoxAds, GoogleColumnAds, GoogleHeaderAds } from '../lib/gadsense';
interface Props {
  menus: Menu[]
}

export const Main: NextPage<Props> = ({ menus }) => {
  const [result, useResult] = useState([])
  const [btnareaFloat, useBtnareaFloat] = useState(false)
  const [loading, useLoading] = useState(false)
  const input = 1000;

  // Unregister old service worker
  useEffect(() => {
    window.navigator.serviceWorker.getRegistrations()
      .then(registrations => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
  }, [])

  // TODO: refactor
  let pageClass = "page";
  if (!result.length) {
    pageClass = 'page page-top';
  }
  let btnareaClass = "buttonarea";
  if (result.length) {
    btnareaClass = 'buttonarea buttonarea-fixed';
  }
  let invisibleClass = "";
  if (!btnareaFloat) {
    btnareaClass = "buttonarea";
    invisibleClass = "invisible";
  }

  const returnTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleButton = async() => {
    useLoading(true);
    const newResult = doGacha(menus, input)
    await _sleep(200);
    useResult(newResult)
    useBtnareaFloat(true);
    returnTop();
    useLoading(false);
    gtag.event({
      action: 'click',
      category: 'gacha',
      label: '1000yen',
    })
  }

  const handleCloseButton = () => {
    useBtnareaFloat(false);
  }

  return (
    <div className="main">
      <GoogleColumnAds />
      <div className="main-content">
        {Boolean(result.length) && <GoogleHeaderAds />}
        <div className="frame">
          <div className="column-spacer"></div>
        <div className={pageClass}>
        <div className="heading">
          <h1>サイゼリヤ</h1>
          <h1>1000円ガチャ</h1>
        </div>
        <Result result={result} />
        <div className={ btnareaClass }>
          <div className="buttonarea-container">
            <button onClick={() => { handleButton() }} className="btn" disabled={loading}>
              {loading ? <Spinner /> : "ガチャを回す"}
            </button>
            <CloseBtn onClick={() => { handleCloseButton() }} className={`close-btn ${invisibleClass}`} />
            <div className="footerlink">
              <a href="https://shop.saizeriya.co.jp/sz_restaurant/" target="_blank" rel="noopener noreferrer">店舗検索 (公式)</a>
              <br />
              <Link href="/about">このサイトについて</Link>
            {" / "}
            <a href="https://twitter.com/saizeriyagacha" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
          {Boolean(!result.length) && <GoogleBoxAds />}
        <div className={`spacer ${invisibleClass}`}>
        </div>
          </div>
        </div>
      </div>
      <GoogleColumnAds />
    </div>
  );
}

export default Main;
