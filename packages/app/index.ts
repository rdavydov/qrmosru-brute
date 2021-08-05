import { v4 as uuidv4 } from "uuid";
import puppeteer from "puppeteer";

type Count = number;

/**
 * Count of SS
 *
 * @var {Number}
 */
const count: Count = 100;

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 300, height: 300 },
  });
  const page = await browser.newPage();
  for (let i = 0; i < count; i++) {
    await page.goto(
      `https://www.gosuslugi.ru/vaccine/cert/verify/${uuidv4()}`,
      { waitUntil: "networkidle2" }
    );
    await page.screenshot({
      path: `${__dirname}/${uuidv4()}.jpeg`,
    });
  }
  await browser.close();
})();
