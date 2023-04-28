import moment from 'moment';
import { useState } from 'react';
import Event from './Event';
import OrderForm from './OrderForm';

const Events = () => {
  const events = [
    {
      name: 'Angus marha oldalas',
      description: `Ismét visszatér az örök klasszikus, a sertés oldalas és a nagy kedvenc Picanha steak is 🙂
    Nem sok mindenhez fogható, amikor offset smokerben, végig fával tüzelve készítünk sertés oldalast, próbáljátok ki 😉
    - Texas stílusú sertés oldalas
    - bostoni sült bab
    - texasi krumplipüré
    - ecetes lilahagyma
    - ecetes jalapeno
    A menü ára: 5 900,- Ft
    A picanha gyönyörűen márványos és a zsírrétegének köszönhetően tökéletes balanszban lévő szelet, melyet a Hortobágy Angus kiváló minőségű tenyészetéből szereztünk be.
    Elkészítési módja:
    Reverse sear technikával, amivel különleges ízeket érünk el a fa füstjének köszönhetően. Fatüzeléses offset smokerben, 120 fokos légáramban hozzuk fel a húst a kívánt elkészítési módnak megfelelő maghőre, melyet pihentetés után faszénen kérgesítünk.
    - Hortobágy Angus Picanha steak - reverse sear módszerrel
    - texasi krumplipüré
    - chimichurri
    A menü ára: 7 900,- Ft`,
      date: '20220412',
      remaining: 10,
      soldOut: true,
    },
    {
      name: 'Pastrami marhaszegy szednvics',
      description: `Ismét visszatér az örök klasszikus, a sertés oldalas és a nagy kedvenc Picanha steak is 🙂
    Nem sok mindenhez fogható, amikor offset smokerben, végig fával tüzelve készítünk sertés oldalast, próbáljátok ki 😉
    - Texas stílusú sertés oldalas
    - bostoni sült bab
    - texasi krumplipüré
    - ecetes lilahagyma
    - ecetes jalapeno
    A menü ára: 5 900,- Ft
    A picanha gyönyörűen márványos és a zsírrétegének köszönhetően tökéletes balanszban lévő szelet, melyet a Hortobágy Angus kiváló minőségű tenyészetéből szereztünk be.
    Elkészítési módja:
    Reverse sear technikával, amivel különleges ízeket érünk el a fa füstjének köszönhetően. Fatüzeléses offset smokerben, 120 fokos légáramban hozzuk fel a húst a kívánt elkészítési módnak megfelelő maghőre, melyet pihentetés után faszénen kérgesítünk.
    - Hortobágy Angus Picanha steak - reverse sear módszerrel
    - texasi krumplipüré
    - chimichurri
    A menü ára: 7 900,- Ft`,
      date: '20220521',
      remaining: 0,
      soldOut: false,
    },
    {
      name: 'Angus marha pofa tortilla wrap',
      description: `Ismét visszatér az örök klasszikus, a sertés oldalas és a nagy kedvenc Picanha steak is 🙂
    Nem sok mindenhez fogható, amikor offset smokerben, végig fával tüzelve készítünk sertés oldalast, próbáljátok ki 😉
    - Texas stílusú sertés oldalas
    - bostoni sült bab
    - texasi krumplipüré
    - ecetes lilahagyma
    - ecetes jalapeno
    A menü ára: 5 900,- Ft
    A picanha gyönyörűen márványos és a zsírrétegének köszönhetően tökéletes balanszban lévő szelet, melyet a Hortobágy Angus kiváló minőségű tenyészetéből szereztünk be.
    Elkészítési módja:
    Reverse sear technikával, amivel különleges ízeket érünk el a fa füstjének köszönhetően. Fatüzeléses offset smokerben, 120 fokos légáramban hozzuk fel a húst a kívánt elkészítési módnak megfelelő maghőre, melyet pihentetés után faszénen kérgesítünk.
    - Hortobágy Angus Picanha steak - reverse sear módszerrel
    - texasi krumplipüré
    - chimichurri
    A menü ára: 7 900,- Ft`,
      date: '20230511',
      remaining: 8,
      soldOut: false,
    },
    {
      name: 'Sertés oldalas / Picanha steak',
      description: `Ismét visszatér az örök klasszikus, a sertés oldalas és a nagy kedvenc Picanha steak is 🙂
    Nem sok mindenhez fogható, amikor offset smokerben, végig fával tüzelve készítünk sertés oldalast, próbáljátok ki 😉
    - Texas stílusú sertés oldalas
    - bostoni sült bab
    - texasi krumplipüré
    - ecetes lilahagyma
    - ecetes jalapeno
    A menü ára: 5 900,- Ft
    A picanha gyönyörűen márványos és a zsírrétegének köszönhetően tökéletes balanszban lévő szelet, melyet a Hortobágy Angus kiváló minőségű tenyészetéből szereztünk be.
    Elkészítési módja:
    Reverse sear technikával, amivel különleges ízeket érünk el a fa füstjének köszönhetően. Fatüzeléses offset smokerben, 120 fokos légáramban hozzuk fel a húst a kívánt elkészítési módnak megfelelő maghőre, melyet pihentetés után faszénen kérgesítünk.
    - Hortobágy Angus Picanha steak - reverse sear módszerrel
    - texasi krumplipüré
    - chimichurri
    A menü ára: 7 900,- Ft`,
      date: Date.now(),
      remaining: 0,
      soldOut: true,
    },
  ];

  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <section className='relative'>
      {isOpenForm && <OrderForm setIsOpenForm={setIsOpenForm} />}
      <div className='container mx-auto p-4 mb-8'>
        <div className='uppercase mt-4 text-3xl font-semibold font-patua mb-8'>
          események
        </div>
        <div className='flex flex-wrap justify-center gap-5'>
          {events.map((event, index) => (
            <Event
              key={index}
              myKey={index}
              {...event}
              setIsOpenForm={setIsOpenForm}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
