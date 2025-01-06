# DNS AI Server

This project sets up a DNS server that uses Google Generative AI to answer DNS TXT queries with generated content. The server listens for DNS queries and responds with AI-generated answers.

## Features

- Uses Google Generative AI to generate responses.
- Handles DNS TXT queries.
- Configurable timeout for AI responses.

## Prerequisites

- Node.js
- npm
- A Google API key for the Generative AI service.
- A `.env` file with the following content:
  ```
  GOOGLE_API_KEY=your_google_api_key_here
  ```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/himanshuraimau/dns-ai.git
   cd dns-ai
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your Google API key:
   ```sh
   echo "GOOGLE_API_KEY=your_google_api_key_here" > .env
   ```

## Usage

Start the DNS server:
```sh
node index.js
```

The server will start listening on port 3001 for DNS queries.

## Example Query

Use `dig` to query the server:
```sh
dig TXT @localhost -p 3001 what.is.2.+.2
```

