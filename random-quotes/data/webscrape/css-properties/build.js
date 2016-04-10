'use strict'

var fs = require('fs')
var cheerio = require('cheerio')
var got = require('got')
var eachAsync = require('each-async')
var trailingLine = require('single-trailing-newline')

var PAGE1 = 'http://www.brainyquote.com/quotes/topics/topic_design.html'
var PAGE2 = 'http://www.brainyquote.com/quotes/topics/topic_design2.html'
var PAGE3 = 'http://www.brainyquote.com/quotes/topics/topic_design3.html'
var PAGE4 = 'http://www.brainyquote.com/quotes/topics/topic_design4.html'


function buildPage1Quotes (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE1
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var quotes = $('div#quotesList').find('a[title="view quote"]')
    var len = quotes.length
    var refItems = quotes.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('output/page1quotes.json', trailingLine(JSON.stringify(props)))
    })
  })
}

function buildPage1Authors (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE1
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var quotes = $('div#quotesList').find('a[title="view author"]')
    var len = quotes.length
    var refItems = quotes.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('output/page1authors.json', trailingLine(JSON.stringify(props)))
    })
  })
}

function buildPage2Quotes (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE2
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var quotes = $('div#quotesList').find('a[title="view quote"]')
    var len = quotes.length
    var refItems = quotes.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('output/page2quotes.json', trailingLine(JSON.stringify(props)))
    })
  })
}


function buildPage2Authors (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE2
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var quotes = $('div#quotesList').find('a[title="view author"]')
    var len = quotes.length
    var refItems = quotes.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('output/page2authors.json', trailingLine(JSON.stringify(props)))
    })
  })
}


function buildPage3Quotes (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE3
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var quotes = $('div#quotesList').find('a[title="view quote"]')
    var len = quotes.length
    var refItems = quotes.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('output/page3quotes.json', trailingLine(JSON.stringify(props)))
    })
  })
}


function buildPage3Authors (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE3
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var quotes = $('div#quotesList').find('a[title="view author"]')
    var len = quotes.length
    var refItems = quotes.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('output/page3authors.json', trailingLine(JSON.stringify(props)))
    })
  })
}


function buildPage4Quotes (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE4
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var quotes = $('div#quotesList').find('a[title="view quote"]')
    var len = quotes.length
    var refItems = quotes.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('output/page4quotes.json', trailingLine(JSON.stringify(props)))
    })
  })
}


function buildPage4Authors (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE4
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var quotes = $('div#quotesList').find('a[title="view author"]')
    var len = quotes.length
    var refItems = quotes.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('output/page4authors.json', trailingLine(JSON.stringify(props)))
    })
  })
}

buildPage1Quotes()
buildPage1Authors()
buildPage2Quotes()
buildPage2Authors()
buildPage3Quotes()
buildPage3Authors()
buildPage4Quotes()
buildPage4Authors()
