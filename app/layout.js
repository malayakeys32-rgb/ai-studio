/**
 * EXTENDED DESCRIPTION:
 * 
 * This layout.js file defines the global structure for the AI Studio system.
 * It wraps every page in a consistent HTML and body layout, loads global CSS,
 * and enables the Next.js 14 App Router architecture. Without this file,
 * the project cannot render pages correctly because Next.js requires a root
 * layout to manage server components, routing, metadata, and UI structure.
 * 
 * This file is essential for:
 * - Global styling
 * - App-wide layout consistency
 * - Server component rendering
 * - Modern Next.js 14 architecture
 */

import './globals.css';

export const metadata = {
  title: 'AI Studio',
  description: 'A modern AI Studio built with Next.js 14.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
