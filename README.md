1. Project Overview

 * What does this API do?
 ** What problem does it solve?
 *** Who is it for?
 **** Keep it concise but informative *****(2-3 paragraphs max)
 This api gets records, posts new records, updates current records by ids, and deletes records by ids.
 
 It solves the security issue with apis by prevent injection attacks, it is for the users and developers who have important information.

2.Installation Instructions

 * Prerequisites (Node.js version, etc.)


 ** Step-by-step installation commands
    npm init -y
    npm install typescript ts-node @types/node --save-dev
    npm install express
    npm install @types/express --save-dev
    npm install jest ts-jest @types/jest supertest @types/supertest --save-dev
    npm install morgan @types/morgan
    npm install firebase-admin
    npm install joi
    npm install @types/joi --save-dev
    npm install swagger-ui-express swagger-jsdoc
    npm install -D @redocly/cli
    npm install dotenv
    npm install helmet
    npm install cors

    if fs is having issues
    npm install --save-dev @types/node
    then put "types": ["node"], in the tsconfig

    npm run generate-docs
 *** Environment variable setup (reference your .env.example)
 npm install dotenv

    NODE_ENV=development
    PORT=3000
    FIREBASE_PROJECT_ID=bed-demo-g3a74
    FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSOME_KEY\n-----END PRIVATE KEY-----\n"
    FIREBASE_CLIENT_EMAIL=firebase-adminsdk-k9r4p@cloud-project-b7c31.iam.gserviceaccount.com
    SWAGGER_SERVER_URL=http://localhost:3000/api/v1
    in the .env file

    import dotenv from "dotenv"; and dotenv.config(); in the app.ts file
 **** How to start the server
 npm start
 ***** A developer should be able to follow these steps exactly and have your API running

3. API Request Examples

    *Include at least 3 different endpoint examples
    eventRouter.get("/events", getAllEventsController); //get
    eventRouter.post("/events", validateRequest(postSchemas.create), createEventsController); //post
    eventRouter.put("/events/:id", updateEventController); //put
    eventRouter.delete("/events/:id", deleteEventController); //delete
    **Show the full request (method, URL, headers, body)

    ***Show the expected response
    {
    "message": "Event created",
    "data": {
        "id": "Os2KPQUnQyLI8TkjCrpV",
        "name": "Fluffy show",
        "date": "2026-04-04T00:00:00.000Z",
        "capacity": 10,
        "registrationCount": 50,
        "status": "active",
        "category": "confrence",
        "createdAt": "2026-04-03T05:42:47.687Z",
        "updatedAt": "2026-04-03T05:42:47.687Z"
    }
    }
    ****Use Postman's code snippet feature: Select the </> button in Postman to generate code snippets in your preferred format (cURL, JavaScript fetch, etc.)
    postman request POST 'http://localhost:3000/api/v1/events/' \
  --header 'Content-Type: application/json' \
  --body '{
    "name":"Fluffy show",
    "date":"2026-04-03",
    "capacity":10,
    "registrationCount":50,
    "status":"active",
    "category":"conference",
    "content":"Tech Conference 2025 event details"}'

4. Link to Public Documentation

    * Include the GitHub Pages URL where your OpenAPI documentation is hosted:
    "(https://whitewolf128.github.io/Assignment5/)"