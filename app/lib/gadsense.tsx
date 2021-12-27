import { useRouter } from "next/router";
import React, { useEffect } from "react";


// export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
// export const existsGaId = GA_ID !== ''

export const GoogleAdsHeader = () => (
  <>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      data-ad-client="ca-pub-7961076646821939" />
  </>
)
