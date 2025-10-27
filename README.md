<p align="center">
  <img src="public/logo.png" alt="AndresGilli Logo" width="80" height="80" style="border-radius: 50%;" />
</p>

# AndresGilli Landing Page

A modern landing page template built with Next.js, Tailwind CSS, and next-intl for internationalization.

## Features

- 🌐 Multi-language support
- 🎨 Modern UI with Tailwind CSS and Shadcn UI
- ⚡ Built with Next.js 14 App Router
- 📱 Fully responsive design
- 🔍 SEO optimized
- 🛠 TypeScript support

## Performance

PageSpeed Insights performance metrics:

**Desktop Performance:**
![Desktop Performance](docs/1.png)

**Mobile Performance:**
![Mobile Performance](docs/2.png)

These scores demonstrate the template's excellent performance optimization across both desktop and mobile devices.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/aagilli20/landing-page

# Navigate to the project
cd landing-page

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

# Using Docker to start

```bash
# .env config file
cp .env.example .env

# docker-compose up project
docker-compose up -d

# Access address
# http://localhost:3000
```

## Project Structure

```shell
andres-gilli/
├── src/
│   ├── app/              # Next.js app routes
│   │   ├── [locale]/    # i18n routes
│   │   └── layout.tsx   # Root layout
│   ├── components/      # React components
│   │   ├── ui/         # UI components
│   │   └── sections/   # Page sections
│   ├── styles/         # Global styles
│   └── lib/            # Utilities
├── public/             # Static assets
├── messages/          # i18n messages
└── tailwind.config.ts # Tailwind config
```

## Core Components

- `Hero` - Responsive hero section
- `Feature` - Feature grid showcase
- `Testimonial` - Customer testimonials
- `Pricing` - Pricing plans
- `FAQ` - Collapsible FAQ section
- `CTA` - Call-to-action components
- `Footer` - Navigation and social links

## Internationalization

Currently supports 3 languages including:

- English
- Spanish (Español)
- Portuguese (Português)

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [next-intl](https://next-intl-docs.vercel.app/)

## License

MIT License © 2025-PRESENT AndresGilli

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

- Issues: [GitHub Issues](https://github.com/aagilli20/landing-page/issues)
- Email: <aagilli20@gmail.com>

## Support

If you find this project helpful, please give it a star ⭐️