import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import Testimonial from './Testimonial';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Testimonials.scss';

const allTestimonial = [
  {
    description:
      'Imádtuk az ínycsiklandó BBQ ízeket és a kiváló minőségű borokat. A személyzet pedig rendkívül barátságos és figyelmes volt.!',
    person: ' Tóth Éva',
  },
  {
    description:
      'Fantasztikus volt az otthonos hangulat, és az étterem hangulatos környezete igazán különleges élményt nyújtott. Az ételek pedig egyszerűen isteniek voltak!',
    person: 'Kiss Gergő',
  },
  {
    description:
      'Nagyon elégedettek voltunk az ételkínálattal és a kiszolgálással is. Az ételek frissek és nagyon finomak voltak, a személyzet pedig igazán figyelmes és kedves volt velünk. Ajánljuk mindenkinek!',
    person: 'Török Ádám',
  },
  {
    description:
      'Nagyon elégedettek voltunk az ételkínálattal és a kiszolgálással is. Az ételek frissek és nagyon finomak voltak, a személyzet pedig igazán figyelmes és kedves volt velünk. Ajánljuk mindenkinek!',
    person: 'Török Ádám',
  },
  {
    description:
      'Nagyon elégedettek voltunk az ételkínálattal és a kiszolgálással is. Az ételek frissek és nagyon finomak voltak, a személyzet pedig igazán figyelmes és kedves volt velünk. Ajánljuk mindenkinek!',
    person: 'Török Ádám',
  },
];

const Testimonials = () => {
  return (
    <section className='container mx-auto p-4 my-8'>
      <div className='uppercase mt-4 text-3xl font-semibold font-patua'>
        rólunk mondták
      </div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        // centeredSlides={true}

        breakpoints={{
          640: {
            slidesPerView: 'auto',
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {allTestimonial.map((testimonial, index) => (
          <SwiperSlide className='my-8'>
            <Testimonial
              key={index}
              description={testimonial.description}
              person={testimonial.person}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonials;
