package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:reports/cucumber-html-report",
//                "json:reports/cucumber.json",
                "json:target/cucumber.json",
                "junit:reports/cucumber-reports/cucumber.xml",
                "pretty"},
        features={"src/test/resources/Features"},
        glue = {"Steps"}
        )

public class Test_Runner {
//        push for job build
}
