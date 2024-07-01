import React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  labelText: string;
  className?: string;
  children: React.ReactNode;
  isCenter?: boolean;
}

const Layout = styled.div<{ $isCenter?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;

  &:first-child {
    margin-top: 0;
  }

  > label {
    width: 100%;
    font-weight: normal;
    font-size: 18px;
    color: ${props => props.theme.colors.black};
    text-align: ${props => (props.$isCenter ? 'center' : 'left')};
  }

  > div {
    display: flex;
    width: 100%;
    margin-top: 15px;
    justify-content: ${props => (props.$isCenter ? 'center' : 'flex-start')};
  }
`;

function LabelGroup({ id, labelText, className, children, isCenter }: Props) {
  return (
    <Layout className={className} $isCenter={isCenter}>
      <label htmlFor={id}>{labelText}</label>
      <div>{children}</div>
    </Layout>
  );
}

export default LabelGroup;
