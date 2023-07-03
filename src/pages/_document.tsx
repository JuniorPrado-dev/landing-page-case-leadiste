// pages/_document.tsx file
import Document, { DocumentContext, Head, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />), //gets the styles from all the components inside <App>
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						<Html lang='pt-br'>
							{/* <Head/> */}
							{/* <body> */}
							{initialProps.styles}
							{/*👇 insert the collected styles to the html document*/}
							{sheet.getStyleElement()}
							{/* </body> */}
						</Html>
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
