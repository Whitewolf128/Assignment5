## Helmet.js Configuration

### Configuration Applied

\`\`\`typescript helmet({
    contentSecurityPolicy: {
        useDefaults: false,
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "example.com"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
        },
    },
    xDownloadOptions: false,
    xFrameOptions: false,
}), \`\`\`

### Justification

1. **contentSecurityPolicy: {useDefaults: false}** - Disabled because this API returns only
   JSON data and does not serve HTML content. CSP is designed to prevent XSS in
   browsers rendering HTML.

2. ** directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "example.com"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
        },** - defaultSrc: self only allows the browser to load scripts, images and styles within the same origin to avoid XSS attacks and code injection, scriptSrc: ["'self'", "example.com"], allows the execution of scripts from the same origin and the specified origin to reduce the risk of XSS attacks, objectSrc: ["'none'"], it gives no access to any plugins or objects meaning nothing could be loaded prevent XSS attacks by making injected code not execute.

### Sources

1. Helmet.js Official Documentation - https://helmetjs.github.io/
for what objectSrc does -https://content-security-policy.com/none/
2. OWASP Secure Headers Project - https://owasp.org/www-project-secure-headers/