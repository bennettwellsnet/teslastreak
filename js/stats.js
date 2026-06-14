export const fsdStats = {
  longestStreak: "13,521 miles (zero critical interventions)",
  avgAutonomous: "95%+ of miles on FSD (Supervised) in heavy users",
  safetyMultiplier: "7-9x safer than average human driver (Tesla Q3 2025 data)",
  realWorldMiles: "One crash every 6.36 million miles on FSD vs. 702k for humans",
  streakNote: "New in FSD v14.3+: Carries from drive to drive as long as you don't drive manually or intervene."
};
export const commonTips = [
  "Intervene early in parking lots/garages/charging — don't risk the streak for unsafe moves",
  "Tap accelerator to pass slow cars and keep streak (Mad Max mode)",
  "High FSD % and long streaks lower your Tesla Insurance risk dramatically",
  "Don't let gamification push bad decisions — safety > streak",
  "Use in Chill mode for better consistency on long drives",
  "Avoid construction zones and complex navigation until more mature",
  "Report critical interventions via the car screen for Tesla to improve faster"
];
export const examplePosts = [
  { user: "@MilesTesla", text: "104.6-mile FSD Streak. Parking Lot → Home. Zero interventions. This new Streak metric tells the story better than any marketing slide.", likes: 28, date: "Jun 2026", highlight: "Longest recent single-drive streak" },
  { user: "@ChuckCook", text: "This incentivizes not disengaging when it might be necessary. Keeping an intervention free streak going is not important. Driving safely is the most important.", likes: 1339, date: "May 2026", highlight: "Safety warning from OG FSD beta tester" },
  { user: "@Teslaconomics", text: "95% of all miles driven on Full Self-Driving. 19,300 miles autonomous out of 20,420 total. 3-day streak + heavy usage. Tesla Insurance doesn't guess your risk...", likes: 407, date: "Apr 2026", highlight: "Insurance implications of high streaks" },
  { user: "@JCChristopher", text: "13,521 miles with zero critical interventions... Last critical was months ago. Tesla AI is absolutely cooking!", likes: 241, date: "May 2025", highlight: "Impressive long-term Uber driver data" }
];
export function getRandomTip() { return commonTips[Math.floor(Math.random() * commonTips.length)]; }
