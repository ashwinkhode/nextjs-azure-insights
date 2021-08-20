import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
	AppInsightsContext,
	AppInsightsErrorBoundary,
} from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "../utils/AppInsights";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppInsightsErrorBoundary
			onError={() => (
				<h1>I believe something went wrong. Please Refresh the page!</h1>
			)}
			appInsights={reactPlugin}
		>
			<AppInsightsContext.Provider value={reactPlugin}>
				<Component {...pageProps} />
			</AppInsightsContext.Provider>
		</AppInsightsErrorBoundary>
	);
}
export default MyApp;
