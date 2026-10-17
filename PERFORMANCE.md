# October 17 performance changes

The homepage uses responsive WebP candidates and matching hero preloads. Tall phone screens receive a centered portrait derivative of the same hero photograph, keeping the existing cover crop sharp. Gallery thumbnails use smaller candidates while the lightbox retains original images.

The virtual tour loads only when the visitor selects its load button. Its standalone tour link remains available. EN/SL copy follows the existing language toggle.

The three Bentral scripts previously used `document.write` to inject provider frames and install a height-message listener. The homepage now contains the exact observed iframe URLs and IDs directly, with native lazy loading and accessible titles. Booking identifiers and query parameters are preserved. The listener accepts the provider's existing `hash_height` messages only from the matching provider frame and applies the original 30px height allowance. Changes to this integration require checking calendar navigation, pricing, booking form rendering, and resizing on mobile and desktop. No booking, payment or enquiry was sent during verification.

The enquiry form previously posted to Netlify although this site is hosted by GitHub Pages. It now prepares an email draft, explicitly asks the visitor to send it from their email app, and retains a direct email fallback. It does not claim delivery or confirmed reservations. A visitor without a configured email app must use the displayed email address.

To regenerate photographs, use Node 20.11+, `npm ci`, and `npm run images`; review and commit the generated files. Runtime needs no Node service. Preserve responsive attributes when replacing original photographs. Existing ratings and rates were not independently reconfirmed.

The complete comparison reports and screenshots are retained at `/home/isak/projects/website-performance-20261017/evidence` on VMP; the release summary is in the parent directory. Local lab measurements do not prove real-user speed or improved booking conversion. Review Search Console and confirmed direct bookings over comparable 28-day periods.
