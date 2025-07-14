import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Политика конфиденциальности</title>
        <link rel="canonical" href="https://electromash.example.com/privacy-policy" />
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto p-4 prose">
        <h1>Политика конфиденциальности</h1>
        <p>
          ООО «Электромашсервис» уважает ваше право на конфиденциальность и
          обязуется защищать персональные данные, которые вы нам предоставляете.
          Мы собираем и обрабатываем данные только в тех случаях, когда это
          необходимо для оказания услуг и улучшения работы сайта. Полный текст
          политики временно отсутствует и будет опубликован в ближайшее время.
        </p>
      </main>
      <Footer />
    </>
  );
}
