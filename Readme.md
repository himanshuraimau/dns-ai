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

## Example Queries

Use `dig` to query the server. Here are some example commands:

### Basic Query
```sh
dig TXT @localhost -p 3001 what.is.2.+.2
```

### Get Shorter Output
Use +short to get just the answer:
```sh
dig +short TXT @localhost -p 3001 what.is.the.capital.of.france
```

### More Example Questions
```sh
# Ask for a joke
dig +short TXT @localhost -p 3001 tell.me.a.joke

# Get a recipe
dig +short TXT @localhost -p 3001 how.to.make.pancakes

# Math calculations
dig +short TXT @localhost -p 3001 calculate.15.times.7

# General knowledge
dig +short TXT @localhost -p 3001 who.was.albert.einstein
```

### Query Format
- Replace spaces with dots (.) in your question
- Use only alphanumeric characters and dots
- The question should be part of the domain name

