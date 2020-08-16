import React, { FunctionComponent } from 'react';

import './Card.scss';

type CardProps = {
  title: string;
  content: Array<any>;
  imageSrc: string;
  backgroundColor?: string;
  titleColor: string;
  contentColor?: string;
};

const Card: FunctionComponent<CardProps> = ({
  title,
  content,
  imageSrc,
  backgroundColor = '#ffff',
  titleColor = '#f34c26',
  contentColor = '#0000',
}) => (
  <div
    className="card d-flex justify-content-center flex-wrap"
    style={{
      background: backgroundColor,
    }}
  >
    <img src={imageSrc} alt="card-icon" />
    <p className="title" style={{ color: titleColor }}>
      {title}
    </p>
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
