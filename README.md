# 💚 Living Kidney Donor Search Microsite & Patient Privacy Vault

> **Official National Kidney Registry (NKR) & MGH Transplant Center Living Donor Search Campaign**  
> Built with patient dignity, humor, data visualization, and 2026 web design standards.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-teal.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![DocuSign ESIGN](https://img.shields.io/badge/DocuSign-ESIGN%20Compliant-amber.svg)](https://www.docusign.com/)
[![MGH Transplant Center](https://img.shields.io/badge/Transplant%20Center-MGH%20Boston-emerald.svg)](https://www.massgeneral.org/transplant)

---

## 🌟 Executive Summary

This application is an official living kidney donor search microsite template engineered for patients fighting **Stage 5 End-Stage Renal Disease (ESRD)** who are actively listed at the **MGH Transplant Center (Massachusetts General Hospital, Boston, MA)**.

With waitlists for deceased donor kidneys spanning 5 to 8 years in New England, finding a **living kidney donor** is the definitive, life-saving cure. A kidney from a living donor functions immediately, lasts 15 to 20+ years (nearly double a deceased donor organ), and allows the patient to return to full health.

---

## 🛡️ Two-Tier Privacy Architecture

### 1. Pre-NDA Anonymous Landing Page (`LandingPage.tsx`)
- **Strict Anonymity Constitution:** Displays **zero names** and **zero personal photos** to safeguard the candidate's medical privacy from internet crawlers and unauthorized indexing.
- **Cause Overview:** Introduces the candidate's profile (a 44-year-old father, youth lacrosse mentor, and custom woodworker) and the clinical reality of severe kidney failure (GFR 8 mL/min).
- **Core Pillars of Living Donation:**
  1. **NKR Paired Exchange:** Any blood type qualifies. Even if incompatible with the candidate, a donor triggers a synchronized swap chain that saves multiple families across the nation.
  2. **$0 Cost to the Living Donor:** 100% of medical workup, surgery, hospital recovery, travel, and lost wages are fully reimbursed under the non-profit **Donor Shield** program.
  3. **Zero Obligation:** Taking the 15-minute confidential health screening commits the volunteer to nothing; donors retain 100% autonomy to pause at any time.
- **Transparent Justification for the Mutual NDA:** Clarifies why privileged health metrics and family memoirs require a mutual non-disclosure agreement before viewing.

### 2. Post-NDA Confidential Dossier (`App.tsx` & `DocuSignNdaGate.tsx`)
- **Legally Binding Mutual NDA Gate:**
  - 256-bit encrypted electronic envelope (`Envelope ID: ENV-NKR-2026-88F4-CONFIDENTIAL-CANDIDATE`).
  - Five binding covenants including HIPAA respect, strict federal altruism compliance (**NOTA, 42 U.S.C. 274e**), and lighthearted clauses (e.g., prohibiting spam advice about celery juice or mystical crystals).
  - Adopt signature via **typed font styles** or **interactive canvas drawing**.
  - **Automated Recipient Audit Copy:** An executed copy is automatically dispatched to the recipient advocate email (`advocate-relay@kidneyseeker-vault.org`).
- **Post-Signing Google OAuth 2.0 Integration:**
  - New users **must** sign the NDA first.
  - Once signed, users are prompted: *"Save Your Login for Next Time: Link your Google account so you never have to sign the NDA again across browser sessions or devices."*
  - Returning verified signers can sign in via Google and instantly bypass the NDA gate.

---

## 📖 9 Rich Dossier Chapters (`StorySection.tsx`)

Once unlocked, the site presents a comprehensive, tabbed narrative:

1. **1. His Story:** The man behind the lab numbers, personal values, GFR milestone timeline, and humor quotes.
2. **2. His Career:** 18+ years as a custom woodworker and historic brownstone restoration lead in Boston.
3. **3. Community Impact:** Volunteer coaching for 140+ youth lacrosse athletes, founding a neighborhood tool-lending co-op, and building wheelchair ramps for elderly neighbors.
4. **4. Comedy:** Stand-up comedy journey across Boston open-mics, favorite stage bits, and the philosophy of using laughter as physiological medicine.
5. **5. Writings:** Original essays including *"The Mathematics of a Second Chance"* and *"An Unsent Letter to an Unknown Stranger"*.
6. **6. Travels:** New England adventures, Acadia National Park, White Mountains Presidential Traverse, and his post-transplant dream of swimming in Hawaii.
7. **7. Family & Lifelong Friends:** Named support circle with high-resolution portraits, relationships, and funny quirks:
   - **Ben** (Nephew, 17, Lacrosse Athlete)
   - **Sarah Miller** (Sister & Elementary School Teacher)
   - **Marcus Chen** (Best Friend & Civil Engineer)
   - **Elena Rodriguez** (Comedy & Improv Partner)
   - **Dave Kowalski** (Neighbor & Woodworking Guild Partner)
   - **Coach Tom Higgins** (Youth Sports League Director)
   - **Grandpa Arthur** (Family Patriarch, Age 82)
8. **8. Hobbies:** Fine woodworking & Rockwell lathe turning, vintage vinyl jazz records, and campfire cooking.
9. **9. Dreams & Bucket List:** The 100-yard open ocean plunge in Hawaii, cheering Ben at college games, building an off-grid family timber cabin, and his lifetime pledge to his future donor.

---

## 📊 Data Visualization: Potential Impact Infographic (`PotentialImpactSection.tsx`)

Built with **Recharts**, this interactive section models published renal registry outcomes without dispensing medical advice:

- **Stamina Trajectory (Area Chart):** Compares physical energy curves over 2+ years from Stage 5 CKD baseline (26/100) to post-transplant vitality (96/100).
- **Weekly Hours Reclaimed (Bar Chart):** Details the return of **+1,200 hours annually** (+26 hrs/week of free family time) by eliminating severe renal fatigue.
- **Holistic Quality of Life Matrix (Radar Chart):** Multi-dimensional comparison across 6 domains (Stamina, Dietary Freedom, Travel, Family Mentorship, Career Output, and Joy).

---

## 🧩 Additional Features & Modules

- **Clinical Status & Disclosure (`ClinicalDisclosureSection.tsx`):** Detailed breakdown of GFR 8 mL/min, MGH care team (Nephrologist, Transplant Surgeon, Independent Donor Advocate, Social Worker), and surgical fitness.
- **Why You Should Help & How You Can Help (`WhyAndHowSection.tsx`):** Practical guidance addressing donor safety, medical expenses, and the 15-minute MGH screening.
- **Community Testimonials Wall (`CommunityTestimonialsSection.tsx`):** Authentic endorsements with portrait photos and an interactive "Write Why He Matters" submission form with celebratory confetti.
- **Family Video Section (`VideoSection.tsx`):** Features nephew Ben speaking about his uncle’s impact.
- **Living Donor Voice Popups (`DonorTestimonialsSection.tsx`):** Real-world accounts from living donors breaking down surgical recovery day-by-day to alleviate donor anxiety.
- **Interactive Visual Roadmap: Donor Journey (`DonorJourneySection.tsx`):** Comprehensive 8-stage interactive visual timeline tracking every phase from 15-minute home screening, local LabCorp/Quest testing, 1-day MGH evaluation, committee review, minimally invasive surgery, home recovery, to lifelong health. Highlights the **$0 out-of-pocket expense**, **lost wage reimbursement (up to $2,000/week)**, and **NKR lifetime reciprocal prioritization guarantee**.
- **Interactive Challenge (`GamifiedEngageSection.tsx`):** 4-question kidney myth-buster quiz, Paired Exchange Domino reaction simulator, and live cheer counter.
- **Automated Progress Email Dispatch (`ProgressEmailSection.tsx`):** Subscriber form allowing friends to receive clinical updates and match news without awkward weekly check-ins.
- **Privacy & Profile Controls Modal (`PrivacyAndProfileModal.tsx`):** Allows the patient or their advocate to toggle between Anonymous Mode and Full Name Mode, edit clinical stats, and adjust the DocuSign recipient email.

---

## 💚 Author Signature

Every page includes the custom, non-distracting Courier green footer:
```
built w 💚 by Ashley in Boston 02116, 2006.
```
Clicking **Ashley** renders a modal with direct links to:
- **Email:** `ashleye.romano@gmail.com`
- **GitHub:** `https://github.com/ashleyer/ckd-microsite.git`

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 SPA (Vite)
- **Language:** TypeScript 5.5
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";`)
- **Data Visualization:** Recharts
- **Icons:** Lucide React
- **Micro-Animations:** Canvas Confetti & Tailwind Transitions
- **Legal Engine:** DocuSign ESIGN & UETA compliant simulation with SHA-256 session seals
- **Authentication:** Google OAuth 2.0 Identity Client

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/ashleyer/ckd-microsite.git

# Navigate to project directory
cd ckd-microsite

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

---

## ⚖️ Legal & Medical Disclaimer

This microsite complies strictly with the **National Organ Transplant Act (42 U.S.C. 274e)**. Organ donation is purely voluntary and altruistic; zero financial compensation, gifts, or incentives may be offered or accepted. Medical testing and compatibility evaluations are conducted exclusively by accredited transplant centers under strict clinical oversight.
