import helmet from "helmet";
import app from "../src/app";
// Adding custom security headers beyond Helmet defaults
app.use(helmet());

// Disable the Content-Security-Policy and X-Download-Options headers
app.use(
  helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
  }),
);

// Sets "Content-Security-Policy: default-src 'self';
// script-src 'self' example.com;object-src 'none';
// upgrade-insecure-requests"
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "example.com"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
  }),
);

app.use(
  helmet({
    xDownloadOptions: false,
    xFrameOptions: false,
  }),
);