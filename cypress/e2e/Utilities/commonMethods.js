export function dataSend(Xpath, value) {
  return cy.xpath(Xpath).type(value);
}
export function click(xpath) {
  return cy.xpath(xpath).click();
}
export function titleverify(expectedTitle) {
  return cy.title().should('eq', expectedTitle);
}
export function takeFullScreenshot(scName) {
  return cy.screenshot(scName);
}
export function specificscreenshot(xpath, scName) {
  return cy.xpath(xpath).screenshot(scName);
}
export function time() {
  return cy.wait(5000);
}
