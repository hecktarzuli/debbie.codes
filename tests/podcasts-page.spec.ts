import { test, expect } from '@playwright/test'

test('podcast page to see if podcasts are loading', async ({ page }) => {
  // Go to http://localhost:8000/
  await page.goto('')

  // Click text=Podcasts >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: '/resources/podcasts' }*/),
    page.locator('text=Podcasts').first().click()
  ])

  // Click text=Guest Podcast Interviews
  await page.locator('text=Guest Podcast Interviews').click()

  // Click text=Ant-man and the Wasp - w/ Debbie O'Brien
  await page.locator("text=Ant-man and the Wasp - w/ Debbie O'Brien").click()

  // Click text=Ant-man and the Wasp - w/ Debbie O'Brien Bit We talk about starting out in the f >> span
  await page
    .locator(
      "text=Ant-man and the Wasp - w/ Debbie O'Brien Bit We talk about starting out in the f >> span"
    )
    .click()

  // Click text=We talk about starting out in the frontend, how to keep learning and growing, ev
  await page
    .locator(
      'text=We talk about starting out in the frontend, how to keep learning and growing, ev'
    )
    .click()

  // Click text=October 6, 2021
  await page.locator('text=October 6, 2021').click()

  // Click .podcast >> nth=0
  await page.locator('.podcast').first().click()
})
