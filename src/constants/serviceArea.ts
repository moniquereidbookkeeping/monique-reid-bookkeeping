/**
 * Owner-confirmed South Florida service area (October 2026), as recorded in docs/niche-pain-points.md.
 * The work is fully remote; there is no office to visit. Every page and schema that lists cities reads
 * from here, so the lists cannot drift apart again.
 */
export const BROWARD_CITIES = ['Fort Lauderdale', 'Wilton Manors', 'Oakland Park', 'Plantation', 'Davie'];

export const SOUTH_FLORIDA_AREAS: { county: string; cities: string[] }[] = [
  { county: 'Broward County', cities: BROWARD_CITIES },
  { county: 'Miami-Dade County', cities: ['Miami', 'Miami Beach', 'Coral Gables', 'Aventura', 'Doral', 'Kendall'] },
  { county: 'Palm Beach County', cities: ['Boca Raton', 'Delray Beach', 'Boynton Beach', 'West Palm Beach', 'Palm Beach Gardens', 'Jupiter'] },
];
