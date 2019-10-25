package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class BaiduSearch_Page {
    public BaiduSearch_Page(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "kw")
    WebElement keyword;

    @FindBy(how = How.ID, using = "su")
    WebElement searchbtn;

    public void setKeyword(String strKeyWord) {
        keyword.sendKeys(strKeyWord);
    }

    public void clickSearchbtn() {
        searchbtn.click();
    }

//    public void fill_SearchDetails(String strKeyWord) {
//        setKeyword(strKeyWord);
//        clickSearchbtn();
//    }

}
