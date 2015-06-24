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
    var postingUrl = 'http://' + searchUrl.split('/')[2] + result[0];
    scraperjs.DynamicScraper.create(postingUrl)
      .scrape(function () {
        return {
          id: $('div.postinginfos > p.postinginfo:first-child').text().split(' ')[2],
          title: $('h2.postingtitle span.postingtitletext').text(),
          description: $('#postingbody').text(),
          url: 'http://' + window.location.host + window.location.pathname
        };
      }, function (result) {
        console.log(result);
    });
    scraperjs.DynamicScraper.closeFactory();
  });
