'use client';

import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import Navigation from '@/app/(pc)/components/Layout/Navigation';

const HeaderLayout = styled.header`
  position: relative;
  z-index: 30;
  border-bottom: 2px solid ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fontFamilies.default};
  background: url(${props =>
      `${props.theme.imageUrl}/pc/common/bg_header_border.png`})
    0 0 repeat-x;

  .inner_header {
    position: relative;
    width: ${props => props.theme.desktopDeviceWidth};
    margin: 0 auto;
  }

  .ico_corp {
    display: inline-block;
    zoom: 1;
    *display: inline;
    overflow: hidden;
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/ico_corp.png`})
      no-repeat 0 0;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;
    *text-indent: 0;
    vertical-align: middle;
  }

  .ico_logo {
    width: 204px;
    height: 45px;
    background-position: 0 -35px;
  }
`;

const HeaderGnb = styled.div`
  height: 30px;
  font-size: 16px;

  &:after {
    content: '';
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    font-size: 0;
  }

  .list_family_site {
    float: left;
    padding-top: 6px;
  }

  .list_family_site li {
    float: left;
    padding-left: 15px;
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/bg_gnb_border.png`})
      8px 5px no-repeat;
    line-height: 1em;
  }

  .list_family_site li:first-child {
    padding-left: 0;
    background: 0;
  }

  .list_family_site a {
    font-size: 12px;
    color: #a6a5a5;
  }

  .list_member {
    float: right;
    padding-top: 6px;
  }

  .list_member li {
    float: left;
    padding-left: 15px;
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/bg_gnb_border.png`})
      8px 5px no-repeat;
    line-height: 1em;
  }

  .list_member li:first-child {
    padding-left: 0;
    background: 0;
  }

  .list_member a {
    font-size: 12px;
    color: #a6a5a5;
  }

  .list_member .btn_setpage {
    *margin-top: 6px;
    font-size: 11px;
    color: #ff0078;
    vertical-align: middle;
  }

  .list_member .btn_setpage img {
    margin-right: 3px;
    vertical-align: middle;
  }

  .list_member .btn_setpage span {
    display: inline-block;
    *display: inline;
    vertical-align: middle;
  }
`;

const HeaderSta = styled.div`
  position: relative;
  height: 130px;

  h1 {
    padding-top: 38px;
    font-family: ${props => props.theme.fontFamilies.notoSans};
    font-size: 45px;
    font-weight: bold;
    color: ${props => props.theme.colors.black};
    text-align: center;
    line-height: 65px;
  }
`;

const HeaderSubLogo = styled.div`
  position: absolute;
  top: 61px;
  left: 34px;

  .ico_logo {
    display: inline-block;
    width: 133px;
    height: 29px;
    background: url(${props => `${props.theme.imageUrl}/pc/common/logo.webp`})
      no-repeat 0 0;
    background-size: cover;
  }
`;

const HeaderSns = styled.div`
  position: absolute;
  top: 113px;
  right: 0;

  &:after {
    content: '';
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    font-size: 0;
  }

  .list_sns {
    float: left;
  }

  .list_sns dd {
    float: left;
    margin-left: 17px;
  }

  .list_sns dd:first-child {
    margin-left: 0;
  }

  #search {
    float: left;
    height: 25px;
    margin-left: 17px;
  }

  .ico_facebok {
    width: 10px;
    height: 21px;
    background-position: 0 -1px;
  }

  .ico_twitter {
    width: 25px;
    height: 21px;
    background-position: -28px -1px;
  }

  .ico_kakaostory {
    width: 12px;
    height: 21px;
    background-position: -67px -1px;
  }

  .ico_instagram {
    width: 20px;
    height: 21px;
    background-position: -97px -1px;
  }

  .ico_youtube {
    width: 24px;
    height: 21px;
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/ico_corp_header_youtube.png`})
      no-repeat 0 0;
  }
`;

interface Props {
  handleToggleAside: () => void;
}

function Header({ handleToggleAside }: Props) {
  return (
    <HeaderLayout>
      <div className="inner_header">
        <HeaderGnb>
          <ul className="list_family_site">
            <li>
              <Link
                href="//www.khan.co.kr"
                target="_blank"
                title="경향신문(새창)"
                rel="noreferrer"
                prefetch={false}
              >
                경향신문
              </Link>
            </li>
            <li>
              <Link
                href="http://weekly.khan.co.kr"
                target="_blank"
                title="주간경향(새창)"
                rel="noreferrer"
                prefetch={false}
              >
                주간경향
              </Link>
            </li>
            <li>
              <Link
                href="http://lady.khan.co.kr"
                target="_blank"
                title="레이디경향(새창)"
                rel="noreferrer"
                prefetch={false}
              >
                레이디경향
              </Link>
            </li>
          </ul>
          <ul className="list_member">
            <li>
              <Link
                href="http://epaper.khan.co.kr"
                target="_blank"
                title="지면보기(새창)"
                rel="noreferrer"
                prefetch={false}
              >
                지면보기
              </Link>
            </li>
            <li>
              <Link
                href="http://smile.khan.co.kr/gudoc/gudoc_input_step3.html?media_cd=212"
                target="_blank"
                title="구독신청(새창)"
                rel="noreferrer"
                prefetch={false}
              >
                구독신청
              </Link>
            </li>
          </ul>
        </HeaderGnb>

        <HeaderSta>
          <h1>
            <Link className="ico_logo" href="/" title="스포츠경향 운세">
              운세
            </Link>
          </h1>
        </HeaderSta>

        <HeaderSubLogo>
          <h2>
            <Link
              className="ico_corp ico_logo"
              href="https://sports.khan.co.kr/"
              title="스포츠경향"
            >
              <span className="screen_out">스포츠경향</span>
            </Link>
          </h2>
        </HeaderSubLogo>

        <HeaderSns>
          <dl className="list_sns">
            <dt className="screen_out">스포츠경향 SNS</dt>
            <dd>
              <Link
                className="ico_corp ico_facebok"
                href="https://www.facebook.com/sportkh"
                title="페이스북"
                target="_blank"
                rel="noreferrer"
              >
                <span>페이스북 바로가기</span>
              </Link>
            </dd>
            <dd>
              <Link
                className="ico_corp ico_twitter"
                href="https://twitter.com/sportskh"
                title="트위터"
                target="_blank"
                rel="noreferrer"
              >
                <span>트위터 바로가기</span>
              </Link>
            </dd>
            <dd>
              <Link
                className="ico_corp ico_kakaostory"
                href="https://story.kakao.com/ch/sportskh"
                title="카카오스토리"
                target="_blank"
                rel="noreferrer"
              >
                <span>카카오스토리 바로가기</span>
              </Link>
            </dd>
            <dd>
              <Link
                className="ico_corp ico_instagram"
                href="https://www.instagram.com/sportskh_sports/"
                title="인스타그램"
                target="_blank"
                rel="noreferrer"
              >
                <span>인스타그램 바로가기</span>
              </Link>
            </dd>
            <dd>
              <Link
                className="ico_corp ico_youtube"
                href="https://www.youtube.com/c/스포츠경향sportskhan"
                title="유튜브"
                target="_blank"
                rel="noreferrer"
              >
                <span>유튜브 바로가기</span>
              </Link>
            </dd>
          </dl>
        </HeaderSns>

        <Navigation handleToggleAside={handleToggleAside} />
      </div>
    </HeaderLayout>
  );
}

export default Header;
