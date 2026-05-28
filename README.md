# Emmanuel Joseph Portfolio

Professional portfolio built with Next.js and Tailwind CSS.

## Features

- Clean SaaS-style landing page
- Dark / light mode
- Responsive design for mobile and desktop
- Hero, About, Skills, Services, Projects, Experience, Certificates, Blog, Contact
- Contact form saves messages to `data/messages.json`
- Download CV button and social media links

## Installation

1. Open the project folder:

   ```bash
   cd "portfolio-next"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000`

## Local content files

- `data/site.json` — portfolio content for home, about, skills, services, projects, experience, certificates, blog posts
- `data/messages.json` — contact submissions stored by backend API

## Deployment

### cPanel

1. Build the app locally:

   ```bash
   npm install
   npm run build
   ```

2. Export as a static site:

   ```bash
   npm run export
   ```

3. Upload the `out` folder content to your cPanel `public_html` directory.
4. Add a `.htaccess` entry if needed to route all pages to `index.html`.
5. If you need server API routes, deploy to a VPS or hosting provider that supports Node.

### VPS (Node)

1. Upload the project to your server.
2. Install Node.js and npm.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Build and start:

   ```bash
   npm run build
   npm run start
   ```

6. Use a reverse proxy like Nginx to forward traffic to `http://localhost:3000`.

## Notes

- Replace the placeholder CV file in `public/cv/Emmanuel-Joseph-CV.pdf` with your real resume.
- Replace the content in `data/site.json` to customize the portfolio copy, services, projects, and blog posts.
- If you want the contact form to work in production, run the app on Node or adapt the form to your email provider.
