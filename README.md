# Quickcaff Client

Quickcaff is a platform that allows users to quickly and easily choose their coffee.

## Getting Started

Follow these steps to run this project locally.

### Prerequisites

- Node.js (v20 or later)
- Yarn
- Quickcaff API (The API must be running before starting this project. The steps for setting up the API are described below.)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yunus-acar/quickcaff-client.git
   cd quickcaff-client
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

3. Configure environment variables:
   Copy the `.env.example` file to `.env` and fill in the necessary environment variables.

   ```bash
   cp .env.example .env
   ```

4. Start the Quickcaff API:
   Clone the API repository and follow the steps to get it running: [Quickcaff API](https://github.com/yunus-acar/quickcaff-api)

5. Generate the GraphQL files:

   ```bash
   yarn codegen
   ```

6. Start the project:
   ```bash
   yarn dev
   ```

### Project Structure

- `app/`: Contains pages and components.
- `components/`: Contains reusable React components.
- `graphql/`: Contains GraphQL queries.
- `lib/`: Contains helper library files.
- `public/`: Contains public static files.
- `utils/`: Contains utility files.
