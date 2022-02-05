# Contracts Dashboard

🟢 &nbsp; [Live](#)

## Description

A minimal dashboard to interact with contracts

Features:

- List all contracts available
- Find a specific contract by `id`
- Add new contract

## Tech Stack

- React JS
- Modular CSS
- TypeScript

## Requirements

- Node v12 <

## Available Scripts

### ⚙️ Installation

- `yarn` or `npm install`

### 🏃 Run

- `yarn start` or `npm run start`

> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 👷 Build

- `yarn build` or `npm run build`

<hr />

## 📘 Resources

Find the full API documentation [here](https://frontend-coding-project.herokuapp.com/)

<i>In short:</i>

Get all contracts:

```
- GET /contracts
```

Get a specific contract by id:

```
- GET /contracts/:id
```

Create a contract:

```
- POST /contract
```

Create a contract available params:

- `firstName`
- `lastName`
- `email`
- `status`
- `startData`
- `cancelationDate`
