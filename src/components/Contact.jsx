import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { AnimatedCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6ai4j7p",
        "template_hbayrxl",
        {
          from_name: form.name,
          to_name: "Jeff Wang",
          from_email: form.email,
          to_email: "jeffyianwang@gmail.com",
          message: form.message,
        },
        "OHYYB4xsALb2WEu0d"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="pb-12 bg-gradient-to-b from-primary to-[#0a010e]">
      <div
        className={`${styles.padding} max-w-7xl mx-auto relative z-10`}
        id="contact"
      >
        {/* <span className="hash-span" id="contact">
          &nbsp;
        </span> */}
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                {/* <span className="text-white font-medium mb-4">Your Name</span> */}
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                {/* <span className="text-white font-medium mb-4">Your email</span> */}
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                {/* <span className="text-white font-medium mb-4">Your Message</span> */}
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] xl:block hidden"
          >
            <AnimatedCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// export default SectionWrapper(Contact, "contact");
export default Contact;
