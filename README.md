# mia-borgia-devfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## What is this?

A little digital portfolio for a digital creator, engineer, problem solver, and squirrel-lover!


## Quick Setup

1. Ensure you have [Node.js](https://nodejs.org/) installed. Check your installation by running:

    ```bash
    node -v
    ```

2. In the project directory, install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

5. Customize the template by navigating to the `/src/components` directory. Modify texts, pictures, and other information as needed.

The page will reload if you make edits, and you will see any lint errors in the console.

If you are interested in creating a mockup image like the ones from the personal projects section, I recommend [Genmoo](https://gemoo.com/tools/browser-mockup-generator/). This website lets you generate sleek looking browser mockups for free.

## Deployment

You can choose your preferred service (e.g., [Netlify](https://www.netlify.com/), [Render](https://render.com/), [Heroku](https://www.heroku.com/)) for deployment. One of the easiest ways to host this portfolio is using GitHub Pages. Follow the instructions below for a production deploy.

1. **Set Up GitHub Repository**

    Create a new repository on GitHub for your portfolio app.

2. **Configure `package.json`**

    Edit the following properties in your `package.json` file:

    ```json
    {
        "homepage": "https://yourusername.github.io/your-repo-name",
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            ...
        }
    }
    ```

    Replace `yourusername` with your GitHub username and `your-repo-name` with the name of your GitHub repository.

3. **Deploy to GitHub Pages**

    Run the following command to deploy your app:

    ```bash
    npm run deploy
    ```

4. **Access Your Deployed App**

    After successfully deploying, you can access your app at `https://yourusername.github.io/your-repo-name`.






# Mia Borgia Devfolio

A simple React + TypeScript + Vite portfolio site





#### NOTES

Technical lead on multiple end-to-end features on enterprise LMS software; deconstructed product requirements, crafted technical designs, coordinated and executed development plans with small teams of devs through feature inception to post-MVP releases; built robust cloud-based (AWS) ETL pipelines to securely aggregate report data to surface into the client application; developed on multiple full-stack Agile teams within PostgreSQL, Arango GraphDB, NoSQL, GraphQL, REST, Typescript, C# .NET, Angular, and React tech stacks





Collaborated cross-departmentally on multiple internal content workflow automation & internal tooling projects; Lead a small Research & Innovation team project to extract & analyze data from a legacy platform; Developed multiple production-ready, client-facing features within both Angular front-end frameworks in Typescript; Swiftly identified and implemented bugfixes and hotfixes, assisted in building CI/CD deployment pipelines



EXAMPLE OF IMPACTFUL PROJECT: "What is the most meaningful impact you’ve had as an engineer? Briefly describe the problem, your role, and the outcome. "

I served as the end-to-end technical lead on a small team of senior, mid-level, and junior engineers through the design, planning, development, and release of a major new standards-based reporting feature in an enterprise LMS. This project involved architecting an innovative, serverless, and performant data aggregation pipeline within AWS, integrating the AWS SDK into our legacy C# .NET API to query the curated report data, and surface this data to the client front-end in multiple dynamic views and exportable formats. This project was our organization’s first time implementing cloud-native AWS tooling into our client-facing production software. The work my team accomplished on this project laid the groundwork for all new data-driven features, automated data transformations, and large-scale serverless AWS integrations that came after it. I collaborated closely with our product owner, senior engineers, UI/UX designer, and overseas vendors to translate complex product requirements into a thoughtful end-to-end solution, defined by detailed technical designs.



"Describe a technically complex problem you worked on and how you approached it. Focus on what made it hard and the tradeoffs you had to make. 3–5 sentences is plenty."

-> I investigated a critical bug in our LMS where only certain districts had dozens of duplicate class records created in our system, causing data integrity issues for affected users. The core challenge was that the suspected root cause lived in an area of the codebase written & owned by our vendor development partners, which no one on my team was deeply familiar with - so I had to ramp up quickly, and navigate an unfamiliar area of the system under pressure. Within a day, I traced the bug to a OneRoster syncing script that was creating a new class record for each 'term' associated with a class in a certain third-party rostering system we integrated with. The real tradeoff came in the remediation: the straightforward fix was to correct the sync logic and let it delete the duplicates, but that would have wiped out all student activity or class assignments tied to those duplicate records. To prevent deletion of user data, I collaborated closely with our overseas vendors, our DBA, and customer support to design, test, and safely execute a migration that reassociated all affected activity to the canonical class records before deploying the hotfix that removed the duplicates.
