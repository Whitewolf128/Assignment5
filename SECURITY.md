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
            "upgradeInsecureRequests": isDevelopment ? null: [],
        },** - defaultSrc: self only allows the browser to load scripts, images and styles within the same origin to avoid XSS attacks and code injection, scriptSrc: ["'self'", "example.com"], allows the execution of scripts from the same origin and the specified origin to reduce the risk of XSS attacks, objectSrc: ["'none'"], it gives no access to any plugins or objects meaning nothing could be loaded prevent XSS attacks by making injected code not execute, and then upgradeInsecureRequests upgrades http to https so doing the is development ? null will disable it.

### Sources

1. Helmet.js Official Documentation - https://helmetjs.github.io/

2. for what objectSrc and scriptSrc does -https://content-security-policy.com/none/

3. for what default src does -
https://mycleverai.com/it-questions/why-does-content-security-policy-default-src-self-break-my-site-and-how-can-i-fix-it 

4. to explain what upgradeInsecureRequests does -
https://helmetjs.github.io/

5. OWASP Secure Headers Project - https://owasp.org/www-project-secure-headers/

## cors configuration:
### Configuration Applied

\`\`\`export const getCorsOptions = () => {
    const isDevelopment = process.env.NODE_ENV === "development";

    if (isDevelopment) {
        // Allow all origins in development for easy testing
        return {
            origin: true,
            credentials: true,
        };
    }

    // Strict origins in production
    return {
        origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    };
};\`\`\`

### Justification
1. the first part allows the security to be more lax for testing purposes and the second one allows it to be more strict
### Sources