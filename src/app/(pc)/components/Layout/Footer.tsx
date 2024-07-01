'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const FooterLayout = styled.footer`
  position: relative;
  border-top: 1px solid #b9bbbe;

  .inner_footer {
    width: ${props => props.theme.desktopDeviceWidth};
    margin: 0 auto;
    padding: 25px 0 20px;
  }

  .inner_footer:after {
    clear: both;
    content: '';
    display: block;
  }

  .inner_footer a {
    color: #888;
    font-size: 12px;
    line-height: 15px;
  }

  .inner_footer h2 {
    float: left;
    margin: 2px 70px 0 70px;
  }

  .inner_footer .cnt {
    float: left;
    width: 755px;
    letter-spacing: -0.07em;
  }

  .inner_footer .cnt .blind {
    display: block;
    position: absolute;
    left: 0;
    top: -999999px;
    overflow: hidden;
  }

  .inner_footer .cnt dd.first {
    margin-bottom: 2px;
  }

  .inner_footer .link span {
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/blit_bar.gif`})
      no-repeat scroll 8px 5px transparent;
    display: inline-block;
    padding-left: 15px;
    zoom: 1;
    *display: inline;
  }

  .inner_footer .link span.first {
    background: none repeat scroll 0 0 transparent;
    padding-left: 0;
  }

  .inner_footer .adr {
    margin-top: 4px;
    color: #888;
    font-size: 12px;
  }

  .inner_footer .adr span {
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/blit_bar.gif`})
      no-repeat scroll 2px 5px transparent;
    display: inline-block;
    padding-left: 10px;
    zoom: 1;
    *display: inline;
  }

  .inner_footer .adr span.first {
    background: none repeat scroll 0 0 transparent;
    padding-left: 0;
  }

  .inner_footer address {
    color: #aaa;
    float: left;
    font-family: Verdana, Sans-serif;
    font-weight: bold;
    font-size: 11px;
    margin-top: 6px;
  }

  .inner_footer address strong {
    color: #2544a6;
    letter-spacing: 0;
  }

  .inner_footer .khRss {
    float: left;
    margin-left: 5px;
    margin-top: 2px;
  }

  .inner_footer .khRss a {
    background: url(${props =>
        `${props.theme.imageUrl}/pc/common/rss_icon.webp`})
      no-repeat center center transparent;
    display: block;
    width: 14px;
    height: 17px;
    overflow: hidden;
    text-indent: -99999px;
  }
`;

function Footer() {
  return (
    <FooterLayout id="footer" className="footer" role="contentinfo">
      <div className="inner_footer">
        <h2>
          <a title="경향닷컴 홈으로 이동" target="_top" href="//www.khan.co.kr">
            <Image
              alt="경향신문"
              src={`${process.env.APP_IMAGE_URL}/pc/common/logo_footer.png`}
              width={58}
              height={59}
            />
          </a>
        </h2>
        <div className="cnt">
          <dl className="link">
            <dt className="blind">경향 정책, 약관, 단축메뉴</dt>
            <dd className="first">
              <span className="first">
                <a
                  href="//www.khan.co.kr/aboutkh"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  회사소개
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/aboutkh/service_01.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  경향미디어 소개
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/aboutkh/business_01.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  경향사업
                </a>
              </span>
              <span>
                <a
                  href="//jebo.khan.co.kr/"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  기사제보
                </a>
              </span>
              <span>
                <a
                  href="//recruit.khan.co.kr"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  인재채용
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/help/sitemap.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  사이트맵
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/opinion/notice/article/200509211710302"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  고충처리
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/help/help_main.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  HELP
                </a>
              </span>
            </dd>
            <dd>
              <span className="first">
                <a
                  href="//www.khan.co.kr/help/help_agreement.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  회원약관·정책
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/help/help_privately.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  <strong>개인정보처리방침</strong>
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/help/help_privately2.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  청소년 보호정책 (책임자 : 임아영)
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/help/help_digital.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  저작권·콘텐츠 사용
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/aboutkh/online_adv_01.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  온라인 광고안내
                </a>
              </span>
              <span>
                <a
                  href="//www.khan.co.kr/company/sub04_1.html"
                  target="_blank"
                  title="새창으로 열립니다"
                  rel="noreferrer"
                >
                  사업제휴 문의
                </a>
              </span>
            </dd>
          </dl>
          <p className="adr">
            <span className="first">서울시 중구 정동길 3 경향신문사</span>
            <span>인터넷신문등록번호: 서울 아 02037</span>
            <span>등록일자: 2012.03.22</span>
            <span>발행인 : 김석종</span>
            <span>편집인 : 이기수</span>
            <span className="tel">Tel. 02-3701-1114 </span>
          </p>
          <address>
            <p>ⓒ경향신문, All rights reserved.</p>
          </address>
          <p className="khRss">
            <a
              title="경향RSS"
              target="_blank"
              href="//www.khan.co.kr/help/help_rss.html"
              rel="noreferrer"
            >
              경향RSS
            </a>
          </p>
        </div>
      </div>
    </FooterLayout>
  );
}

export default Footer;
