'use client';

import React from 'react';
import styled from 'styled-components';
import NavigationMenu from '@/app/(pc)/components/Layout/Navigation/Menu';

const HeaderNavigation = styled.nav`
  position: relative;
  height: 43px;
  padding-left: 97px;

  .box_snb .btn_snb {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    vertical-align: middle;

    .ico_snb {
      width: 31px;
      height: 25px;
      margin-right: 8px;
      border: 1px solid #d2d2d2;
      background-position: -165px -1px;
    }
  }

  .list_cate {
    float: left;
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/bg_lnb_border.png`})
      0 14px no-repeat;
  }

  .list_cate li {
    float: left;
    padding: 13px 0 0 26px; /*padding:13px 0 0 26px;*/
    line-height: 1em;

    &.active a {
      color: ${props => props.theme.colors.primary};
    }
  }

  .list_cate li a {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    line-height: 1em;
  }

  .list_cate li a:hover,
  .list_cate li.on a {
    color: #e6007e;
    text-decoration: underline;
  }

  .list_issue {
    float: right;
  }

  .list_issue li {
    float: left;
    padding: 13px 0 0 26px;
    line-height: 1em;
  }

  .list_issue li:first-child {
    padding-left: 0;
  }

  .list_issue li.img {
    padding: 0;
  }

  .list_issue li a {
    font-size: 16px;
    font-weight: bold;
    color: #0d81ff;
    line-height: 1em;
  }

  .box_snb {
    position: absolute;
    top: 12px;
    left: 40px;
  }

  .box_snb .btn_snb {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    vertical-align: middle;
  }

  .box_snb .ico_snb {
    margin-right: 8px;
  }

  .box_snb .txt_snb {
    vertical-align: middle;
  }
`;

interface Props {
  handleToggleAside: () => void;
}

function Navigation({ handleToggleAside }: Props) {
  return (
    <HeaderNavigation role="navigation">
      <NavigationMenu />

      <div className="box_snb">
        <button
          type="button"
          className="btn_snb snbToggle"
          title="전체메뉴 열기"
          onClick={handleToggleAside}
        >
          <strong className="txt_snb">전체</strong>
        </button>
      </div>
    </HeaderNavigation>
  );
}

export default Navigation;
