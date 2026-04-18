# Gringou

A mobile-first web application to help non-EU students navigate their move to Ireland.

## Overview

Gringou is designed with a clean Claymorphism UI style, featuring Irish-inspired brand colors and an intuitive interface. The app helps students manage their relocation journey through an integrated checklist and document vault system.

## Features

- **Dashboard**: Quick-access hub for essential information and tasks
- **Checklist**: Progress tracking for all relocation steps
- **Document Vault**: Secure storage for important documents via Supabase
- **Profile Management**: Streamlined user information display
- **Mobile-First Design**: Optimized for mobile devices with responsive layout

## Design System

- **Style**: Claymorphism with soft shadows and smooth surfaces
- **Colors**: 
  - Irish Green (#169B62)
  - Saffron (#F4C430)
  - Terracotta (#E07856)
  - Off-White (#FAF9F6)
- **Navigation**: Bottom navigation bar for easy mobile access

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **UI Components**: Radix UI, shadcn/ui
- **Backend**: Supabase (Database, Storage, Auth)
- **Server**: Supabase Edge Functions with Hono
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
# (Note: Vite dev server should already be running in Figma Make environment)
```

### Environment Variables

The app requires Supabase configuration. The following environment variables are pre-configured:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components (Dashboard, Checklist, Profile, etc.)
│   │   └── App.tsx         # Main application component
│   ├── imports/            # Figma-imported components and assets
│   ├── styles/             # Global styles and theme
│   └── utils/              # Utility functions
├── supabase/
│   └── functions/
│       └── server/         # Edge functions backend
└── guidelines/             # Project guidelines and documentation
```

## Backend

The app uses a three-tier architecture:
- **Frontend** → **Server** (Hono web server in Supabase Edge Functions) → **Database** (Postgres)

### Key-Value Store

The backend provides a pre-configured key-value table (`kv_store_db2ca519`) accessible via utilities in `/supabase/functions/server/kv_store.tsx`.

## Contributing

This project was built with Figma Make and Claude Code.

## License

Private project - All rights reserved