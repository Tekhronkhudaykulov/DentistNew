import Accordion from "./Accordion";
import "./App.css";
import { IoIosCall } from "react-icons/io";
import Advantes from "./Advantes";
import Form from "./Form";
import Reviews from "./Reviews";

function App() {
  const accordions = [
    {
      title: "Детская Стоматология",
      content:
        "Детская стоматология — это направление стоматологии, которое занимается лечением зубов, профилактикой и уходом за полостью рта у детей, начиная с самого раннего возраста.",
    },
    {
      title: "Терапевтический Стоматология",
      content:
        "Терапевтическая стоматология — это область стоматологии, которая занимается диагностикой, лечением и профилактикой заболеваний зубов и тканей полости рта.",
    },
    {
      title: "Ортопедические Стоматология",
      content:
        "Ортопедическая стоматология — это область стоматологии, которая занимается восстановлением утраченных зубов и исправлением дефектов зубного ряда с помощью различных протезов.",
    },
    {
      title: "Хирургический Стоматология",
      content:
        "Хирургическая стоматология — это направление стоматологии, которое занимается диагностикой и хирургическим лечением заболеваний зубов, десен, челюсти и других структур полости рта.",
    },
  ];
  return (
    <div>
      <section
        className="bg-header relative"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="absolute inset-0 bg-black opacity-[0.4] "></div>
        <div className="container mx-auto z-[9999] pt-[10px] ">
          <div className="flex items-start justify-center z-[9999] relative flex-col md:min-h-[70vh] container-devie">
            <p className="md:w-[500px] text-white w-[250px] md:text-[60px] text-[30px] font-bold ">
              Круглосуточная стоматология в Ташкенте | 24/7
            </p>
            <p className=" md:text-[35px] text-white text-[20px] font-bold">
              {/* зрослая стоматология */}
            </p>
            <p className="text-[12px] md:text-[18px] text-white md:block  md:w-[1000px] mt-[20px] md:leading-[30px]">
              Стоматология — это отрасль медицины, занимающаяся диагностикой,
              лечением и профилактикой заболеваний зубов, дёсен и полости рта.
              Она охватывает широкий спектр направлений, включая
              терапевтическую, хирургическую, ортопедическую, ортодонтическую и
              детскую стоматологию.
            </p>
            <div className="md:flex items-center justify-between w-full  md:mt-[20px]">
              <div className="flex items-center md:gap-x-[10px] gap-x-[5px] md:mt-[10px] mt-[20px] md:text-[20px] text-[16px] w-max md:h-[60px] h-[50px] bg-blue-500 md:px-[35px] px-[10px]  md:py-[20px] py-[10px] text-white rounded-[12px]">
                <IoIosCall fontSize={20} />
                <a href="tel:+998999527797">Позвонить +998 99 952 77 97</a>
              </div>
              <div className="md:mt-0 mt-[20px]">
                <p className="font-bold text-white">
                  Адрес: Юнусабадский район 13-квартал
                </p>
                {/* <p className="font-bold text-white">
                  Ориентир, 📌( Мегапланет), 📍Ринок (Ахмад донищ )
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:mt-[20px] mt-0">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.1336421031356!2d69.2929534617251!3d41.371181087262826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef311165725cf%3A0x12a018c1fd2fdf7a!2sStomatologiya%2024%2F7!5e0!3m2!1sen!2s!4v1726210472459!5m2!1sen!2s"
          width="100%"
          height="500"
        ></iframe> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.2665790173048!2d69.29424023857304!3d41.3712030313337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef30f565981df%3A0xf4e59f2d40b27d38!2sDenta%20Me!5e0!3m2!1sen!2s!4v1758722488766!5m2!1sen!2s"
          width="100%"
          height="500"
          loading="lazy"
        ></iframe>
      </section>
      <section
        className="container mx-[auto] pt-[20px]"
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
        id="service"
      >
        <div className="text-center  font-bold text-3xl">Наши Услуги</div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2">
          {accordions.map((accordion, index) => (
            <Accordion
              key={index}
              title={accordion.title}
              content={accordion.content}
            />
          ))}
        </div>
      </section>
      {/* <section
        className="bg-child-picture relative"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section> */}
      <Advantes />
      <section
        className="container mx-[auto] pt-[20px]"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        id="form"
      >
        <Form />
      </section>
      <section>
        <Reviews />
      </section>
      {/* <section className="mt-[10px]">
        <Footer />
      </section> */}
    </div>
  );
}

export default App;
