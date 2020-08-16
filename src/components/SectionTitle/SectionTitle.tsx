import React, { FunctionComponent, ClassicElement } from 'react';

import './SectionTitle.scss';

type TitleProps = {
  content: ClassicElement<any>;
};

const SectionTitle: FunctionComponent<TitleProps> = ({ content }) => {
  return (
    <div className="section-title col-12 d-flex justify-content-center">
      {content}
    </div>
  );
};

export default SectionTitle;
