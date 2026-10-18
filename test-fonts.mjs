export default async function run(page, ui) {
  const before = await ui.snapshot()
  const textareaMatch = before.match(/@(e\d+) textbox/)
  const analyzeMatch = before.match(/@(e\d+) button "ANALYZE ARGUMENT"/)

  if (!textareaMatch || !analyzeMatch) return { error: 'Not found' }

  const textarea = textareaMatch[1]
  const analyzeBtn = analyzeMatch[1]

  await ui.fill(textarea, "Everyone who exercises regularly lives past 100 because my grandfather exercised daily and lived to 101")
  await ui.click(analyzeBtn)
  await page.waitForTimeout(1500)

  return { success: true }
}
