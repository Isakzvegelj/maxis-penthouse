# Maxis booking presentation and favicon — 1 November 2026

Current production is approved b1f86449dc853d2281a8c13580908be0bd467d1d. This branch review/elegant-booking-favicon-20261101 is a new unpublished visual proposal, not yet approved. Owner requested a more elegant booking form and simple favicon like Adora.

Proposal: native Bentral theme parameters for light sage headers, forest text/green actions, no table borders/duplicate provider title; wider white rounded reservation card, existing balcony photograph, restrained heading and EN/SL subtitle. Single cream serif M on green rounded square, SVG plus180px PNG fallback/touch icon, cache-versioned links across site pages. Existing provider branding remains.

Booking property id5f7a51794e515f4e and key unchanged; no rates/inventory/payment/provider-account settings changed. Bentral generates DOM resize IDs from presentation options: themed booking iframe must use provider-generated bentral-frame-33ecc7f08e4092ce9a6fd4b83d5ce13f. Both provider JS/HTML confirm it; retain origin/source checks in parent listener. Calendar/pricelist URLs and IDs unchanged. Source captures/evidence live outside public repo, VMP /home/isak/projects/maxis-booking-optimization/elegant/.

Final guarded browser checks pass320/390/1440; booking/calendar/pricelist content+resize checked390/1440, theme colour verified inside native provider frame, EN/SL/light/dark and mobile action/focus checked. No writes/bookings/payments/enquiries submitted. First test exposed stale provider-generated resize ID and was fixed; later stalled test was cancelled, bounded final run passes. Invariants preserve property/key, rates/ratings/photos/analytics. PNG generated directly from authored vector; no AI raster assets.

Private preview is a derived bundle, not production source: gateway CSP stays unchanged, themed native form is a read-only screenshot with exact external live form link. Do not deploy derived preview. Approval must cover both this booking presentation and favicon; after explicit approval, confirm production still b1f8644 and publish only reviewed source commit. Verify deployment and live form. No unsolicited booking test.
