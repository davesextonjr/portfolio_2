import { useState } from "react";
import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",

  },
  overlay: {
    padding: "2rem",
    zIndex: "3"
  },
};
Modal.setAppElement("#root");

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <section className="bg-bg_light_primary" id="projects">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex flex-col gap-5">

          <div className="font-bold">{selectProject?.title}</div>
          <div>{selectProject?.description}</div>
          <div>{selectProject?.descriptionTwo}</div>
          <a href={selectProject?.link} target="_blank" className="btn text-center" >Visit Site
          </a>
          <button onClick={closeModal} className='btn'>
            Close
          </button>
        </div>

      </Modal>




      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="Dave pointing at projects"
            data-aos="fade-right"
            className="max-w-[35vw] min-w-[22rem]"

          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs md:max-w-2xl drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] w-3/6"
              >
                <img src={content.image} className="rounded-3xl" alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button
                    className="font-bold text-gray self-end"
                    onClick={() => {
                      setSelectProject(content);
                      openModal()
                    }}
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
