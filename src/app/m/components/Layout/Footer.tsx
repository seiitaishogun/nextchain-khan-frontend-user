'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const FooterLayout = styled.footer`
  position: relative;

  /* #Footer - 기업정보 수정(202308) */

  .wrap_mediainfo {
    padding: 15px;
    background-color: #4c4c4c;
  }

  .wrap_mediainfo:after {
    content: '';
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    font-size: 0;
  }

  .wrap_mediainfo .logo_sportskh {
    display: block;
    height: 20px;
    padding-top: 12px;
  }

  .wrap_mediainfo .logo_sportskh img {
    display: block;
    position: relative !important;
    width: auto !important;
    height: 100% !important;
  }

  .wrap_mediainfo .list_corpinfo {
    overflow: hidden;
    padding: 15px 0;
    border-top: 1px solid #616161;
    color: #aaa;
    font-size: 0.875em !important;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
    letter-spacing: -0.06em;
  }

  .wrap_mediainfo .list_corpinfo .item {
    position: relative;
  }

  .wrap_mediainfo .list_snslink {
    display: table;
    margin: 0 auto;
    padding: 25px 0;
    border-top: 0;
  }

  .wrap_mediainfo .list_snslink .item {
    display: table-cell;
    padding: 0 7px;
    text-align: center;
  }

  .wrap_mediainfo .list_snslink .link_sns {
    display: block;
    position: relative !important;
    width: 50px !important;
    height: 50px !important;
  }

  .wrap_mediainfo .list_snslink .ico_sns_circle {
    display: block;
    position: relative !important;
    width: 50px !important;
    height: 50px !important;
  }

  /* 주요 매체 */

  .wrap_mediainfo .list_familysite .item {
    display: inline-block;
    float: left;
    width: 33.3%;
    text-align: center;
    font-size: 16px;
  }

  .wrap_mediainfo .list_familysite .item:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -2px;
    width: 1px;
    height: 10px;
    margin-top: -5px;
    background-color: #6a6a6a;
  }

  .wrap_mediainfo .list_familysite li:last-child:after {
    display: none;
  }

  /* 주요 연락처 */

  .wrap_mediainfo .list_contact .item {
    display: inline-block;
    float: left;
    width: 50%;
    text-align: center;
    line-height: 1.6em;
  }

  .wrap_mediainfo .list_contact .item:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -2px;
    width: 1px;
    height: 10px;
    margin-top: -5px;
    background-color: #6a6a6a;
  }

  .wrap_mediainfo .list_contact li:last-child {
    width: 100%;
  }

  .wrap_mediainfo .list_contact li:last-child:after {
    display: none;
  }

  /* 회사 정보 */

  .wrap_mediainfo .list_intro {
    padding: 10px 40px;
    box-sizing: border-box;
  }

  .wrap_mediainfo .list_intro .item {
    display: inline-block;
    float: left;
    width: 33.3%;
    text-align: center;
    line-height: 1.6em;
  }

  .wrap_mediainfo .list_intro .item:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -2px;
    width: 1px;
    height: 10px;
    margin-top: -5px;
    background-color: #6a6a6a;
  }

  .wrap_mediainfo .list_intro li:last-child:after {
    display: none;
  }

  .wrap_mediainfo .list_btn {
    padding: 10px 0 20px;
    border-top: none;
    text-align: center;
  }

  .wrap_mediainfo .list_btn .item {
    display: inline-block;
    margin: 0 10px;
  }

  .wrap_mediainfo .list_btn .item a {
    padding: 5px 15px;
    border-radius: 5px;
    background-color: #dedede;
  }

  .wrap_mediainfo .list_btn .item a span {
    text-shadow: none;
    color: #4a4a4a;
    font-size: 14px;
    font-weight: 700;
  }

  .wrap_mediainfo .corp-info-wrap {
    overflow: hidden;
    padding: 10px 0;
    text-align: center;
    border-top: 1px solid #616161;
    color: #aaa;
    font-size: 0.875em;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
    letter-spacing: -0.06em;
  }

  .wrap_mediainfo .corp-info-wrap address {
  }

  .wrap_mediainfo .corp-info-wrap address span {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    line-height: 1.6em;
  }

  .wrap_mediainfo .corp-info-wrap address span em:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -2px;
    width: 1px;
    height: 10px;
    margin-top: -5px;
    background-color: #6a6a6a;
  }

  .wrap_mediainfo .corp-info-wrap address .copyright {
    padding: 10px 0 0;
    text-align: center;
  }

  .wrap_mediainfo .corp-info-wrap address .copyright strong {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.025em;
  }

  @media (min-width: 640px) {
    .wrap_mediainfo .list_corpinfo {
      float: left;
      width: 50%;
    }

    .wrap_mediainfo .list_corpinfo:nth-child(3) {
      border-top: 0;
    }

    .wrap_mediainfo .list_snslink .item:first-child {
      padding-left: 40px;
    }

    .wrap_mediainfo .list_snslink .item:last-child {
      padding-right: 50px;
    }

    .wrap_mediainfo .list_contact li.item {
      width: 33.3%;
    }

    .wrap_mediainfo .list_intro,
    .wrap_mediainfo .list_btn,
    .wrap_mediainfo .corp-info-wrap {
      width: 100%;
    }
  }
`;

function Footer() {
  return (
    <FooterLayout id="footer" className="footer" role="contentinfo">
      <div className="wrap_mediainfo">
        <Link
          href="/m"
          className="logo_sportskh"
          title="스포츠경향 메인으로 바로가기"
          prefetch={false}
        >
          <Image src="/m/common/logo_sportskh_gray.svg" alt="스포츠경향" fill />
        </Link>

        <ul className="list_corpinfo list_snslink">
          <li className="item">
            <Link
              className="link_sns"
              href="https://www.facebook.com/sportkh"
              title="스포츠경향 공식 페이스북 바로가기"
              target="_blank"
            >
              <Image
                className="ico_sns_circle"
                src="/m/common/ico_sns_circle_facebook2.svg"
                alt="아이콘"
                fill
              />
            </Link>
          </li>
          <li className="item">
            <Link
              className="link_sns"
              href="https://twitter.com/sportskh"
              title="스포츠경향 공식 트위터 바로가기"
              target="_blank"
            >
              <Image
                className="ico_sns_circle"
                src="/m/common/ico_sns_circle_twitter2.svg"
                alt="아이콘"
                fill
              />
            </Link>
          </li>
          <li className="item">
            <Link
              className="link_sns"
              href="https://story.kakao.com/ch/sportskh"
              title="스포츠경향 공식 카카오스토리 바로가기"
              target="_blank"
            >
              <Image
                className="ico_sns_circle"
                src="/m/common/ico_sns_circle_kakaostory2.svg"
                alt="아이콘"
                fill
              />
            </Link>
          </li>
          <li className="item">
            <Link
              className="link_sns"
              href="https://www.instagram.com/sportskh_sports/"
              title="스포츠경향 공식 인스타그램 바로가기"
              target="_blank"
            >
              <Image
                className="ico_sns_circle"
                src="/m/common/ico_sns_circle_instagram2.svg"
                alt="아이콘"
                fill
              />
            </Link>
          </li>
          <li className="item">
            <Link
              className="link_sns"
              href="https://www.youtube.com/c/스포츠경향sportskhan"
              title="스포츠경향 공식 유튜브 바로가기"
              target="_blank"
            >
              <Image
                className="ico_sns_circle"
                src="/m/common/ico_sns_circle_youtube2.png"
                alt="아이콘"
                fill
              />
            </Link>
          </li>
        </ul>

        <ul className="list_corpinfo list_familysite">
          <li className="item">
            <Link className="link_fs" href="//www.khan.co.kr" target="_blank">
              <span>경향신문</span>
            </Link>
          </li>
          <li className="item">
            <Link
              className="link_fs"
              href="http://weekly.khan.co.kr"
              target="_blank"
            >
              <span>주간경향</span>
            </Link>
          </li>
          <li className="item">
            <Link
              className="link_fs"
              href="http://lady.khan.co.kr"
              target="_blank"
            >
              <span>레이디경향</span>
            </Link>
          </li>
        </ul>

        <ul className="list_corpinfo list_contact">
          <li className="item">
            구독신청{' '}
            <Link className="num" href="tel:080-023-8282">
              080-023-8282
            </Link>
          </li>
          <li className="item">
            독자제보{' '}
            <Link className="num" href="tel:02-3701-1144">
              02-3701-1144~5
            </Link>
          </li>
          <li className="item">
            투고{' '}
            <Link className="num" href="mailto:op@kyunghyang.com">
              op@kyunghyang.com
            </Link>
          </li>
        </ul>

        <ul className="list_corpinfo list_intro">
          <li className="item">
            <Link
              className="link_fs"
              href="//www.khan.co.kr/aboutkh"
              target="_blank"
            >
              <span>회사소개</span>
            </Link>
          </li>
          <li className="item">
            <Link
              className="link_fs"
              href="//recruit.khan.co.kr"
              target="_blank"
            >
              <span>채용안내</span>
            </Link>
          </li>
          <li className="item">
            <Link className="link_fs" href="//jebo.khan.co.kr" target="_blank">
              <span>기사제보</span>
            </Link>
          </li>
        </ul>

        <ul className="list_corpinfo list_btn">
          <li className="item">
            <Link
              className="link_fs"
              href="/"
              // target="_blank"
            >
              <span>PC버전</span>
            </Link>
          </li>
        </ul>

        <div className="corp-info-wrap">
          <address>
            <span>서울시 중구 정동길3 경향신문사</span>
            <br />
            <span>
              고객센터 : <Link href="tel:0237011114">02-3701-1114</Link>
            </span>
            <br />
            <span>
              <em>등록번호 : 서울 아02037</em>
            </span>
            <span>등록일자 : 2012.03.22</span>
            <br />
            <span>
              <em>발행인 : 김석종</em>
            </span>
            <span>편집인 : 이기수</span>
            <br />
            <span>청소년보호책임자 : 임아영</span>
            <br />
            <p className="copyright">
              <strong>ⓒ경향신문, All rights reserved.</strong>
            </p>
          </address>
        </div>
      </div>
    </FooterLayout>
  );
}

export default Footer;
