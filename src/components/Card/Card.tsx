import React, { FunctionComponent } from 'react';

import './Card.scss';

type CardProps = {
  title: string;
  content: Array<any>;
  imageSrc: string;
  backgroundColor?: string;
  titleColor?: string;
  contentColor?: string;
};

const Card: FunctionComponent<CardProps> = ({
  title,
  content,
  imageSrc,
  backgroundColor = '#ffff',
  titleColor = '#f34c26',
  contentColor = 'black',
}) => (
  <div
    className="card d-flex justify-content-center  align-content-center flex-wrap"
    style={{
      background: backgroundColor,
    }}
  >
    <img src={imageSrc} alt="card-icon" />
    <div
      className="title d-flex flex-wrap justify-content-center"
      style={{ height: '20%' }}
    >
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
    <ul>
      {content.map((bullet) => (
        <li
          key={Math.random() * Math.pow(2, Math.random())}
          style={{ color: contentColor }}
        >
          {bullet}
        </li>
      ))}
    </ul>
  </div>
);

export default Card;
