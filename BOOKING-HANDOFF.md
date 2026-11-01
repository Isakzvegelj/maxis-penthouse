# Booking conversion proposal — 1 November 2026

Unpublished proposal. Owner requested optimizing Maxis for bookings; visual publication requires explicit approval. Base production gh-pages is 1171c710c8d9341d2f64fc9c98509d025bb7646a. Source owner VMP /home/isak/projects/maxis-booking-optimization/site; canonical VMA checkout is older than production and must not be pushed as-is.

Changes: one primary hero/header action reaches actual Bentral booking form; booking section follows property facts; calendar and price list get next-step buttons; visible external booking fallback; EN/SL cancellation/price copy describes reviewing actual terms rather than unverified best-rate/free-cancellation promises; booking lead contrast corrected; mobile action remains available below booking section and hides when form fields have focus. Existing identifiers, provider iframe URLs, analytics, photos and theme remain. No pricing/channel settings changed.

Validation: browser checks/evidence in parent evidence/. Read results.json for latest outcome. No bookings/payments/enquiries sent. Initial 320/390/1440 functionality passed; follow-up checks include contrast and provider widgets at mobile and desktop. No current field speed or booking-conversion measurements available. Do not claim booking uplift.

Preview build is a separate derived static bundle with extracted scripts and isolated preference keys. Gateway CSP stays unchanged: booking/calendar/map use external links; booking form screenshot is illustrative, not interactive. Production proposal retains all three live Bentral embeds. Never deploy the derived preview bundle.

Next: finish latest QA, publish verified private preview, register exact dashboard review; after explicit approval, verify remote gh-pages unchanged and release source commit through existing GitHub Pages workflow. Confirm deployment and mobile/desktop booking handoff. No unsolicited live transaction test.
