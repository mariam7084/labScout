import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // replace with your ID

export default function Analytics() {
    const location = useLocation();

    useEffect(() => {
        // Load GA script only once
        if (!window.dataLayer) {
            const script = document.createElement("script");
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            window.gtag = gtag;
            gtag("js", new Date());

            // Enable anonymized IPs
            gtag("config", GA_MEASUREMENT_ID, {
                anonymize_ip: true,
            });
        }
    }, []);

    // Track page views on route change
    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", GA_MEASUREMENT_ID, {
                page_path: location.pathname,
                anonymize_ip: true,
            });
        }
    }, [location]);

    return null;
}
