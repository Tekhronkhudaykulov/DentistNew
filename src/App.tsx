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
        <div className="container mx-auto z-[9999] pt-2 px-2">
          <div className="flex items-start justify-center z-[9999] relative flex-col  md:min-h-[70vh] container-devie">
            <p className="w-[90%] md:w-[500px] text-white text-[24px] md:text-[45px] font-bold leading-tight">
              Круглосуточная стоматология в Ташкенте | 24/7 <br /> Детския и
              Взрослая Стоматология
            </p>
            <p className="text-[18px] md:text-[35px] text-white font-bold mt-2">
              {/* взрослая стоматология */}
            </p>
            <p className="text-[12px] md:text-[18px] text-white md:block w-full md:w-[1000px] mt-3 md:leading-[30px] leading-[18px]">
              Стоматология — это отрасль медицины, занимающаяся диагностикой,
              лечением и профилактикой заболеваний зубов, дёсен и полости рта.
              Она охватывает широкий спектр направлений, включая
              терапевтическую, хирургическую, ортопедическую, ортодонтическую и
              детскую стоматологию.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-4 md:mt-5 gap-y-3">
              <div className="flex items-center gap-x-2 md:gap-x-3 text-[16px] md:text-[20px] w-full md:w-max h-[45px] md:h-[60px] bg-blue-500 px-4 md:px-9 py-2 md:py-5 text-white rounded-[12px] justify-center">
                <IoIosCall fontSize={20} />
                <a href="tel:+998999527797" className="whitespace-nowrap">
                  Позвонить +998 99 952 77 97
                </a>
              </div>
              <div>
                <p className="font-bold text-[green] text-[14px] md:text-[16px] mt-2 md:mt-0 text-center md:text-left">
                  Адрес: Юнусабадский район 13-квартал 4-дом Ориентир, 1
                  (Мегапланет), Ринок (Ахмад донищ )
                </p>
                {/* <p className="text-white font-bold text-center">Office 1</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-0">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.1336421031356!2d69.2929534617251!3d41.371181087262826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef311165725cf%3A0x12a018c1fd2fdf7a!2sStomatologiya%2024%2F7!5e0!3m2!1sen!2s!4v1726210472459!5m2!1sen!2s"
          width="100%"
          height="500"
        ></iframe> */}

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.2665790173048!2d69.29424023857304!3d41.3712030313337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef30f565981df%3A0xf4e59f2d40b27d38!2sDenta%20Me!5e0!3m2!1sen!2s!4v1758722488766!5m2!1sen!2s"
          width="100%"
          height="500"
          loading="lazy"
        ></iframe> */}

        <div>
          {/* <div className="text-[25px] font-semibold text-center bg-blue-500 w-full text-white py-2">
            Office 1
          </div> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2994.1377896397717!2d69.29193207605879!3d41.37109097130205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIyJzE1LjkiTiA2OcKwMTcnNDAuMiJF!5e0!3m2!1sen!2s!4v1758723184815!5m2!1sen!2s"
            width="100%"
            height="500"
            title="Office 1"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
