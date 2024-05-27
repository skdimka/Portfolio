import type { FC } from 'react';
import { ReactSVG } from 'react-svg';

interface BeatyWorldProps {}

const BeatyWorld: FC<BeatyWorldProps> = () => {
  return (
    <>
      <section className="project section beautyWorld">
        <div className="project-photo">
          <a
            href="https://skdimka-beauty-world.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/beautyWorld.png"
              alt="beautyWorld"
              className="project-photo__png"
            />
          </a>
        </div>
        <div className="project-about">
          <h1 className="project-about__name">Beauty World</h1>
          <p className="project-about__description">
            The website represents the beauty salon "Mir Krasoty." It includes
            various sections describing services and providing information for
            clients. A CRM system is implemented for managing appointments.
          </p>
          <div className="project-smartHome__about-stack">
            <ReactSVG
              src="./svg/htmlBlack.svg"
              className="project-smartHome__about-stack__svg"
            />
            <ReactSVG
              src="./svg/jsBlack.svg"
              className="project-smartHome__about-stack__svg"
            />
            <ReactSVG
              src="./svg/sassBlack.svg"
              className="project-smartHome__about-stack__svg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BeatyWorld;
