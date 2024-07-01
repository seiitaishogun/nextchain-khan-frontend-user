import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface Props {
  boldText: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

function Title({ boldText, text, className, children }: Props) {
  return (
    <TitleLayout className={classNames(className, 'title')}>
      <div>
        <strong>{boldText}</strong>
        <span>{text}</span>
      </div>
      {children}
    </TitleLayout>
  );
}

export default Title;
export type { Props as TitleProps };

const TitleLayout = styled.h4`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 25px 0;
  font-size: 22px;
  font-weight: normal;
  font-family: ${props => props.theme.fontFamilies.notoSans};
  color: #20201f;

  > div {
    display: flex;
    align-items: center;
  }

  strong {
    display: inline-block;
    position: relative;
    margin-right: 20px;
    color: ${props => props.theme.colors.primary};
    letter-spacing: 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -11px;
      width: 1px;
      height: 25px;
      background-color: #20201f;
    }
  }
`;
