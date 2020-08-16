import React, { FunctionComponent, CSSProperties, useState } from 'react';

import './Card.scss';

type CardProps = {
  title: string;
  content: Array<any>;
  imageSrc: string;
  backgroundColor?: string;
  titleColor?: string;
  contentColor?: string;
  smallSize?: boolean;
  style?: CSSProperties;
};

const Card: FunctionComponent<CardProps> = ({
  title,
  content,
  imageSrc,
  backgroundColor = '#ffff',
  titleColor = '#f34c26',
  contentColor = 'black',
  smallSize = true,
  style,
}) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setInnerWidth(window.innerWidth));
  return (
    <div
      className="card d-flex justify-content-center align-content-center flex-wrap"
      style={{
        ...style,
        background: backgroundColor,
        height: smallSize ? '87%' : 'auto',
        flexBasis: innerWidth < 800 ? '97%' : smallSize ? '25%' : '30%',
      }}
    >
      <img src={imageSrc} alt="card-icon" className="card-image" />
      <div className="title d-flex flex-wrap justify-content-center">
        <svg width="160px" height="10px" className="dashed-line">
          <line
            fill="none"
            stroke={titleColor}
            x1="0"
            y1="0"
            x2="159"
            y2="0"
            strokeDasharray="60 15 9 15"
          />
        </svg>
        <p style={{ color: titleColor }}>{title}</p>
      </div>
      <div style={{ width: '100%' }}>
        {content.map((bullet) => (
          <div
            key={Math.random() * Math.pow(2, Math.random())}
            style={{ color: contentColor }}
            className="d-flex card-content"
          >
            <div className="">
              <svg width="18px" height="18px" viewBox="0 0 18 18">
                <circle
                  cx={smallSize ? '7' : '9'}
                  cy={smallSize ? '7' : '9'}
                  r={smallSize ? '5' : '7'}
                  stroke={contentColor}
                  fill={contentColor}
                />
              </svg>
            </div>
            {bullet}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
