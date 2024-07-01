import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  size?: 'large' | 'medium';
  text: string;
  className?: string;
  linkProps: {
    href: string;
    target?: string;
  };
  image: string;
}

const Layout = styled.div<{ $size: 'large' | 'medium' }>`
  .link_thumb {
    display: block;
    overflow: hidden;
    position: relative;
    line-height: 0;
  }

  .link_thumb:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  .thumb {
    width: 100%;
    height: auto;
  }

  .bg_caption {
    position: relative !important;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .caption {
    display: flex;
    align-items: flex-end;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 20;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4)
    );
  }

  .caption .tit {
    display: block;
    overflow: hidden;
    margin: 0 15px 15px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    letter-spacing: -0.05em;
    line-height: 1.4em;
    text-shadow: 1px 1px 0 #000;
    word-break: break-all;
  }

  .ico_tag_video {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 110;
    width: 14vw;
    height: 14vw;
    margin: -7vw 0 0 -7vw;
  }

  .byline {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    margin-top: 60px;
    /* padding:15vw 30px 0; */
    padding: 9vw 30px 0;
    font-size: 14px;
    color: #bfbfbf;
    letter-spacing: 0;
    box-sizing: border-box;
  }

  .byline .name {
    display: block;
  }

  .byline .time {
    display: block;
    padding-top: 5px;
  }

  @media (max-width: 320px) {
    .caption .tit {
      margin: 0 12px 12px;
    }
  }

  @media (min-width: 640px) {
    background-color: #1c1c1c;

    .link_thumb {
      line-height: inherit;
    }

    .link_thumb:after {
      content: '';
      display: block;
      visibility: hidden;
      clear: both;
      height: 0;
      font-size: 0;
    }

    .thumb {
      float: left;
      width: 60%;
    }

    .bg_caption {
      display: none;
    }

    .caption {
      left: inherit;
      bottom: inherit;
      top: 0;
      right: 0;
      width: 40%;
      /* padding:15vw 30px 0; */
      padding: 9vw 30px 0;
      box-sizing: border-box;
    }

    .mov_serial .caption {
      padding: 15vw 30px 0;
    }

    .caption .tit {
      display: -webkit-box !important;
      margin: 0;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: inherit;
    }

    .ico_tag_video {
      left: 32%;
    }

    .byline {
      display: block;
    }

    ${props =>
      props.$size &&
      css`
        .link_thumb {
          line-height: 0;
        }

        .thumb {
          float: none;
          width: 100%;
        }

        .bg_caption {
          display: block;
        }

        .caption {
          top: inherit;
          right: inherit;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 0;
        }

        .caption .tit {
          margin: 0 15px 15px;
          font-size: 3vw;
          /*-webkit-line-clamp:1*/
        }
      `}
  }
`;

function Banner({ size, text, className, linkProps, image }: Props) {
  return (
    <Layout className={className} $size={size || 'medium'}>
      <Link className="link_thumb" {...linkProps}>
        <Image className="bg_caption" src={image} alt="" fill />
        <p className="caption">
          <strong className="tit line_clamp">{text}</strong>
        </p>
      </Link>
    </Layout>
  );
}

export default Banner;
