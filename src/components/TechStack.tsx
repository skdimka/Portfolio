import type { FC } from 'react';
import { ReactSVG } from 'react-svg';

interface TechStackProps {}

const TechStack: FC<TechStackProps> = () => {
  return (
    <div className="techStack section">
      <h5 className="techStack-text">Tech Stack</h5>
      <div className="techStack-container">
        <ReactSVG src="./svg/html.svg" className="techStack-container__svg" />
        <ReactSVG src="./svg/css.svg" className="techStack-container__svg" />
        <ReactSVG src="./svg/js.svg" className="techStack-container__svg" />
        <ReactSVG src="./svg/ts.svg" className="techStack-container__svg" />
        <ReactSVG src="./svg/react.svg" className="techStack-container__svg" />
        <ReactSVG src="./svg/mobx.svg" className="techStack-container__svg" />
        <ReactSVG src="./svg/scss.svg" className="techStack-container__svg" />
        <ReactSVG src="./svg/vite.svg" className="techStack-container__svg" />
        <ReactSVG
          src="./svg/webpack.svg"
          className="techStack-container__svg"
        />
        <ReactSVG src="./svg/figma.svg" className="techStack-container__svg" />
      </div>
    </div>
  );
};

export default TechStack;
