# Cafe Inventory Management System — Frontend (AWS)

Angular dashboard for a full-stack cafe inventory management system, deployed to AWS via S3 + CloudFront. This is the AWS-deployed variant of [cafe-inventory-frontend](https://github.com/rrich360/cafe-inventory-frontend) — same application code and history, prepared and deployed for the cloud.

## Status

The S3 + CloudFront deployment and any AWS-specific build/config changes land here as Article 4 of the "From Code to Cloud" series progresses. As of Article 3, this repo already talks to the live AWS backend ([cafe-inventory-backend-aws](https://github.com/rrich360/cafe-inventory-backend-aws)) when pointed at its Elastic IP — proven end-to-end in Article 3's closing verification.

## Tech stack

- Angular 14.2 + Angular Material
- RxJS
- JWT auth via an HTTP interceptor

## Getting started

1. Install dependencies:
   ```
   npm install
   ```
2. Point `src/environments/environment.ts` (`apiUrl`) at your backend — either the local baseline (`http://localhost:8081`) or the live AWS deployment.
3. Run the dev server:
   ```
   ng serve
   ```
4. Navigate to `http://localhost:4200`.

## Related

- Local-only baseline: [cafe-inventory-frontend](https://github.com/rrich360/cafe-inventory-frontend) — forked from here, shares this repo's git history
- Backend (AWS): [cafe-inventory-backend-aws](https://github.com/rrich360/cafe-inventory-backend-aws)
- Part of the "From Code to Cloud" article series documenting this project's journey from localhost to AWS — see Article 3 (EC2 + RDS deployment) and Article 4 (S3, SES, CloudFront)
