import { motion } from "framer-motion";
import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 items-center`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5"> */}
        {/* <div className="w-5 h-5 rounded-full bg-[#915EFF]" /> */}
        {/* <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
        {/* </div> */}
        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            variants={fadeIn("up", "tween", "0.4", "1.2")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            Hi, I'm <span className="text-[#fca40e]">Jeff</span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            variants={fadeIn("up", "tween", "0.7", "1.2")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            I am a{" "}
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Designer",
                2000,
                "Programmer",
                2000,
              ]}
              speed={50}
              className="text-[#029fee]"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.p>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />{" "}
              </svg>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
