import React, { useEffect } from "react";

export const GoogleAdsHeader = (): JSX.Element => (
  <>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      data-ad-client="ca-pub-7961076646821939" />
  </>
)

export const GoogleBoxAds = (): JSX.Element => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle ads-block"
      data-ad-client="ca-pub-7961076646821939"
      data-ad-slot="7072512565"
      data-ad-format="auto"
      data-full-width-responsive="false"
      ></ins>
  );
}

export const GoogleHeaderAds = (): JSX.Element => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle ads-header"
      data-ad-client="ca-pub-7961076646821939"
      data-full-width-responsive="true"
      data-ad-slot="1694695821"
    ></ins>
  );
}

export const GoogleColumnAds = (): JSX.Element => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle ads-column"
      data-ad-client="ca-pub-7961076646821939"
      data-ad-slot="7849040636"
    ></ins>
  );
}
