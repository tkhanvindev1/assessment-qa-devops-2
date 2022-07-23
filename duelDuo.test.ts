
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check that clicking the Draw button displays the div with id = “choices”', async () => {
    const robotChar = await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const displayChoices = await driver.findElement(By.id('choices'))
    const displayed = await  displayChoices.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
})

test('Check if  added Robot into Player-duo, not displayed in Player-duo after clicking Remove from Duo Buttons', async () => {
    const robotChar = await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const addRobot = await driver.findElement(By.xpath('//*[text()="Add to Duo"][1]')).click()
    await driver.sleep(4000)
    const displayedRobot = await driver.findElement(By.xpath('//*[text()="Remove from Duo"][1]')).click()
    await driver.sleep(4000)
    const yourDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await yourDuo.isDisplayed()
    expect(displayed).not.toBe(true)

    


    

})