import { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Result } from './result'
import { doGacha, GachaUnit } from '../hooks/doGatya'
import { Menu } from '../domain/Menu'
import { Spinner } from './spinner'
import * as gtag from '../lib/gtag'
import _sleep from '../hooks/sleep'
import { GoogleBoxAds, GoogleColumnAds, GoogleHeaderAds } from '../lib/gadsense'
import { Frame } from './styled/frame'
import styled, { css } from 'styled-components'
import { Checkbox } from './checkbox'
import { filterMenus } from '../hooks/filterMenus'
import {
  MAX_GACHA_LIMIT,
  MIN_GACHA_LIMIT,
  normalizeGachaLimit,
} from '../hooks/normalizeGachaLimit'

interface Props {
  menus: Menu[]
}

export const Main: NextPage<Props> = ({ menus }) => {
  const [result, useResult] = useState<Menu[]>([])
  const [isExtractAlcohol, setExtractAlcohol] = useState(false)
  const [isExtractTakeout, setExtractTakeout] = useState(false)
  const [isButtonAreaFloat, useButtonAreaFloat] = useState(false)
  const [loading, useLoading] = useState(false)
  const [limitInput, setLimitInput] = useState('1000')
  const [unit, setUnit] = useState<GachaUnit>('price')
  const [resultCondition, setResultCondition] = useState<{
    limit: number
    unit: GachaUnit
  }>({ limit: 1000, unit: 'price' })
  const isResult = Boolean(result.length)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  const handleButton = async () => {
    useLoading(true)
    const limit = normalizeGachaLimit(limitInput)
    setLimitInput(String(limit))
    const filteredMenus = filterMenus(menus, {
      excludeAlcohol: isExtractAlcohol,
      excludeTakeout: isExtractTakeout,
    })
    const newResult = doGacha(filteredMenus, limit, unit)
    await _sleep(200)
    useResult(newResult)
    setResultCondition({ limit, unit })
    useButtonAreaFloat(true)
    returnTop()
    useLoading(false)
    gtag.event({
      action: 'click',
      category: 'gacha',
      label: `${limit}${unit === 'price' ? 'yen' : 'kcal'}`,
    })
  }

  const handleCloseButton = () => {
    useButtonAreaFloat(false)
  }

  const handleChangeExceptAlcohol = () => {
    setExtractAlcohol(!isExtractAlcohol)
  }

  const handleChangeExceptTakeout = () => {
    setExtractTakeout(!isExtractTakeout)
  }

  return (
    <Container>
      <GoogleColumnAds />
      <Content>
        <GoogleHeaderAds />
        <Frame>
          <MainContent $isResult={isResult}>
            <TitleComponent>
              <Title>サイゼリヤ</Title>
              <Title>
                <LimitInput
                  type="number"
                  min={MIN_GACHA_LIMIT}
                  max={MAX_GACHA_LIMIT}
                  step="1"
                  inputMode="numeric"
                  aria-label="ガチャの上限"
                  value={limitInput}
                  style={{ width: `${Math.max(limitInput.length, 1)}ch` }}
                  onChange={(event) => {
                    const value = event.target.value
                    if (value === '' || /^\d{1,5}$/.test(value)) {
                      setLimitInput(
                        value === ''
                          ? value
                          : String(Math.min(MAX_GACHA_LIMIT, Number(value))),
                      )
                    }
                  }}
                  onBlur={() =>
                    setLimitInput(String(normalizeGachaLimit(limitInput)))
                  }
                />
                <UnitButton
                  type="button"
                  aria-label={`単位を${unit === 'price' ? 'kcal' : '円'}に切り替える`}
                  onClick={() =>
                    setUnit((currentUnit) =>
                      currentUnit === 'price' ? 'calorie' : 'price',
                    )
                  }
                >
                  {unit === 'price' ? '円' : 'kcal'}
                </UnitButton>
                ガチャ
              </Title>
            </TitleComponent>
            {Boolean(result.length) && (
              <ResultContent>
                <Result
                  result={result}
                  limit={resultCondition.limit}
                  unit={resultCondition.unit}
                />
              </ResultContent>
            )}
            <ButtonArea
              $isResult={isResult}
              $isButtonAreaFloat={isButtonAreaFloat}
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
                <Checkbox
                  checked={isExtractTakeout}
                  onChange={handleChangeExceptTakeout}
                  labelText={'テイクアウトを除く'}
                />
                <CloseButton
                  type="button"
                  aria-label="閉じる"
                  onClick={() => {
                    handleCloseButton()
                  }}
                  $isInvisible={!isButtonAreaFloat}
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
                    X
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
const MainContent = styled.div<{ $isResult: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;

  // ガチャをしてない状態はタイトルを中央に配置
  ${(props) =>
    !props.$isResult &&
    css`
      flex-flow: column;
      justify-content: center;
      margin: 2px 5px;
      width: 100%;
    `}
`
const ButtonArea = styled.div<{
  $isResult: boolean
  $isButtonAreaFloat: boolean
}>`
  text-align: center;

  // ガチャ結果があるときはボタンを下に固定
  ${(props) =>
    props.$isResult &&
    props.$isButtonAreaFloat &&
    css`
      position: sticky;
      bottom: 0px;
      left: 0px;
      width: 100%;
    `}
`
const CloseButton = styled.button<{ $isInvisible: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  border-style: none;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  border-radius: 90px;
  background: transparent;
  color: rgba(0, 124, 0, 0.8);
  display: ${({ $isInvisible }) => ($isInvisible ? 'none' : 'block')};
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 2px;
    border-radius: 1px;
    background: currentColor;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
const ButtonAreaContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  background: rgb(185, 226, 185);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.33);
  min-height: 140px;
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
const LimitInput = styled.input`
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  outline: none;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-align: right;
  appearance: textfield;

  &:focus {
    box-shadow: inset 0 -1px currentColor;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    appearance: none;
  }
`
const UnitButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: inherit;
  cursor: text;
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
