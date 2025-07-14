import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ООО «Электромашсервис»",
    "url": "https://electromash.example.com",
    "logo": "https://electromash.example.com/favicon.ico",
    "contactPoint": [{ "@type": "ContactPoint", "telephone": "+74951234567", "contactType": "customer service" }]
  };
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style id="critical-css">{`
          .skip-link{position:absolute;top:-40px;left:0;background:#fff;color:#3B82F6;padding:8px 16px;z-index:100;}
          .skip-link:focus-visible{top:0;}
          header{background-color:#f3f4f6;}
        `}</style>
          <title>Электромашсервис | Надёжность. Инновации. Индивидуальный подход.</title>
          <meta name="description" content="Компания Электромашсервис — лидер в производстве и обслуживании промышленных электродвигателей. Высокое качество, гибкие сроки и персональный сервис."/>
          <meta property="og:title" content="Электромашсервис — лидер в электродвигателях"/>
          <meta property="og:description" content="Полный спектр услуг: от проектирования до сервисного обслуживания. Индивидуальные решения для вашего производства."/>
          <meta property="og:image" content="/images/og-image.jpg"/>
          <meta property="og:url" content="https://electromash.example.com"/>
          <link rel="canonical" href="https://electromash.example.com/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:locale" content="ru_RU"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="Электромашсервис — лидер в электродвигателях"/>
          <meta name="twitter:description" content="Полный спектр услуг…"/>
          <meta name="twitter:image" content="/images/og-image.jpg"/>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <body>
        <a href="#main-content" className="skip-link">Перейти к содержимому</a>
        <Main/>
        <NextScript/>
        <Script src="/assets/js/main.js" strategy="defer" />
      </body>
    </Html>
  );
}
