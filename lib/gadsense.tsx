'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';

import { device } from '@/components/styled/media';

export const GoogleAdsHeader = (): JSX.Element => (
  <>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      data-ad-client="ca-pub-7961076646821939"
    />
  </>
);

export const GoogleBoxAds = (): JSX.Element => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return (
    <AdsBoxInsert
      className="adsbygoogle"
      data-ad-client="ca-pub-7961076646821939"
      data-ad-slot="7072512565"
      data-ad-format="auto"
      data-full-width-responsive="false"
    ></AdsBoxInsert>
  );
};

export const GoogleHeaderAds = (): JSX.Element => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return (
    <AdsHeaderInsert
      className="adsbygoogle"
      data-ad-client="ca-pub-7961076646821939"
      data-ad-slot="1694695821"
    ></AdsHeaderInsert>
  );
};

export const GoogleColumnAds = (): JSX.Element => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return (
    <AdsColumnInsert
      className="adsbygoogle"
      data-ad-client="ca-pub-7961076646821939"
      data-ad-slot="7849040636"
    ></AdsColumnInsert>
  );
};

const AdsBoxInsert = styled.ins`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 320px;
  height: 200px;
`;

const AdsHeaderInsert = styled.ins`
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
`;

const AdsColumnInsert = styled.ins`
  display: none;
  width: 0;
  height: 0;

  @media ${device.laptop} {
    display: inline-block;
    width: 300px;
    height: 600px;
  }
`;
