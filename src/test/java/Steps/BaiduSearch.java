package Steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import pageObjects.BaiduSearch_Page;

import java.util.concurrent.TimeUnit;

public class BaiduSearch {
    WebDriver driver;
    BaiduSearch_Page baiduSearchPage;

    @Before
    public void setUp()
    {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/Driver/chromedriver.exe");
        //打开Chrome浏览器
        driver=new ChromeDriver();
        //设定等待时间为5秒
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @Given("^Go to Baidu Site$")
    public void goToBaiduSite() {
        driver.get("https://www.baidu.com/");
    }

    @When("^I type the search keyword \"([^\"]*)\"$")
    public void iTypeTheSearchKeyword(String keyword) throws Throwable {
        baiduSearchPage = new BaiduSearch_Page(driver);
        baiduSearchPage.setKeyword(keyword);
    }

    @And("^click the search button$")
    public void clickTheSearchButton() throws InterruptedException{
        baiduSearchPage.clickSearchbtn();
        Thread.sleep(5000);
    }

    @Then("^verify page contains search keyword \"([^\"]*)\"$")
    public void verifyPageContainsSearchKeyword(String keyword) throws Throwable {
        Assert.assertTrue(driver.getPageSource().contains(keyword));
    }

    @After
    public void tearDown()
    {
        driver.quit();
    }
}
