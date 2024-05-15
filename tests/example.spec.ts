import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://real-estate.ctruh.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Explore/);
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://real-estate.ctruh.com/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });

async function navigateAndClickButton(
  page,
  url: string,
  buttonText: string,
  expectedUrl: string
) {
  await page.goto(url);

  // Find all buttons with the specified text
  // const button = page.locator(`button:has-text("${buttonText}")`);

  // // Log the count of buttons found
  // const count = await button.count();
  // console.log(`Found ${count} buttons with the text '${buttonText}'.`);
  await page.getByRole("button", { name: buttonText }).click();

  // Click the first button if it exists
  // if (count > 0) {
  // await button.first().click();
  // console.log(`Clicked the first button with text '${buttonText}'.`);
  // Wait for URL to change and check it
  await expect(page).toHaveURL(expectedUrl);
  // }
}

// Define tests using the general function
test("Navigate to 'Get Started' page and click", async ({ page }) => {
  await navigateAndClickButton(
    page,
    "https://real-estate.ctruh.com/",
    "Get Started",
    "https://real-estate.ctruh.com/get-started"
  );
});

test("Navigate to 'Apartment Complex' page and click", async ({ page }) => {
  await navigateAndClickButton(
    page,
    "https://real-estate.ctruh.com/get-started",
    "Apartment Complex",
    "https://real-estate.ctruh.com/amenities/Apartment%20Complex/"
  );
});

test("Navigate to 'Tower A' page and click", async ({ page }) => {
  await navigateAndClickButton(
    page,
    "https://real-estate.ctruh.com/amenities/Apartment%20Complex/",
    "Tower A",
    "https://real-estate.ctruh.com/amenities/Apartment%20Complex/Tower%20A"
  );
});

test("Navigate to '3BHK' page and click", async ({ page }) => {
  await navigateAndClickButton(
    page,
    "https://real-estate.ctruh.com/amenities/Apartment%20Complex/Tower%20A",
    "Enter",
    "https://real-estate.ctruh.com/amenities/Apartment%20Complex/Tower%20A/3BHK"
  );
});
