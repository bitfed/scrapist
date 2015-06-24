/*jslint node: true */
'use strict';

// shutup JSHint!
var $ = $ || 'jquery';

var util = require('util');

var scraperjs = require('scraperjs');

var searchUrl = 'http://sfbay.craigslist.org/search/sfc/roo?minAsk=550&maxAsk=850';

function scrapePosting(url) {
  scraperjs.DynamicScraper.create(url)
    .scrape(function () {
      return {
            id: $('div.postinginfos > p.postinginfo:first-child').text().slice(' ')[2],
            title: $('h2.postingtitle span.postingtitletext').text(),
            neighborhood: $('h2.postingtitle .postingtitletext > small').text(),
            description: $('#postingbody').text()
      };
    }, function (postObject) {
      console.log(postObject);
  });
}


scraperjs.StaticScraper.create(searchUrl)
  .scrape(function ($) {
    return $('p.row > a[href]').map(function () {
      return $(this).attr('href');
    }).get();
  }, function (results) {
    var urlList = results.map(function (posting) {
      var postingUrl = 'http://' + searchUrl.split('/')[2] + posting;
      return postingUrl;
    });
    scraperjs.StaticScraper.create(urlList[0])
      .scrape(function ($) {
        console.log('scraping');
        return {
              id: $('div.postinginfos > p.postinginfo:first-child').text().slice(' ')[2],
              title: $('h2.postingtitle span.postingtitletext').text(),
              neighborhood: $('h2.postingtitle .postingtitletext > small').text(),
              description: $('#postingbody').text()
        };
      }, function (postObject) {
        console.log(postObject);
    });
  });



//getSearchResults(searchUrl);


scraperjs.DynamicScraper.closeFactory();

