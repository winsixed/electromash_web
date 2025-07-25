import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CookieBanner from '../components/Layout/CookieBanner';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      <Head><title>Электромашсервис — Промышленные электродвигатели</title></Head>
      <Header />
      <main id="main-content">
        <section className="min-h-[80vh] bg-gradient-to-r from-[#0B1F4E] to-[#0D316B] flex items-center">
          <div className="container text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-wide drop-shadow-sm">
              Промышленные
              <br />
              электродвигатели
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              Решения для производств, монтажных организаций и инженеров
            </p>
            <motion.a
              href="mailto:info@electromash.ru"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-block min-h-[44px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Запросить КП
            </motion.a>
          </div>
        </section>
        <section id="about" className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">О компании</h2>
            <p className="text-gray-700 leading-relaxed">
              ООО «Электромашсервис» — надёжный поставщик промышленных
              электродвигателей с индивидуальным подходом.
            </p>
          </div>
        </section>
        <section id="products" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Продукция</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                'Асинхронные двигатели',
                'Двигатели постоянного тока',
                'Генераторы постоянного тока',
                'Тяговые двигатели',
                'Тормоза и двигатели',
                'Комплектующие',
                'Вкладыши',
                'Любые дополнительные категории',
              ].map((title) => (
                <motion.div
                  key={title}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  className="border-4 border-blue-600 rounded-2xl p-8 hover:shadow-lg transition-transform duration-200 ease-out"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
                  <p className="text-gray-600">Описание товара или категории.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="contacts" className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700">
            <div className="space-y-4">
              <p className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-blue-600" aria-hidden="true" />
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              </p>
              <p className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-blue-600" aria-hidden="true" />
                Казань, ул. Лаврентьева, д. 3А, офис 321
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-600" aria-hidden="true" />
                <a href="mailto:info@electromash.ru">info@electromash.ru</a>
              </p>
              <p className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-blue-600" aria-hidden="true" />
                Дополнительный адрес
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
      <CookieBanner/>
    </>
  );
}
