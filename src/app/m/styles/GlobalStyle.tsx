import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';
import theme from '@/app/styles/theme';

const GlobalStyle = createGlobalStyle`
	${reset}

	;
	${normalize}

	;

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
		min-width: ${props => props.theme.minDeviceWidth};
		background: #fff;
		word-break: break-all
	}

	body, th, td, /*input,*/
	select, textarea /*,button*/ { /* font-size:16px;font-size:1.6rem;font-family:Malgun Gothic, Dotum, Helvetica, AppleGothic, Sans-serif;color:#444;letter-spacing:-0.07em */
	}

	/* color값은 디자인가이드에 맞게사용 */
	body, th, td, /*input,*/
	select, textarea /*,button*/ {
		font-size: 16px;
		font-size: 1.6rem;
		font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
		color: #444;
		letter-spacing: -0.07em
	}

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
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		cursor: pointer
	}

	a:active, a:hover a:checked {
		text-decoration: none
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

	input {
		-webkit-appearance: none;
		-webkit-border-radius: 0;
	}

	/* IOS input 내부 그림자 제*/

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

	#main {
		overflow: auto;
	}

	#layout {
		width: 100%;
		max-width: 100%;
		min-width: ${props => props.theme.minDeviceWidth};
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
