export default async function test(page, ui) {
  // Wait for the textarea to be ready
  await page.waitForSelector('.argument-input');

  // Get the snapshot to find the textarea ref
  const snapshot = await ui.snapshot();
  const textareaRef = snapshot.match(/@(e\d+) textbox/)?.[1];

  if (!textareaRef) return { error: 'textarea not found', snapshot };

  // Fill with an example weak argument
  const weakArgument = "Social media is bad because everyone uses it and gets depressed. My cousin used Instagram for a month and became sad, so obviously social media causes depression in all people.";

  await ui.fill(textareaRef, weakArgument);
  await page.waitForTimeout(300);

  // Get the button ref for "ANALYZE ARGUMENT"
  const snapshot2 = await ui.snapshot();
  const analyzeButtonRef = snapshot2.match(/@(e\d+) button "ANALYZE ARGUMENT"/)?.[1];

  if (!analyzeButtonRef) return { error: 'analyze button not found' };

  // Click analyze
  await ui.click(analyzeButtonRef);

  // Wait for results to load
  await page.waitForTimeout(1500);

  // Get the full text to see the results
  const results = await ui.snapshot({full: true});

  return {
    tested: true,
    argumentLength: weakArgument.length,
    resultsFound: results.includes('Fallac') || results.includes('fallacy')
  };
}
