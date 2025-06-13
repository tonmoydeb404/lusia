import { TCMSPage } from "@/types/cms/db/page";

export const homePage: TCMSPage = {
  slug: "_home",
  title: "Hello, I'm Tonmoy Deb",
  description: `I design and build digital products with purpose — from AI tools to video tech and productivity systems. My focus is always on solving real problems, not chasing shiny tech.`,
};

export const productsPage: TCMSPage = {
  slug: "_products",
  title: "Products",
  description: `A collection of digital products I've crafted — from AI-powered tools to real-time video apps. Each one is built with purpose, solving real-world problems through thoughtful design and engineering.`,
};

export const aboutPage: TCMSPage = {
  slug: "about",
  title: "About Me",
  description: `I'm Tonmoy Deb — a self-taught developer from Bangladesh who loves building purposeful web experiences. I focus on solving real problems through clean, usable, and thoughtful digital products.`,
  content: {
    html: `
    <p>
      Hey, I’m Tonmoy Deb — a self-taught web developer from Bangladesh, passionate about building clean, functional, and user-focused applications. I started with frontend development, crafting responsive interfaces using JavaScript, React, and Next.js, and later dove deeper into backend technologies like Node.js, Express, and NestJS.
    </p>

    <p>
      I enjoy solving real problems more than chasing trends. Over time, my interests expanded to include database systems like MongoDB and PostgreSQL, working with TypeScript, and experimenting with tools like Dexie.js and FFmpeg to push my limits.
    </p>

    <p>
      Right now, I’m building projects that blend AI, video technology, and productivity — tools that actually help people get things done. Whether it's creating a virtual camera, a blog-to-podcast system, or a database schema designer, I approach each project with curiosity and focus.
    </p>

    <p>
      My toolbox includes VS Code, Linux Mint, GitHub, and a bunch of open-source tools that help me stay productive. I'm constantly learning, iterating, and refining both my craft and mindset.
    </p>

    <p>
      Outside of code, I enjoy reading, exploring new ideas, and occasionally getting lost in design. I believe in learning by building, and I’m always open to collaboration or a good tech conversation.
    </p>

    <h3>Let’s Connect</h3>
    <ul>
      <li><strong>GitHub:</strong> <a href="https://github.com/tonmoydeb404" target="_blank">@tonmoydeb404</a></li>
      <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/tonmoydeb" target="_blank">@tonmoydeb</a></li>
      <li><strong>Facebook:</strong> <a href="https://facebook.com/tonmoydeb" target="_blank">@tonmoydeb</a></li>
      <li><strong>Portfolio:</strong> <a href="https://tonmoydeb.com" target="_blank">tonmoydeb.com</a></li>
    </ul>

    <h3>Contact</h3>
    <ul>
      <li><strong>Email:</strong> <a href="mailto:mail@tonmoydeb.com">mail@tonmoydeb.com</a></li>
      <li><strong>Alternate:</strong> <a href="mailto:tonmoydeb404@gmail.com">tonmoydeb404@gmail.com</a></li>
      <li><strong>Phone / WhatsApp:</strong> +8801571362609</li>
    </ul>

    <p>
      If you have an idea, a challenge, or just want to chat — feel free to reach out. Let's build something meaningful together.
    </p>
    `,
  },
};
