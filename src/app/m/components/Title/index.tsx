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
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 26px 0;
  font-size: 1.188em;
  font-weight: 500;
  font-family: ${props => props.theme.fontFamilies.notoSans};
  color: #20201f;
  letter-spacing: -0.06em;

  strong {
    display: inline-block;
    position: relative;
    margin-right: 20px;
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
    letter-spacing: 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -11px;
      width: 1px;
      height: 20px;
      background-color: #20201f;
    }
  }
`;
