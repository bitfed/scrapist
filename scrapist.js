/*jslint node: true */
'use strict';


var scraperjs = require('scraperjs');

var searchUrl = 'http://sfbay.craigslist.org/search/sfc/roo?minAsk=550&maxAsk=850';

scraperjs.DynamicScraper.startFactory();

var scraperPromise = scraperjs.DynamicScraper.create(searchUrl)
  .scrape(function () {
    console.log(window.location.host);
    return $('p.row > a[href]').map(function () {
      return $(this).attr('href');
    }).get();
  }, function (result) {
    scraperjs.DynamicScraper.create('http://' + searchUrl.split('/')[2] + result[0])
      .scrape(function () {
        return $('h2.postingtitle span.postingtitletext').text();
      }, function (result) {
        console.log(result);
    });
    scraperjs.DynamicScraper.closeFactory();
  });
