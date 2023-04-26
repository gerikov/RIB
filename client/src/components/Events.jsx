import moment from 'moment';
import { useState } from 'react';
import Event from './Event';

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
      date: Date.now(),
      remaining: 10,
      soldOut: false,
    },
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
      date: Date.now(),
      remaining: 10,
      soldOut: false,
    },
  ];



  return (
    <section>
      <div className='container mx-auto p-4'>
        <div className='uppercase mt-4 text-3xl font-semibold font-patua mb-8'>
          események
        </div>
        <div className='flex flex-wrap justify-between gap-5'>
          {events.map((event, index) => (
            <Event key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
