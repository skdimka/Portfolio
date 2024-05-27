import type { FC } from 'react';
import { ReactSVG } from 'react-svg';

interface SmartHomeProps {}

const SmartHome: FC<SmartHomeProps> = () => {
  return (
    <>
      <section className="project-smartHome section smartHome">
        <div className="project-smartHome__about">
          <h1 className="project-smartHome__about-name">Smart Home</h1>
          <p className="project-smartHome__about-escription">
            Application for managing a smart home. Authorization/registration
            implemented. Adding, deleting, and turning devices on/off. Adding a
            new device using web sockets. Loaders, forms, skeletons, and much
            more in this wonderful project. Thanks for the project assistance
            from the company - Paraweb.
          </p>

          <div className="project-smartHome__about-stack">
            <ReactSVG
              src="./svg/reactBlack.svg"
              className="project-smartHome__about-stack__svg"
            />
            <ReactSVG
              src="./svg/tsBlack.svg"
              className="project-smartHome__about-stack__svg"
            />
            <ReactSVG
              src="./svg/mobxBlack.svg"
              className="project-smartHome__about-stack__svg"
            />
          </div>
        </div>

        <div className="project-smartHome__photo">
          <a
            href="http://5.35.98.199/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/smartHome.png"
              alt="smartHome"
              className="project-smartHome__photo-png"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default SmartHome;
