import { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Result } from './result'
import { doGacha } from '../hooks/doGatya'
import { Menu } from '../domain/Menu'
import { Spinner } from './spinner'
import CloseBtn from './close.svg'
import * as gtag from '../lib/gtag'
import _sleep from '../hooks/sleep'
import { GoogleBoxAds, GoogleColumnAds, GoogleHeaderAds } from '../lib/gadsense'
import styled from "styled-components";

interface Props {
  menus: Menu[]
}

export const Main: NextPage<Props> = ({ menus }) => {
  const [result, useResult] = useState([])
  const [btnareaFloat, useBtnareaFloat] = useState(false)
  const [loading, useLoading] = useState(false)
  const input = 1000

  // TODO: refactor
  let pageClass = 'page'
  if (!result.length) {
    pageClass = 'page page-top'
  }
  let btnareaClass = 'buttonarea'
  if (result.length) {
    btnareaClass = 'buttonarea buttonarea-fixed'
  }
  let invisibleClass = ''
  if (!btnareaFloat) {
    btnareaClass = 'buttonarea'
    invisibleClass = 'invisible'
  }

  const returnTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  const handleButton = async () => {
    useLoading(true)
    const newResult = doGacha(menus, input)
    await _sleep(200)
    useResult(newResult)
    useBtnareaFloat(true)
    returnTop()
    useLoading(false)
    gtag.event({
      action: 'click',
      category: 'gacha',
      label: '1000yen',
    })
  }

  const handleCloseButton = () => {
    useBtnareaFloat(false)
  }

  return (
    <Container>
      <GoogleColumnAds />
      <Content>
        {Boolean(result.length) && <GoogleHeaderAds />}
        <div className="frame">
          <Spacer />
          <div className={pageClass}>
            <TitleComponent>
              <Title>サイゼリヤ</Title>
              <Title>1000円ガチャ</Title>
            </TitleComponent>
            <Result result={result} />
            <div className={btnareaClass}>
              <div className="buttonarea-container">
                <Button
                  onClick={() => {
                    handleButton()
                  }}
                  disabled={loading}
                >
                  {loading ? <Spinner /> : 'ガチャを回す'}
                </Button>
                <CloseBtn
                  onClick={() => {
                    handleCloseButton()
                  }}
                  className={`close-btn ${invisibleClass}`}
                />
                <FooterLink>
                  <a
                    href="https://shop.saizeriya.co.jp/sz_restaurant/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    店舗検索 (公式)
                  </a>
                  <br />
                  <Link href="/about">このサイトについて</Link>
                  {' / '}
                  <a
                    href="https://twitter.com/saizeriyagacha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </FooterLink>
              </div>
            </div>
            {Boolean(!result.length) && <GoogleBoxAds />}
            <div className={`spacer ${invisibleClass}`}></div>
          </div>
        </div>
      </Content>
      <GoogleColumnAds />
    </Container>
  )
}

export default Main


const Container = styled.div`
    display: flex;
    justify-content: center;
  `
const Content = styled.div`
    display: flex;
    flex-direction: column;
  `
const Spacer = styled.div`
    min-height: 97vh;
    width: 0;
  `
const TitleComponent = styled.div`
    border-bottom: 2px solid #007c00;
    text-align: center;
    margin-bottom: 0.2em;
    padding-bottom: 0.2em;
  `
const Title = styled.h1`
    font-size: 1.8em;
    color: #d70002;
  `
const Button = styled.button`
    width: 12em;
    height: 4em;
    margin: 0 auto;
    border-style: none;
    border-bottom: solid 4px #007c00;
    border-radius: 3px;
    background: rgba(0, 124, 0, 0.8);
    font-family: inherit;
    font-size: 100%;
    font-size: 1em;
    color: #ffffff;
    user-select: none;
  `
const FooterLink = styled.div`
    font-size: 0.8em;
    margin-top: 10px;
    text-align: center;
  `
