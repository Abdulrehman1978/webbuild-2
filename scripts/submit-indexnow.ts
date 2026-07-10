#!/usr/bin/env node
/**
 * submit-indexnow.ts
 *
 * Submits all Taxzone URLs to IndexNow API so search engines (Bing, Yandex, etc.)
 * are immediately notified of new/updated content.
 *
 * Usage:
 *   npx tsx scripts/submit-indexnow.ts
 *   (or after adding to package.json: npm run submit-indexnow)
 *
 * Run this after:
 *   - Deploying a new build to production
 *   - Publishing a new blog post
 *   - Significantly updating an existing page
 *
 * Do NOT run this on every deploy automatically without the domain owner's decision,
 * as IndexNow rate limits apply and unnecessary submissions waste quota.
 */

const SITE_URL = "https://tax-zone.in";
const INDEXNOW_KEY = "a3f9b2c1-d4e5-4f6a-b7c8-d9e0f1a2b3c4";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

// All URLs to submit — keep in sync with app/sitemap.ts
const urlList = [
  `${SITE_URL}/`,
  `${SITE_URL}/about`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/client-stories`,
  `${SITE_URL}/resources`,
  `${SITE_URL}/services`,
  `${SITE_URL}/services/gst`,
  `${SITE_URL}/services/income-tax`,
  `${SITE_URL}/services/accounting`,
  `${SITE_URL}/services/startup`,
  `${SITE_URL}/services/export`,
  `${SITE_URL}/services/finance`,
  `${SITE_URL}/privacy-policy`,
  `${SITE_URL}/terms-of-service`,
  // Blog posts
  `${SITE_URL}/blog/gst-registration-guide-startups-maharashtra`,
  `${SITE_URL}/blog/itr-filing-deadlines-penalties-fy2025-26`,
  `${SITE_URL}/blog/company-registration-india-mca-process`,
];

async function submitToIndexNow() {
  const payload = {
    host: "tax-zone.in",
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`\nSubmitting ${urlList.length} URLs to IndexNow...`);
  console.log("Endpoint: https://api.indexnow.org/indexnow");
  console.log("Key:", INDEXNOW_KEY);
  console.log("Key location:", KEY_LOCATION);
  console.log("\nURLs:");
  urlList.forEach((url) => console.log(" -", url));

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    console.log(`\nResponse status: ${response.status} ${response.statusText}`);

    if (response.status === 200) {
      console.log("✅ IndexNow submission successful! URLs queued for crawl.");
    } else if (response.status === 202) {
      console.log("✅ IndexNow accepted (202). URLs will be processed.");
    } else if (response.status === 400) {
      console.error("❌ Bad request — check that urlList contains valid absolute URLs.");
    } else if (response.status === 403) {
      console.error("❌ Forbidden — key verification failed. Ensure the key file is accessible at:", KEY_LOCATION);
    } else if (response.status === 422) {
      console.error("❌ Unprocessable — URLs contain duplicate entries or invalid format.");
    } else if (response.status === 429) {
      console.error("❌ Rate limited — too many submissions. Wait 24 hours before retrying.");
    } else {
      const body = await response.text().catch(() => "(no body)");
      console.error("❌ Unexpected response:", response.status, body);
    }
  } catch (error) {
    console.error("❌ Network error submitting to IndexNow:", error);
    process.exit(1);
  }
}

submitToIndexNow();
