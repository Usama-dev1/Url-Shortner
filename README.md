# URL Shortener v1

URL shortener application built with the MERN stack (MongoDB, Express, React, Node.js) that generates short codes for URLs. Deployed on Vercel.

## Features

- Shorten long URLs into short codes
- from 1 to 6 character shortening

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Vite for react
- Vercel CLI (for deployment)

### Installation

1. **Clone frontend of the repository:**

   git clone [https://github.com/Usama-dev1/Url-Shortner]
   cd Url-Shortener
2. **Clone backend of the repository:**

   git clone [https://github.com/Usama-dev1/urlShortnerBackend]
   cd backend




# URL Shortener App - Version-2 Plan

## Feature Additions

1. **User Authentication and Accounts**
   - Implement user registration, login, and account management.
   - Allow users to manage their links and settings.

2. **Custom Short URL Slugs**
   - Enable users to create custom short URLs.
   - Validate slugs to ensure they are unique.

3. **Link Analytics**
   - Provide detailed click statistics, including:
     - Total clicks
     - Clicks by geographic location
     - Clicks over time
   - Implement dashboards for viewing analytics data.

4. **Link Expiration Options**
   - Allow users to set expiration dates for shortened URLs.
   - Automatically deactivate or delete links once expired.

5. **QR Code Generation for Shortened Links**
   - Generate QR codes for each shortened link.
   - Provide users with an option to download or view the QR code.

6. **Link Grouping or Tagging for Better Organization**
   - Allow users to group or tag links for better organization.
   - Enable filtering and searching of links by group or tag.

7. **Bulk Link Shortening**
   - Provide an option for users to shorten multiple links at once.
   - Implement a bulk upload feature for large lists of URLs.

8. **API Access for Developers**
   - Offer API endpoints for link creation, retrieval, and analytics.
   - Provide documentation for developers to integrate with your service.

9. **Password Protection for Certain Links**
   - Allow users to set passwords for their shortened links.
   - Ensure secure access to links by validating passwords on access.

10. **Social Media Sharing Buttons**
    - Add buttons for easy sharing of shortened links on social media platforms.
    - Implement sharing options for popular networks like Facebook, Twitter, and LinkedIn.

## Implementation Plan

1. **Backend Development**
   - Set up user authentication and account management.
   - Implement endpoints for custom short URLs, analytics, expiration options, and bulk shortening.
   - Integrate QR code generation and password protection features.
   - Develop API access and provide documentation.
   - Add link grouping or tagging capabilities.

2. **Frontend Development**
   - Design and develop UI components for user accounts, custom slugs, and link management.
   - Implement dashboards for link analytics and bulk link shortening.
   - Integrate QR code generation and social media sharing buttons.
   - Provide user interface for setting link expiration and password protection.
