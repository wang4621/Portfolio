import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#0677ea] from-10% to-[#104dc4] pt-12" id="about">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        {/* <span className="hash-span" id="about">
          &nbsp;
        </span> */}
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className=" mt-4 max-w-3xl mx-auto"
        >
          <p className="text-secondary text-[17px] leading-[30px] text-center">
            I'm a skilled and passionate software developer with experience in
            both front-end and back-end technologies. I excel in HTML, CSS,
            JavaScript, and frameworks like React and Next. With a strong
            dedication to clean code architecture and problem-solving abilities,
            I am dedicated to delivering high-quality solutions that meet client
            requirements and provide exceptional user experiences. As a quick
            learner, I am always eager to expand my skill set and stay
            up-to-date with the latest industry trends.
          </p>
        </motion.div>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
      {/* <div className="skew-y-6 bg-[#0087fc] h-7 origin-top-left" /> */}
    </section>
  );
};

// export default SectionWrapper(About, "about");
export default About;
