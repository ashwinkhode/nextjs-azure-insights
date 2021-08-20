import {
	ApplicationInsights,
	DistributedTracingModes,
} from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { createBrowserHistory } from "history";

const reactPlugin = new ReactPlugin();
if (typeof window !== "undefined") {
	const browserHistory = createBrowserHistory();
	const appInsights = new ApplicationInsights({
		config: {
			instrumentationKey: process.env.NEXT_PUBLIC_IKEY,
			extensions: [reactPlugin],
			extensionConfig: {
				[reactPlugin.identifier]: { history: browserHistory },
			},
			autoTrackPageVisitTime: true,
			enableCorsCorrelation: true,
			enableRequestHeaderTracking: true,
			enableResponseHeaderTracking: true,
			distributedTracingMode: DistributedTracingModes.W3C,
			enableDebug: true,
			enableDebugExceptions: true,
		},
	});
	appInsights.loadAppInsights(); // To initiate session for the user
	appInsights.trackPageView(); // To track every page views
}

export { reactPlugin };
