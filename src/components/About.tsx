import type { FC } from 'react';
import { ReactSVG } from 'react-svg';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <section className="section about" id="about">
      <div className="about-description__social">
        <a href="https://instagram.com/skdimka">
          <ReactSVG
            src="./svg/instagram.svg"
            className="about-description__social-svg"
          />
        </a>
        <a href="https://t.me/skdimkaa">
          <ReactSVG
            src="./svg/telegram.svg"
            className="about-description__social-svg"
          />
        </a>
        <a href="mailto:skopintsevdima@gmail.com">
          <ReactSVG
            src="./svg/google.svg"
            className="about-description__social-svg"
          />
        </a>
      </div>
      <div className="about-description">
        <h1 className="about-description__heating">About me</h1>
        <p className="about-description__body">
          I have successfully completed my bachelor's degree at Tomsk
          Polytechnic University and I am currently pursuing a master's degree
          in web development. My education, combined with practical experience,
          enables me to confidently work with a wide range of technologies,
          including HTML, CSS, JavaScript, TypeScript, React, and many others. I
          am ready to apply my knowledge and skills in practice and continue to
          grow in the field of web development. Additionally, I am highly active
          and passionate about traveling, cars, and immersing myself in the
          world of cryptocurrency.
        </p>
      </div>
    </section>
  );
};

export default About;
