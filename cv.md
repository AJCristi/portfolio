<!--
This file is the website's content. index.html reads it at runtime.
Rules the site depends on:
- Keep the section titles: Contact, Professional Summary, Selected Experience, Education, Projects.
- The line under "# Name" is the headline.
- "## " starts a section, "### " starts an entry inside it.
- The first line under an entry heading is its meta line, parts separated by " · ".
  Experience/Education: last part is the date range.
- Projects: "**Tech Stack:**" line lists tech, comma-separated.
- Contact: one "- Label: [text](url)" item per line.
-->

# Alex Cristi

Software Engineer · Customer Portals, Internal Tools & Web Apps

## Contact

- Email: [ajcristi96@gmail.com](mailto:ajcristi96@gmail.com)
- GitHub: [github.com/AJCristi](https://github.com/AJCristi)
- LinkedIn: [linkedin.com/in/alex-cristi-0bb9bb1a2](https://www.linkedin.com/in/alex-cristi-0bb9bb1a2/)

## Professional Summary

I build customer portals, staff dashboards, and web apps for everyday business operations. I can take a project from the interface through to the API and database, or improve an existing app that’s become slow or hard to maintain.

## Selected Experience

### Frontend Software Engineer (Part-Lead)

Samsung Research & Development Philippines · Taguig, Metro Manila · January 2022 – November 2025

- Led frontend development of an internal machine learning platform used by multiple Samsung divisions to train LLMs
- Migrated a large legacy JavaScript app to TypeScript and modern React, working with teams in Korea, Canada, the UK and Poland, with strict typing across every module
- Cut initial load time by 40% on a legacy project with code splitting, lazy loading and caching, and took it to feature-complete
- Served as the main point of contact between the overseas teams, QA, DevOps and UI/UX designers for releases, test coverage and design implementation
- Contributed to shared component libraries, internal documentation and business tools used across the department
- Interviewed frontend candidates on JavaScript, TypeScript and React, and onboarded and mentored new hires, including writing their training materials
- Built several proof-of-concept features, some of which were approved for the product roadmap

### Full Stack Software Engineer

MobileGroup Inc. · Makati, Metro Manila · January 2020 – December 2021

- Built and launched the Rampver Digital Investment Platform (client portal, admin CMS and agent dashboard) with React and Firebase, reaching 3,000+ active users in its first year
- Rebuilt it from web-only into one Next.js and React Native codebase for iOS, Android and web, which cut development time for new features by 60%
- Designed the Firestore schema on GCP for read-heavy, real-time use across all three modules while keeping financial transaction data consistent
- Built the REST API on Cloud Functions for authentication, transaction processing and real-time notifications, running at 99.9% uptime
- Built a ticket scanning app for Vistamalls Cinema staff (React, Material UI, Node.js) that halved queue times and doubled as a backup during hardware failures
- Maintained a C# .NET POS-CMS for retail clients, adding payment integrations, inventory features and sales reports

### Software Developer Intern

Intercommerce Inc. · March – October 2018

- Created working mockups of website designs using JavaScript, HTML, and CSS
- Assisted in building an Android application in Java with a MySQL database

## Education

### BS Information Technology

De La Salle – College of Saint Benilde · Specialization in Game Design and Development · 2019

Studied C# and JavaScript. Capstone and thesis projects were both games.

## Skills

- **Languages:** JavaScript, TypeScript, SQL, C#
- **Frameworks & Libraries:** React.js, React Native, Next.js, Redux, Node.js, Express.js, Material UI
- **Backend & Cloud:** Firebase, Google Cloud Platform (GCP), Firebase Cloud Functions, Firestore, Docker
- **Databases:** MariaDB, MySQL, NoSQL (Firestore)
- **Methodologies:** Agile, Scrum, Kanban

## Projects

### Rampver Digital Investment Platform

[app.rampver.com](https://app.rampver.com)

**Tech Stack:** JavaScript, React.js, Next.js, Node.js, Firebase, GCP

The platform reached **3,000+ active users** in its first year. It gives investors a portal to track their portfolios and request transactions, with separate tools for back-office staff and financial advisors.

**My part:**

- Frontend architecture in React.js with Redux
- Real-time portfolio tracking with live market data
- Document upload and KYC verification flows
- Mobile-first responsive design

### Ticket Scanner for Vistamalls Cinema

Progressive Web App · cinema staff

**Tech Stack:** JavaScript, React.js, Material UI, Node.js, Express.js, MySQL

The app **cut queue times in half**. Cinema staff use it to scan digital or printed tickets, verify bookings, and monitor theater occupancy. It works offline and syncs when the connection comes back.

**My part:**

- QR scanning through the device camera, with manual entry as a fallback
- Offline-first storage with background sync
- Admin dashboard for occupancy and analytics
- Took average ticket validation from 15 seconds to under 3

### Samsung Machine Learning Platform

Internal tool

**Tech Stack:** TypeScript, React.js, Node.js, MariaDB, Docker

Internal platform for training and fine-tuning LLMs. Data scientists and ML engineers upload datasets, configure model parameters, watch training progress live and deploy models for inference. Used by multiple Samsung divisions and R&D teams.

**My part:**

- Frontend dashboard for real-time training metrics
- Drag-and-drop dataset upload with progress tracking and validation
- Sharing of models and training configurations between teams
