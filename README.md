# Next.js Boilerplate with UI Libraries

This is a Next.js boilerplate with Aceternity UI, Magicui, and shadcn/ui component libraries included.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Add UI Components

### Aceternity UI

To add Aceternity UI components:

1. Import the desired component from https://ui.aceternity.com/components
2. Use the component in your JSX which is located in the `src/components/ui` directory

### Magicui

To add Magicui components:

1. Run the command `npx magicui-cli add <component-name>` to add the desired component
2. Import the desired component from https://magicui.design/docs/components/
3. Use the component in your JSX which is located in the `src/components/magicui` directory

### shadcn/ui

To add shadcn/ui components:

1. Run the command `npx shadcn-ui@latest add <component-name>` to add the desired component
2. Import the component in your JSX
3. Use the component in your JSX which is located in the `src/components/ui` directory
