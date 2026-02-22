#!/usr/bin/env node
/**
 * Check the raw response from Strapi events API.
 * Run with: node scripts/check-strapi-events.js
 * (Ensure Strapi is running at http://localhost:1337 first)
 */
const url = process.env.STRAPI_URL || 'http://localhost:1337';
const apiUrl = `${url}/api/events?populate=*`;

async function main() {
  console.log('Fetching:', apiUrl);
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log('Status:', res.status);
    console.log('Response (JSON):');
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Error:', e.message);
  }
}

main();
