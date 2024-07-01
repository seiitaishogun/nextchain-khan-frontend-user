import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';
import theme from '@/app/styles/theme';

const GlobalStyle = createGlobalStyle`
	${reset}

	;
	${normalize}

	;

	/**************************************************************************** 
  reset
  ****************************************************************************/
	html {
		font-size: 62.5%;
	}

	body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, textarea, p, blockquote, th, td, input, select, textarea, button, figure {
		margin: 0;
		padding: 0
	}

	fieldset, img {
		border: 0 none
	}

	dl, ul, ol, menu, li {
		list-style: none
	}

	blockquote, q {
		quotes: none
	}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none
	}

	input, select, textarea, button {
		vertical-align: middle
	}

	select, input {
		height: 40px;
		padding-left: 10px;
		border: 1px solid #d2d2d2;
		font-size: 100%;
		color: #1c1c1c;
		box-sizing: border-box;
		text-shadow: 1px 1px 0 #fff
	}

	textarea {
		padding: 10px;
		border: 1px solid #d2d2d2;
		color: #1c1c1c;
		box-sizing: border-box;
		text-shadow: 1px 1px 0 #fff;
		letter-spacing: -0.05em
	}

	input:focus, select:focus, textarea:focus /*,button:focus*/ {
		border: 1px solid #009fe4
	}

	label, button {
		margin: 0;
		padding: 0;
		outline: 0;
		border: 0 none;
		background-color: transparent;
		cursor: pointer
	}

	button {
		overflow: visible
	}

	body {
		background: #fff;
		word-break: break-all
	}

	body, th, td, /*input,*/
	select, textarea /*,button*/ {
		font-size: 16px;
		font-size: 1.6rem;
		font-family: Malgun Gothic, Dotum, Helvetica, AppleGothic, Sans-serif;
		color: #444;
		letter-spacing: -0.07em
	}

	/* color값은 디자인가이드에 맞게사용 */
	/*table {border-spacing:0;border-collapse:collapse;empty-cells:show; }*/
	table {
		width: 100%
	}

	table, tbody, tfoot, thead, tr, th, td {
		border-collapse: collapse;
		border-spacing: 0;
	}

	/*border:none; separate;;table-layout:fixed*/
	/* 6 */
	* html table, tbody, tfoot, thead, tr, th, td {
		border-collapse: collapse;
	}

	/* 7 */
	* + html table, tbody, tfoot, thead, tr, th, td {
		border-collapse: collapse;
	}

	a {
		color: inherit;
		text-decoration: none;
		cursor: pointer
	}

	a:active, a:hover {
		text-decoration: underline
	}

	address, caption, cite, code, dfn, em, var {
		font-style: normal;
		font-weight: normal
	}

	::-webkit-input-placeholder {
		color: #b5b5b5;
	}

	/* WebKit browsers */
	:-moz-placeholder {
		color: #b5b5b5;
		opacity: 1;
	}

	/* Mozilla Firefox 4 to 18 */
	::-moz-placeholder {
		color: #b5b5b5;
		opacity: 1;
	}

	/* Mozilla Firefox 19+ */
	:-ms-input-placeholder {
		color: #b5b5b5;
	}

	/* Internet Explorer 10+ */
	.placeholder {
		background-color: #f3f3f3;
		color: #b5b5b5
	}

	select[disabled], input[disabled] {
		background-color: #fafafa;
		color: #b5b5b5;
		text-shadow: 1px 1px 0 #fff;
	}

	font {
		display: inline !important
	}

	/**************************************************************************** 
  common
  ****************************************************************************/
	/* 스킵네비게이션 */
	#skip {
		z-index: 600;
		position: absolute;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}

	#skip a {
		display: block;
		position: absolute;
		top: -9999px;
	}

	#skip a span {
		display: block;
		padding: 10px 0;
		border: 3px solid #FFB747;
		background: #000;
		color: #fff;
		text-align: center
	}

	#skip a:hover, #skip a:active, #skip a:focus {
		z-index: 600;
		top: 0;
		display: inline-block;
		width: 100%
	}

	/* global */
	.ovh {
		overflow: hidden;
		height: 100%
	}

	.screen_out {
		overflow: hidden;
		position: absolute;
		width: 0;
		height: 0;
		line-height: 0;
		text-indent: -9999px
	}

	/* 대체텍스트가 아닌 접근성을 위한 숨김텍스트를 제공할때 */
	.line_clamp {
		display: block;
		overflow: hidden; /*line-height:1em;*line-height:normal;*/
		text-overflow: ellipsis;
		white-space: nowrap;
		word-wrap: normal
	}

	/* 한줄 텍스트 말줄임 */
	.tbl {
		border-collapse: collapse;
		border-spacing: 0
	}

	/* 테이블 초기화 */
	.show {
		display: block
	}

	.hide {
		display: none
	}

	.col2 {
		box-sizing: border-box
	}

	.col2:after {
		content: '';
		display: block;
		visibility: hidden;
		height: 0;
		font-size: 0;
		clear: both
	}

	.col2 > * {
		float: left;
		width: 50% !important;
		*width: 49.5% !important
	}

	.bg_thumb_overlay {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		background: url(${props =>
      `${props.theme.imageUrl}/pc/common/bg_thumb_overlay.png`}) repeat
	}

	.trans_border {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		border: 1px solid #000;
		cursor: pointer;
		opacity: 0.1;
		-ms-filter: alpha(opacity=10);
		filter: alpha(opacity=10);
		filter: progid:DXImageTransform.Microsoft.Alpha(opacity=10);
	}

	.screen_out {
		overflow: hidden;
		position: absolute;
		width: 0;
		height: 0;
		line-height: 0;
		text-indent: -9999px;
	}

	/* 크기 */
	.w100 {
		width: 100%
	}

	.col_md {
		min-width: 992px
	}

	.col_sm {
		min-width: 768px
	}

	/* 정렬 */
	.f_l {
		float: left
	}

	.f_r {
		float: right
	}

	.cl_b {
		clear: both;
		width: 0;
		height: 0;
		font-size: 0;
		line-height: 0
	}

	.clear_g {
		display: block;
		overflow: visible;
		width: auto;
		clear: both;
		*zoom: 1
	}

	.clear_g:after {
		content: '';
		display: block;
		visibility: hidden;
		height: 0;
		font-size: 0;
		clear: both
	}

	/* responsive */
	.img_responsive {
		width: 100%;
		height: 100%
	}

	body {
		//font-size: 16px;
		font-size: 1.6rem;
		font-family: ${theme.fontFamilies.notoSans};
		color: ${props => props.theme.colors.black444};
		-webkit-text-size-adjust: none;
		position: relative;
		letter-spacing: -0.07em;
	}

	.is-stuckToBottom {
		position: fixed;
		bottom: 20px; // A sensible offset from the edge of the viewport
	}

	#layout {
		width: 100%;
		min-width: ${props => props.theme.desktopDeviceWidth};
	}

	img {
		display: block;
		max-width: 100%;
		vertical-align: top;
	}

	a {
		color: inherit;
		text-decoration: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		cursor: pointer;
	}

	span {
		word-break: keep-all;
	}

	em {
		font-style: italic;
	}

	table tr td,
	table tr th {
		vertical-align: middle;
	}

	button {
		padding: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	fieldset {
		padding: 0;
	}

	.react-datepicker-popper {
		z-index: 99 !important;
	}
`;

export default GlobalStyle;
