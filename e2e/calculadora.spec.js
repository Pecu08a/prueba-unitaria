import {test, expect} from '@playwright/test';
test('Verificar calculadora', async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/index.html?vscode-livepreview=true");
  await page.waitForTimeout(2000);
  await expect(page).toHaveTitle("Calculadora");
  await page.fill('#valor1', '5');
  await expect(page.locator('#valor1')).toHaveValue('5');
  await page.fill('#valor2', '10');
  await expect(page.locator('#valor2')).toHaveValue('10');
  await page.selectOption('#operacion', 'suma');
  await expect(page.locator('#operacion')).toHaveValue('suma');
  // Presionar el botón de calcular
    await page.click('button#calcular');
    await page.waitForTimeout(1000);
    // Leer el resultado y verificar que sea correcto
    await expect(page.locator('span#resultado')).toHaveText('15');
});