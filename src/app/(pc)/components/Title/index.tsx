import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface Props {
  text: string;
  className?: string;
}

function Title({ text, className }: Props) {
  return (
    <TitleLayout className={classNames(className, 'title')}>{text}</TitleLayout>
  );
}

export default Title;

const TitleLayout = styled.h4`
  font-size: 30px;
  font-weight: normal;
  line-height: 44px;
  color: #2a2a2a;
`;
