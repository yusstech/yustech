# YussTech - Modern Web Development Agency

A modern, responsive web application built with React, TypeScript, and Tailwind CSS, showcasing professional web development services.

## 🚀 Features

- **Modern UI/UX**: Built with React and Tailwind CSS for a beautiful, responsive design
- **Type-Safe**: Written in TypeScript for better development experience and code reliability
- **Component Library**: Utilizes shadcn/ui for consistent, accessible components
- **Animations**: Custom animations and transitions for engaging user experience
- **SEO Optimized**: Built with best practices for search engine optimization
- **Performance Focused**: Optimized build process and lazy loading for fast load times

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Routing**: React Router
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Deployment**: Hostinger

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yusstech/yustech.git
   cd yustech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🌐 Environment Setup

Make sure you have the following installed:
- Node.js (v18 or higher)
- npm (v8 or higher)

## 📁 Project Structure

```
yustech/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/        # shadcn/ui components
│   │   └── sections/  # Page sections
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   └── App.tsx        # Main application component
├── public/            # Static assets
└── dist/             # Production build output
```

## 🔧 Configuration

- **TypeScript**: `tsconfig.json` and `tsconfig.app.json`
- **Vite**: `vite.config.ts`
- **Tailwind**: `tailwind.config.ts`
- **Dependencies**: `package.json`

## 🚀 Deployment

The project is configured for automatic deployment to Hostinger:

1. Push changes to the main branch
2. GitHub Actions workflow builds the project
3. Hostinger webhook triggers deployment
4. Changes are live within minutes

## 🧪 Development

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement responsive design using Tailwind classes
- Follow component-based architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- Development by YussTech
- Design inspiration from modern web trends
- Built with ❤️ using React and TypeScript

## 📞 Support

For support or inquiries:
- Website: [YussTech Website]
- Email: [Contact Email]
- GitHub Issues: [Project Issues]

---

Built with precision and care by YussTech 🚀

# Yustech Website

## Security Best Practices

### Environment Variables
- Never commit `.env` files to version control
- Use `.env.example` as a template for required environment variables
- Keep API keys and secrets secure
- Rotate credentials regularly

### Dependencies
- Keep all dependencies up to date
- Run `npm audit` regularly to check for vulnerabilities
- Use `npm audit fix` to automatically fix vulnerabilities
- Review dependency licenses

### Code Security
- Use HTTPS for all API calls
- Implement proper CORS policies
- Sanitize user input
- Use Content Security Policy headers
- Implement rate limiting where appropriate

### Authentication & Authorization
- Use secure session management
- Implement proper access controls
- Use secure password hashing
- Implement 2FA where possible

## Setup Instructions

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your values
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The site is deployed on Netlify. To deploy:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Link your site:
   ```bash
   netlify link
   ```

4. Deploy:
   ```bash
   netlify deploy --prod
   ```

## Security Checklist

- [ ] All environment variables are properly set
- [ ] Dependencies are up to date
- [ ] No sensitive data in version control
- [ ] HTTPS is enforced
- [ ] CSP headers are properly configured
- [ ] Rate limiting is implemented
- [ ] Input validation is in place
- [ ] Error handling is secure
- [ ] Logging is properly configured
- [ ] Regular security audits are performed
