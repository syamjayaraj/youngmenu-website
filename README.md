# Youngmenu Website

Youngmenu is a restaurant management platform. This repository contains the code for the Youngmenu website built with Next.js.

## Features

- Detailed references and information about Youngmenu.
- Display the list of stores and their corresponding menus.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.22.x or later)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/youngmenu-website.git
   cd youngmenu-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up environment variables
   Copy the .env.example file to .env.local:

   ```
   cp .env.example .env.local
   ```

   Please make sure to include your NEXT_PUBLIC_GRAPHQL_URL, NEXT_PUBLIC_API_URL, and NEXT_PUBLIC_DOMAIN_URL in the file:

   ```env
   NEXT_PUBLIC_GRAPHQL_URL=http://localhost:1337/graphql
   NEXT_PUBLIC_API_URL=http://localhost:1337/api/
   NEXT_PUBLIC_DOMAIN_URL=http://localhost:1337
   ```

   Before running this one, you must clone and run the [Youngmenu-cms](https://github.com/syamjayaraj/youngmenu-cms) project.

### Running the Project

1. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

### Building for Production

1. Build the project

   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server
   ```bash
   npm start
   # or
   yarn start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is open-source and available under the MIT License.
