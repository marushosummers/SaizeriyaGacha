import { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Result } from './result'
import { doGacha } from '../hooks/doGatya'
import { Menu } from '../domain/Menu'
import { Spinner } from './spinner'
import CloseIcon from './close.svg'
import * as gtag from '../lib/gtag'
import _sleep from '../hooks/sleep'
import { GoogleBoxAds, GoogleColumnAds, GoogleHeaderAds } from '../lib/gadsense'
import { Frame } from './styled/frame'
import styled, { css } from 'styled-components'
import { Checkbox } from './checkbox'

interface Props {
  menus: Menu[]
}

export const Main: NextPage<Props> = ({ menus }) => {
  const [result, useResult] = useState([])
  const [isExtractAlcohol, setExtractAlcohol] = useState(false)
  const [isButtonAreaFloat, useButtonAreaFloat] = useState(false)
  const [loading, useLoading] = useState(false)
  const input = 1000
  const isResult = Boolean(result.length)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  const handleButton = async () => {
    useLoading(true)
    const filteredMenus = isExtractAlcohol
      ? menus.filter((menu) => menu.name_en !== 'Alcohol')
      : menus
    const newResult = doGacha(filteredMenus, input)
    await _sleep(200)
    useResult(newResult)
    useButtonAreaFloat(true)
    returnTop()
    useLoading(false)
    gtag.event({
      action: 'click',
      category: 'gacha',
      label: '1000yen',
    })
  }

  const handleCloseButton = () => {
    useButtonAreaFloat(false)
  }

  const handleChangeExceptAlcohol = () => {
    setExtractAlcohol(!isExtractAlcohol)
  }

  return (
    <Container>
      <GoogleColumnAds />
      <Content>
        <GoogleHeaderAds />
        <Frame>
          <MainContent isResult={isResult}>
            <TitleComponent>
              <Title>サイゼリヤ</Title>
              <Title>1000円ガチャ</Title>
            </TitleComponent>
            {Boolean(result.length) && (
              <ResultContent>
                <Result result={result} />
              </ResultContent>
            )}
            <ButtonArea
              isResult={isResult}
              isButtonAreaFloat={isButtonAreaFloat}
            >
              <ButtonAreaContainer>
                <Button
                  onClick={() => {
                    handleButton()
                  }}
                  disabled={loading}
                >
                  {loading ? <Spinner /> : 'ガチャを回す'}
                </Button>
                <Checkbox
                  checked={isExtractAlcohol}
                  onChange={handleChangeExceptAlcohol}
                  labelText={'アルコール類を除く'}
                />
                <CloseButton
                  onClick={() => {
                    handleCloseButton()
                  }}
                  isInvisible={!isButtonAreaFloat}
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
              </ButtonAreaContainer>
            </ButtonArea>
          </MainContent>
          <GoogleBoxAds />
        </Frame>
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
const ResultContent = styled.div`
  min-height: 80vh;
`
const MainContent = styled.div<{ isResult: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;

  // ガチャをしてない状態はタイトルを中央に配置
  ${(props) =>
    !props.isResult &&
    css`
      flex-flow: column;
      justify-content: center;
      margin: 2px 5px;
      width: 100%;
    `}
`
const ButtonArea = styled.div<{
  isResult: boolean
  isButtonAreaFloat: boolean
}>`
  text-align: center;

  // ガチャ結果があるときはボタンを下に固定
  ${(props) =>
    props.isResult &&
    props.isButtonAreaFloat &&
    css`
      position: sticky;
      bottom: 0px;
      left: 0px;
      width: 100%;
    `}
`
const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  border-style: none;
  font-size: 1em;
  width: 1.5em;
  border-radius: 90px;
  color: rgba(0, 124, 0, 0.8);
  display: ${({ isInvisible }) => (isInvisible ? 'none' : 'block')};
`
const ButtonAreaContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  background: rgb(185, 226, 185);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.33);
  height: 120px;
  margin: 20px auto;
  padding: 10px;
  max-width: 300px;
  border-radius: 10px;
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
  text-align: center;
`
