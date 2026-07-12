import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import styled from 'styled-components'
import { device } from './../components/styled/media'

export const GoogleAdsHeader = (): JSX.Element => (
  <>
    {process.env.NODE_ENV !== 'development' && (
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        data-ad-client="ca-pub-7961076646821939"
        strategy="afterInteractive"
      />
    )}
  </>
)

export const GoogleBoxAds = (): JSX.Element => {
  const isMounted = useIsMounted()

  useGoogleAds(isMounted)

  return (
    <AdsBox>
      {isMounted && (
        <AdsBoxInsert
          className="adsbygoogle"
          data-ad-client="ca-pub-7961076646821939"
          data-ad-slot="7072512565"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></AdsBoxInsert>
      )}
    </AdsBox>
  )
}

export const GoogleHeaderAds = (): JSX.Element => {
  const isMounted = useIsMounted()

  useGoogleAds(isMounted)

  return (
    <AdsHeader>
      {isMounted && (
        <AdsHeaderInsert
          className="adsbygoogle"
          data-ad-client="ca-pub-7961076646821939"
          data-ad-slot="1694695821"
        ></AdsHeaderInsert>
      )}
    </AdsHeader>
  )
}

export const GoogleColumnAds = (): JSX.Element => {
  const isMounted = useIsMounted()

  useGoogleAds(isMounted)

  return (
    <AdsColumn>
      {isMounted && (
        <AdsColumnInsert
          className="adsbygoogle"
          data-ad-client="ca-pub-7961076646821939"
          data-ad-slot="7849040636"
        ></AdsColumnInsert>
      )}
    </AdsColumn>
  )
}

const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}

const useGoogleAds = (isMounted: boolean): void => {
  useEffect(() => {
    if (!isMounted || process.env.NODE_ENV === 'development') {
      return
    }

    try {
      const ads = (window.adsbygoogle = window.adsbygoogle || [])
      ads.push({})
    } catch (err) {
      console.error(err)
    }
  }, [isMounted])
}

const AdsBox = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 320px;
  height: 200px;
`

const AdsBoxInsert = styled.ins`
  display: block;
  width: 100%;
  height: 100%;
`

const AdsHeader = styled.div`
  display: inline-block;
  min-width: 300px;
  max-width: 970px;
  width: 100%;
  height: 50px;

  @media ${device.laptop} {
    display: none;
    width: 0;
    height: 0;
  }
`

const AdsHeaderInsert = styled.ins`
  display: inline-block;
  width: 100%;
  height: 100%;
`

const AdsColumn = styled.div`
  display: none;
  width: 0;
  height: 0;

  @media ${device.laptop} {
    display: inline-block;
    width: 300px;
    height: 600px;
  }
`

const AdsColumnInsert = styled.ins`
  display: inline-block;
  width: 100%;
  height: 100%;
`
