# Bled Penthouse — Launch Runbook
# Status: LIVE — custom domain served by GitHub Pages

This is the master checklist. Work top to bottom. Items marked
[DONE] are ready now. Items marked [ ] are pending.

────────────────────────────────────────────────
PHASE 0 — RIGHT NOW (pre-launch, done while building)
────────────────────────────────────────────────
[DONE] Website built → /Users/isakzvegelj/bled-penthouse/
[DONE] Booking.com listing copy + photo shot-list → booking-listing.md
[DONE] This runbook

[DONE-ish] Decisions defaulted in booking-listing.md (edit if you disagree):
      - Bed: 1 double (sleeps 2)
      - Size: measure at handover, fill m²
      - WiFi: yes (confirm speed)
      - Pets: no
      - Check-in 15:00 / out 10:00
      - Cleaning fee 40€; tourist tax ~2–3.50€/guest/night

[ ] Register domain (optional but recommended):
      e.g. bledpenthouse.com / staybled.si
      Point it at the hosted site (see Phase 3).

[ ] Open a Booking.com partner account now so it's verified
      before photos exist: https://admin.booking.com

────────────────────────────────────────────────
PHASE 1 — AT BUILD HANDOVER
────────────────────────────────────────────────
[ ] Final clean + staging (remove tools, add towels/linens)
[ ] Measure size, confirm bed count
[ ] Test AC, lights, roof windows, locks
[ ] Set up WiFi router, note network name + password
[ ] Print guest info card (WiFi, check-in, house rules, emergency #)

────────────────────────────────────────────────
PHASE 2 — PHOTOS (do this before publishing)
────────────────────────────────────────────────
[ ] Photograph per shot-list in booking-listing.md (15+ shots)
[ ] Export landscape, bright, min 2000px
[ ] Drop hero + gallery images into website /images/ folder
[ ] Replace placeholder .photo-slot blocks in index.html with
      <img src="images/xxx.jpg" alt="...">

────────────────────────────────────────────────
PHASE 3 — PUBLISH WEBSITE
────────────────────────────────────────────────
[DONE] Site is LIVE: https://maxisbled.com
      Production DNS currently points to GitHub Pages. A Netlify site also
      exists, but it is not the active custom-domain origin.

[ ] 2-minute wiring before go-live:
    - Formspree: create free form at formspree.io, copy the ID,
      replace YOUR_FORM_ID in index.html (form action + _next URL).
      Mailto fallback already in place if you skip this.
    - Replace YOUR_EMAIL@example.com (mailto link) with your real email.
    - Canonical/OG/sitemap URLs already use https://maxisbled.com.

[ ] Replace Booking.com / Airbnb "#" links with real URLs at launch.
[ ] (Optional) Custom domain: in Netlify site settings → Domain management,
      add bledpenthouse.com / staybled.si and update DNS. Then fix
      YOUR-DOMAIN.example refs above.
[ ] Test on phone + desktop; click every button (already verified live 200s).

────────────────────────────────────────────────
PHASE 4 — GO LIVE ON OTA PLATFORMS
────────────────────────────────────────────────
[ ] Booking.com: enter details, upload photos, set calendar+price, publish
[ ] Airbnb: mirror listing, sync calendar
[ ] Link both from website booking buttons
[ ] Announce: Instagram / local Bled tourism FB groups / WhatsApp

────────────────────────────────────────────────
PHASE 5 — OPERATIONS (ongoing)
────────────────────────────────────────────────
[ ] Calendar sync between Booking + Airbnb (avoid double-booking)
[ ] Auto-reply / welcome message with check-in steps
[ ] Linen + cleaning rotation
[ ] Collect reviews; reply within 24h
[ ] Adjust pricing by season (see booking-listing.md §8)

────────────────────────────────────────────────
QUICK LINKS
────────────────────────────────────────────────
Booking partner: https://admin.booking.com
Netlify drop:    https://app.netlify.com/drop
Files:           /Users/isakzvegelj/bled-penthouse/
