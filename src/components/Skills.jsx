import React from "react";
import { techs } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = ({icon}) => {
  <img src={icon}></img>
}

const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-[#104dc4] to-[#161d9a] to-95% pb-12 pt-12" id="skills">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <p className={`${styles.sectionSubText} text-center`}>What I Know</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        <div className={"flex gap-10 flex-wrap"}>
          {techs.map((tech) => (
            <Tech key={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

// export default SectionWrapper(Skills, "");
export default Skills;
