// import content
import { createElement, useState } from "react";
import { experiences } from "../Content";
// import modal package
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
    width: "100%",
    zIndex: "3"
  },
};
Modal.setAppElement("#root");

const Experience = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
console.log(experiences)

  return (

    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>{selectSkill?.bulletOne}</li>
          <li>{selectSkill?.bulletTwo}</li>
          <li>{selectSkill?.bulletThree}</li>

        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {experiences.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {experiences.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {experiences.experience_content.map((experience, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                {/* <img
                  src={experience.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                /> */}
              </div>
              <div>
                <h6>{experience.name}</h6>
                <p className="italic">{experience.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(experience);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(experiences.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;