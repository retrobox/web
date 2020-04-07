# RetroBox Website

> The RetroBox website made with nuxt.js

[![CircleCI](https://circleci.com/gh/retrobox/web.svg?style=svg)](https://circleci.com/gh/retrobox/web)

## Preview

![alt text](https://static.retrobox.tech/img/firefox_h6GDEeX8FJ.png)

## Setup

1. Clone the repository: `git clone https://github.com/retrobox/web`
2. Install dependencies: `yarn install`
3. Setup `.env` file (Instructions to do so below)
4. Run development server (will listen on 3000 port by default): `yarn dev`

## Environment variables

In order to get the server running you will need to fill your .env file.
Create a `.env` file from the `.env.example` file at the root of the folder repository (same level as `nuxt.config.js`).

Description of the environment variables.
```
API_ENDPOINT=http://localhost:8000 # the base url of the api
API_PROXY_ENDPOINT=http://localhost:3000/api # the base url of the api proxy
ADMIN_DASHBOARD_ENDPOINT=https://admin.retrobox.tech # the base url of the admin dashboard (only serve as redirection purpose)
WS_ENDPOINT=https://ws.retrobox.tech # the base url of the websocket server 
COOKIE_DOMAIN=retrobox.tech # the domain where to save the cookies 
STRIPE_PUBLIC=YOUR_STRIPE_PUBLIC_KEY # used to setup stripe payment method
```
