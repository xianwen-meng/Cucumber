$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BaiduSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Baidu Search",
  "description": "",
  "id": "baidu-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search in Baidu",
  "description": "",
  "id": "baidu-search;search-in-baidu",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Go to Baidu Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type the search keyword \"\u003ccontent\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verify page contains search keyword \"\u003ccontent\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "baidu-search;search-in-baidu;",
  "rows": [
    {
      "cells": [
        "content"
      ],
      "line": 9,
      "id": "baidu-search;search-in-baidu;;1"
    },
    {
      "cells": [
        "Cucumber"
      ],
      "line": 10,
      "id": "baidu-search;search-in-baidu;;2"
    },
    {
      "cells": [
        "TestNg"
      ],
      "line": 11,
      "id": "baidu-search;search-in-baidu;;3"
    },
    {
      "cells": [
        "DevOps"
      ],
      "line": 12,
      "id": "baidu-search;search-in-baidu;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16213642200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search in Baidu",
  "description": "",
  "id": "baidu-search;search-in-baidu;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Go to Baidu Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type the search keyword \"Cucumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verify page contains search keyword \"Cucumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BaiduSearch.goToBaiduSite()"
});
formatter.result({
  "duration": 6400485000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 27
    }
  ],
  "location": "BaiduSearch.iTypeTheSearchKeyword(String)"
});
formatter.result({
  "duration": 261668100,
  "status": "passed"
});
formatter.match({
  "location": "BaiduSearch.clickTheSearchButton()"
});
formatter.result({
  "duration": 5156517200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 37
    }
  ],
  "location": "BaiduSearch.verifyPageContainsSearchKeyword(String)"
});
formatter.result({
  "duration": 183493300,
  "status": "passed"
});
formatter.after({
  "duration": 1846057200,
  "status": "passed"
});
formatter.before({
  "duration": 11518954900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search in Baidu",
  "description": "",
  "id": "baidu-search;search-in-baidu;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Go to Baidu Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type the search keyword \"TestNg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verify page contains search keyword \"TestNg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BaiduSearch.goToBaiduSite()"
});
formatter.result({
  "duration": 2834006100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestNg",
      "offset": 27
    }
  ],
  "location": "BaiduSearch.iTypeTheSearchKeyword(String)"
});
formatter.result({
  "duration": 307816500,
  "status": "passed"
});
formatter.match({
  "location": "BaiduSearch.clickTheSearchButton()"
});
formatter.result({
  "duration": 5186982500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestNg",
      "offset": 37
    }
  ],
  "location": "BaiduSearch.verifyPageContainsSearchKeyword(String)"
});
formatter.result({
  "duration": 83875700,
  "status": "passed"
});
formatter.after({
  "duration": 845525500,
  "status": "passed"
});
formatter.before({
  "duration": 11097140900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search in Baidu",
  "description": "",
  "id": "baidu-search;search-in-baidu;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Go to Baidu Site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type the search keyword \"DevOps\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verify page contains search keyword \"DevOps\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BaiduSearch.goToBaiduSite()"
});
formatter.result({
  "duration": 2225201900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevOps",
      "offset": 27
    }
  ],
  "location": "BaiduSearch.iTypeTheSearchKeyword(String)"
});
formatter.result({
  "duration": 379026100,
  "status": "passed"
});
formatter.match({
  "location": "BaiduSearch.clickTheSearchButton()"
});
formatter.result({
  "duration": 5183080300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevOps",
      "offset": 37
    }
  ],
  "location": "BaiduSearch.verifyPageContainsSearchKeyword(String)"
});
formatter.result({
  "duration": 131612800,
  "status": "passed"
});
formatter.after({
  "duration": 1431944100,
  "status": "passed"
});
});