# Services Pages Refactor Plan

## Goal

Refactor the current service pages so each section owns its component and CSS module instead of relying on the large shared `app/globals.css` file.

Current service pages:

- `app/services/cataract/page.tsx`
- `app/services/lasik/page.tsx`
- `app/services/retina/page.tsx`

User-facing target pages:

- Cataract
- Classic / LASIK
- Retina

Note: the current repo uses the slug and config key `lasik`. If the final page should be named `classic`, either alias `/services/classic` to the LASIK implementation or rename the service key from `lasik` to `classic` in one controlled migration.

## Current Issues

The service pages are currently driven by one large component:

- `app/service-page.tsx`

Most service UI is styled globally in:

- `app/globals.css`

This creates several problems:

- CSS rules are spread across many line ranges and override each other.
- LASIK-specific fixes are appended at the end of `globals.css`.
- Shared section names such as `.cataract-faq-section`, `.service-benefits-section`, and `.service-why` are reused by multiple service pages.
- Small changes to one service can accidentally affect cataract, LASIK, and retina together.
- The page is harder to maintain because content, layout logic, and CSS are mixed.

## Refactor Principles

Use CSS Modules for section styles:

- Use `styles.module.css`.
- Import as `import styles from "./styles.module.css";`.
- Apply classes with `className={styles.section}`.
- For combined classes, use arrays or template strings:

```tsx
className={`${styles.section} ${styles.lasik}`}
```

Keep only true global styles in `app/globals.css`:

- CSS variables
- Font setup
- Reset/base tags
- Shared utility classes only if they are intentionally global
- Header/footer global styles if not refactoring them yet

Move all service section CSS into the section component folder.

## Proposed Folder Structure

```txt
app/
  services/
    constants.ts
    types.ts
    cataract/
      page.tsx
    classic/
      page.tsx
    lasik/
      page.tsx
    retina/
      page.tsx

  components/
    services/
      ServicePage/
        ServicePage.tsx
        styles.module.css

      common/
        SectionHeading/
          SectionHeading.tsx
          styles.module.css
        Eyebrow/
          Eyebrow.tsx
          styles.module.css
        Shell/
          Shell.tsx
          styles.module.css
        Button/
          Button.tsx
          styles.module.css

      HeroBanner/
        HeroBanner.tsx
        styles.module.css

      WhyChoose/
        WhyChoose.tsx
        styles.module.css
        cataract/
          CataractWhyChoose.tsx
          styles.module.css
        classic/
          ClassicWhyChoose.tsx
          styles.module.css
        retina/
          RetinaWhyChoose.tsx
          styles.module.css

      IntroSection/
        IntroSection.tsx
        styles.module.css
        cataract/
          CataractIntro.tsx
          styles.module.css
        classic/
          ClassicIntro.tsx
          styles.module.css
        retina/
          RetinaIntro.tsx
          styles.module.css

      EligibilitySection/
        EligibilitySection.tsx
        styles.module.css
        cataract/
          CataractEligibility.tsx
          styles.module.css
        classic/
          ClassicEligibility.tsx
          styles.module.css
        retina/
          RetinaEligibility.tsx
          styles.module.css

      TreatmentOptions/
        TreatmentOptions.tsx
        styles.module.css
        cataract/
          CataractTreatmentOptions.tsx
          styles.module.css
        classic/
          ClassicTreatmentOptions.tsx
          styles.module.css
        retina/
          RetinaTreatmentOptions.tsx
          styles.module.css

      ComparisonSection/
        ComparisonSection.tsx
        styles.module.css
        cataract/
          CataractLensComparison.tsx
          styles.module.css
        classic/
          ClassicProcedureComparison.tsx
          styles.module.css

      BenefitsCarousel/
        BenefitsCarousel.tsx
        styles.module.css
        cataract/
          CataractBenefits.tsx
          styles.module.css
        classic/
          ClassicBenefits.tsx
          styles.module.css
        retina/
          RetinaBenefits.tsx
          styles.module.css

      TestimonialsSection/
        TestimonialsSection.tsx
        styles.module.css

      FAQSection/
        FAQSection.tsx
        styles.module.css

      AppointmentCTA/
        AppointmentCTA.tsx
        styles.module.css
```

## Common vs Service-Specific Components

### Common Components

Use common components when the layout and behavior are the same and only content changes.

Good common components:

- `HeroBanner`
- `WhyChoose`
- `TestimonialsSection`
- `FAQSection`
- `AppointmentCTA`
- `BenefitsCarousel` base behavior
- `SectionHeading`
- `Eyebrow`
- `Button`

These components should accept typed content from constants.

### Service-Specific Components

Use service-specific components when the visual structure is different, not just the text.

Service-specific components needed now:

- `CataractIntro`
  - Uses cataract image stack and callout.
- `ClassicIntro`
  - Current LASIK “What is LASIK?” image grid with `whatlasik1.png`, `whatlasik2.png`, `whatlasik3.png`, and procedure-time badge.
- `CataractEligibility`
  - Uses cataract surgery visual with multiple image layers.
- `ClassicEligibility`
  - Uses LASIK right-side two-image visual and blue check icons.
- `CataractLensComparison`
  - Lens table only for cataract.
- `ClassicProcedureComparison`
  - LASIK/SMILE/PRK/ICL procedure comparison only for LASIK/classic.

Retina can skip comparison if not needed.

## Constants Structure

Create:

```txt
app/services/constants.ts
app/services/types.ts
```

Example:

```ts
export type ServiceKind = "cataract" | "classic" | "retina";

export type ServicePageContent = {
  kind: ServiceKind;
  hero: HeroContent;
  whyChoose: WhyChooseContent;
  intro: IntroContent;
  eligibility: EligibilityContent;
  treatmentOptions: TreatmentOptionsContent;
  comparison?: ComparisonContent;
  benefits: BenefitContent[];
  testimonials: TestimonialContent[];
  faq: FAQContent;
  appointment: AppointmentCTAContent;
};
```

Then:

```ts
export const servicePages: Record<ServiceKind, ServicePageContent> = {
  cataract: cataractContent,
  classic: classicContent,
  retina: retinaContent,
};
```

The route pages become small:

```tsx
import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export default function CataractPage() {
  return <ServicePage content={servicePages.cataract} />;
}
```

## Suggested Section Rendering Flow

`ServicePage.tsx` should coordinate sections but not contain section markup.

```tsx
export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <>
      <Header active="services" />
      <main className={styles.page}>
        <HeroBanner content={content.hero} kind={content.kind} />
        <WhyChoose content={content.whyChoose} kind={content.kind} />
        <IntroSection content={content.intro} kind={content.kind} />
        <EligibilitySection content={content.eligibility} kind={content.kind} />
        <TreatmentOptions content={content.treatmentOptions} kind={content.kind} />
        {content.comparison ? <ComparisonSection content={content.comparison} kind={content.kind} /> : null}
        <BenefitsCarousel items={content.benefits} kind={content.kind} />
        <TestimonialsSection content={content.testimonials} kind={content.kind} />
        <FAQSection content={content.faq} kind={content.kind} />
        <AppointmentCTA content={content.appointment} kind={content.kind} />
      </main>
      <Footer />
    </>
  );
}
```

## CSS Module Rules

Each section folder owns only its own styles.

Example:

```txt
HeroBanner/
  HeroBanner.tsx
  styles.module.css
```

Example usage:

```tsx
import styles from "./styles.module.css";

export function HeroBanner({ content, kind }: Props) {
  return (
    <section className={`${styles.section} ${styles[kind]}`}>
      ...
    </section>
  );
}
```

Example CSS:

```css
.section {
  min-height: 760px;
  background-size: cover;
  background-position: center right;
}

.classic {
  background-position: center right;
}

.retina {
  background-position: center right;
}

@media (max-width: 768px) {
  .section {
    min-height: 720px;
  }
}
```

Do not use global selectors like:

```css
.service-page.lasik .service-why .feature-card
```

Inside modules, use local classes:

```css
.featureCard {}
.classicFeatureCard {}
```

## Handling Shared UI With Small Differences

Use either variants or service-specific wrappers.

### Use Variant Classes When Layout Is Same

Example: `FAQSection`.

The FAQ layout is shared between cataract, classic/LASIK, and retina. Keep one component and use content + variant CSS:

```tsx
<section className={`${styles.section} ${styles[kind]}`}>
```

CSS:

```css
.section {}
.card {}
.classic .card {}
.retina .card {}
```

### Use Separate Component When Layout Changes

Example: `IntroSection`.

`ClassicIntro` has a custom LASIK image grid. `CataractIntro` has image stack. These should be separate files.

```tsx
export function IntroSection({ kind, content }: Props) {
  if (kind === "classic") return <ClassicIntro content={content} />;
  if (kind === "cataract") return <CataractIntro content={content} />;
  return <RetinaIntro content={content} />;
}
```

## Migration Order

### Phase 1: Prepare Types and Constants

1. Create `app/services/types.ts`.
2. Move config objects from:
   - `app/services/cataract/page.tsx`
   - `app/services/lasik/page.tsx`
   - `app/services/retina/page.tsx`
3. Create `app/services/constants.ts`.
4. Keep the old `ServicePage` rendering temporarily.
5. Verify all three pages still build.

### Phase 2: Extract Common Atoms

Move or duplicate safely from `site-components.tsx`:

- `Eyebrow`
- `SectionHeading`
- button helpers if useful

Keep header/footer where they are unless you want a larger layout cleanup.

### Phase 3: Extract Sections One by One

Recommended order:

1. `HeroBanner`
2. `WhyChoose`
3. `TestimonialsSection`
4. `FAQSection`
5. `AppointmentCTA`
6. `BenefitsCarousel`
7. `TreatmentOptions`
8. `EligibilitySection`
9. `IntroSection`
10. `ComparisonSection`

Start with the easiest repeated sections so the CSS-module pattern is proven before moving complex LASIK image grids.

### Phase 4: Move CSS Safely

For each section:

1. Copy only the related CSS selectors from `globals.css`.
2. Convert selectors to local module class names.
3. Update JSX class names.
4. Build.
5. Compare desktop and responsive views.
6. Only then delete the old global CSS for that section.

Do not delete all service CSS from `globals.css` in one pass.

### Phase 5: Remove Dead Global CSS

After all sections are migrated:

1. Run searches for old selectors:
   - `service-page`
   - `service-hero`
   - `service-why`
   - `cataract-faq`
   - `lasik`
   - `cataract-testimonial`
2. Remove unused service-specific global blocks.
3. Keep base global design tokens and true shared utilities.

## Proposed Mapping From Existing CSS

Move these groups from `globals.css` into module files:

| Current Selector Area | New Component |
| --- | --- |
| `.service-hero`, `.service-hero-layout`, `.service-hero-copy`, `.hero-metrics` | `HeroBanner/styles.module.css` |
| `.service-why`, `.feature-grid`, `.feature-card`, LASIK why overrides | `WhyChoose/styles.module.css` |
| `.whatis-section`, `.lasik-intro`, `.lasik-visual-container` | `IntroSection/*/styles.module.css` |
| `.eligibility-section`, `.consider-surgery-section`, `.lasik-eligibility-section` | `EligibilitySection/*/styles.module.css` |
| `.cataract-options-section`, `.lasik-options-section`, generic `.options-section` | `TreatmentOptions/*/styles.module.css` |
| `.cataract-comparison-section`, `.lasik-comparison-section` | `ComparisonSection/*/styles.module.css` |
| `.cataract-benefits-section`, `.cataract-benefits-carousel`, LASIK benefits overrides | `BenefitsCarousel/styles.module.css` plus service variant modules if needed |
| `.cataract-testimonials-section`, `.cataract-testimonial-card` | `TestimonialsSection/styles.module.css` |
| `.cataract-faq-section`, `.cataract-faq-card`, `.cataract-faq-box` | `FAQSection/styles.module.css` |
| `.cataract-journey-section`, `.cataract-journey-layout` | `AppointmentCTA/styles.module.css` |

## Naming Recommendation

Use `classic` only if the service is truly called Classic.

If this is the LASIK service page, prefer:

- Folder: `lasik`
- Type key: `lasik`
- UI label: `LASIK`

If the business wants the page slug to be `classic`, then:

- Folder: `classic`
- Type key: `classic`
- UI labels can still say `LASIK` if that is the treatment name
- Add redirect or alias from `/services/lasik` if old links must keep working

## Build and QA Checklist

After each extracted section:

```bash
npm run build
```

Check routes:

- `/services/cataract`
- `/services/lasik` or `/services/classic`
- `/services/retina`

Responsive widths to check:

- Desktop: 1440px and 1920px
- Tablet: 768px
- Mobile: 576px, 430px, 390px, 360px

Visual checks:

- No horizontal overflow.
- Header does not overlap hero.
- Hero background and overlay are readable.
- Section spacing matches Figma.
- FAQ order is correct on mobile.
- Carousel displays correct card count:
  - Desktop: 3 cards
  - 576px-768px: 1.5 cards where required
  - Below 576px: 1 card
- Icons use image assets where requested:
  - `check_green.png`
  - `blue_check.png`
  - `blue_arrow.png`
  - `white_arrow.png`
  - `quote.png`

## Risk Notes

- Current `globals.css` has many late overrides. During migration, the new module CSS may appear correct but still be affected by global rules if old classes remain in JSX.
- Avoid keeping old global class names on migrated elements unless needed for temporary compatibility.
- CSS Modules scope class names, but global child selectors in `globals.css` can still affect plain tags like `section h2` if they are broad enough.
- Move one section at a time and verify visually before continuing.

## Recommended Final Outcome

The route page should only select content:

```tsx
export default function ClassicPage() {
  return <ServicePage content={servicePages.classic} />;
}
```

The `ServicePage` component should only compose sections.

Each section should own:

- Component JSX
- `styles.module.css`
- Optional service-specific subcomponent
- No dependency on `globals.css` except variables and base typography

This keeps cataract, classic/LASIK, and retina isolated while still reusing common UI where the design is genuinely shared.
