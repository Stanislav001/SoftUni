const { expect } = require('chai');
const { chromium } = require('playwright-chromium');

const options = { headless: false, slowMo: 200 };
const url = 'http://127.0.0.1:5500';

describe('Custom Test', function () {
    this.timeout(10000);
    it('Should word', async function () {
        const browser = await chromium.launch(options);
        const page = await browser.newPage();

        await page.goto(url);

        await page.click('text=Login')

        await page.fill('input[name=email]', 'peter@abv.bg');
        await page.fill('input[name=password]', '123456');

        await page.click('input[value=Login]');

        const buttonText = await page.textContent('#logout-btn');

        expect(buttonText).to.equal('Logout');
    });
});