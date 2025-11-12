import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(String(err)))
  await page.goto('/')
  expect(errors.length).toBe(0)
})

test('render heading', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1, name: /Daniel Fernando/i })).toBeVisible()
})

test('four shapes present', async ({ page }) => {
  const shapes = page.locator('.ps-container')
  await expect(shapes).toHaveCount(4)
})

test('pulse starts on hover', async ({ page }) => {
  const shape = page.locator('.ps-container').first()
  await shape.hover()
  const inner = shape.locator('.ps-inner')
  await expect.poll(async () => (await inner.evaluate((el) => el.classList.contains('ps-anim')))).toBe(true)
})

test('pulse completes on mouseleave', async ({ page }) => {
  const shape = page.locator('.ps-container').first()
  await shape.hover()
  const inner = shape.locator('.ps-inner')
  await page.mouse.move(0, 0)
  await expect.poll(async () => (await inner.evaluate((el) => el.classList.contains('ps-anim')))).toBe(true)
  await page.waitForTimeout(1200)
  await expect.poll(async () => (await inner.evaluate((el) => el.classList.contains('ps-anim')))).toBe(false)
})

test('projects card opens modal', async ({ page }) => {
  const modalTriggerCard = page.locator('.ps-container').nth(3)
  await modalTriggerCard.click()
  await expect(page.locator('dialog.modal')).toBeVisible()
})

test('modal has carousel slides', async ({ page }) => {
  const modalTriggerCard = page.locator('.ps-container').nth(3)
  await modalTriggerCard.click()
  await expect(page.locator('#slide1')).toBeVisible()
  await expect(page.locator('#slide2')).toBeVisible()
  await expect(page.locator('#slide3')).toBeVisible()
  await expect(page.locator('#slide4')).toBeVisible()
})

test('close modal with button', async ({ page }) => {
  const modalTriggerCard = page.locator('.ps-container').nth(3)
  await modalTriggerCard.click()
  const dialog = page.locator('dialog.modal')
  await expect.poll(async () => (await dialog.evaluate((el) => el.hasAttribute('open')))).toBe(true)
  await page.locator('dialog.modal').getByRole('button', { name: 'x' }).click()
  await expect.poll(async () => (await dialog.evaluate((el) => el.hasAttribute('open')))).toBe(false)
})

test('close modal by backdrop click', async ({ page }) => {
  const modalTriggerCard = page.locator('.ps-container').nth(3)
  await modalTriggerCard.click()
  const dialog = page.locator('dialog.modal')
  await expect.poll(async () => (await dialog.evaluate((el) => el.hasAttribute('open')))).toBe(true)
  await dialog.click({ position: { x: 5, y: 5 } })
  await expect.poll(async () => (await dialog.evaluate((el) => el.hasAttribute('open')))).toBe(false)
})

test('click inside modal does not close', async ({ page }) => {
  const modalTriggerCard = page.locator('.ps-container').nth(3)
  await modalTriggerCard.click()
  const dialog = page.locator('dialog.modal')
  await page.locator('dialog.modal .modal-box').click()
  await expect(dialog).toBeVisible()
})

test('projects card anchor is #modal', async ({ page }) => {
  const modalAnchor = page.locator('.ps-container').nth(3).locator('.ps-link')
  await expect(modalAnchor).toHaveAttribute('href', '#modal')
})

test('external cards have http(s) href', async ({ page }) => {
  const anchors = page.locator('.ps-container .ps-link')
  const hrefs = await anchors.evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href))
  const externals = hrefs.filter((h) => h.startsWith('http://') || h.startsWith('https://'))
  expect(externals.length).toBeGreaterThanOrEqual(3)
})

test('external card click does not open modal', async ({ page }) => {
  await page.evaluate(() => {
    document.querySelectorAll('.ps-container .ps-link[href^="http"]').forEach((a) => {
      a.addEventListener('click', (e) => e.preventDefault())
    })
  })
  const external = page.locator('.ps-container').first()
  await external.click()
  const dialog = page.locator('dialog.modal')
  await expect.poll(async () => (await dialog.evaluate((el) => el.hasAttribute('open')))).toBe(false)
})

test('no console errors on reload', async ({ page }) => {
  await page.reload()
})

test('pulse animation name is ps-pulse', async ({ page }) => {
  const shape = page.locator('.ps-container').first()
  await shape.hover()
  const inner = shape.locator('.ps-inner')
  const name = await inner.evaluate((el) => getComputedStyle(el).animationName)
  expect(name).toContain('ps-pulse')
})

test('pulse animation duration ~0.9s', async ({ page }) => {
  const shape = page.locator('.ps-container').first()
  await shape.hover()
  const inner = shape.locator('.ps-inner')
  const dur = await inner.evaluate((el) => getComputedStyle(el).animationDuration)
  expect(dur).toContain('0.9s')
})

test('modal remains closed until click', async ({ page }) => {
  const dialog = page.locator('dialog.modal')
  await expect.poll(async () => (await dialog.evaluate((el) => el.hasAttribute('open')))).toBe(false)
})

test('modal content visible only when open', async ({ page }) => {
  await expect(page.locator('#slide1')).toHaveCount(0)
  const modalTriggerCard = page.locator('.ps-container').nth(3)
  await modalTriggerCard.click()
  await expect(page.locator('#slide1')).toBeVisible()
})
