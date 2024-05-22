import type { FC } from 'react';
import { ReactSVG } from 'react-svg';

interface SectionHomeProps {}

const SectionHome: FC<SectionHomeProps> = () => {
  return (
    <section className="profile-section">
      <div className="profile-description">
        <h1 className="profile-description__heating">
          Front-End React Developer
        </h1>
        <p className="profile-description__body">
          Hi, I'm Dmitry Skopintsev, front-end developer. Now I live in Siberia,
          but I'm ready for adventure
        </p>
        <div className="profile-description__social">
          <a
            href="https://github.com/skdimka"
            className="profile-description__social-svg"
          >
            <ReactSVG src="./svg/github.svg" />
          </a>
        </div>
      </div>
      <div className="profile-photo">
        <img src="../profilePhoto.jpg" alt="profile-photo__img" />
      </div>
    </section>
  );
};

export default SectionHome;
