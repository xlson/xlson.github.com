---
layout: post
title: Introducing csv-parser
---

{{ page.title }}
=========

Not that long ago I found I had the need to parse some csv data. Well that's easy - right? Yeah it is, most of the time at least. But what I found while surveying my options was that while it is easy, there really isn't a Groovy way to do it. So with @[goeh's](http://twitter.com/goeh)
[ExcelBuilder](http://www.technipelago.se/blog/?p=44) as inspiration I started hacking away at a new library.

For me there was 2 goals, first to get access to the csv data using header names and the second to be able to use the Groovy collection processing methods directly on the data to allow for some nifty parsing.

csv-parser is just that, a library to make csv processing just a little bit Groovier. The library uses [opencsv](http://opencsv.sourceforge.net/) behind the scenes and merely tries to add a thin layer of "Groovy-ness" to the mix.

At the moment there's no official release but I'll link a build at the end of this post. If you're out to get the latest code it's an easy match to get the [source](http://github.com/xlson/csv-parser/) and build it with [Gradle](http://www.gradle.org/). I plan to get a 0.1 version out the door soon and get that up on a maven repo for easy access. csv-parser is pretty much feature-complete, so nothing big should change while moving from SNAPSHOT to the 0.1 release.

## Features

* Accessing values using header names
* Iteration using the ordinary collection methods (`findAll`, `collect`
  and so on)
* Support for custom separator, quoteChar and escapeChar

## Usage

The parse method returns an iterator over the rows in the csv. This
means we can use any of the default groovy ways to iterate. Here we'll see an example of filtering data in the csv using the `findAll` method. `:` is used as separator to demonstrate how to use a custom `separator`.

    import com.xlson.csvparser.CsvParser

    def csv = '''Name:Lastname:YearBorn
    Bette:Midler:1945
    Roger:Moore:1927
    Dan:Aykroyd:1952'''

    def actors = new CsvParser().parse(csv, separator: ':')
    
    // List all actors that was born after 1950
    actors.findAll { (it.YearBorn as int) > 1950 }.each {
        println "$it.Name $it.Lastname was born in $it.YearBorn"
    }

**Output:**

    Dan Aykroyd was born in 1952

## More information

For further information about the library I'd suggest you visit the [project page](http://xlson.github.com/csv-parser/) on github. There you'll find links to the [source](http://github.com/xlson/csv-parser/), build instructions and even [current bugs and enhancements](http://github.com/xlson/csv-parser/issues).

*Latest build:* [csv-parser-0.1-SNAPSHOT.jar](/files/csv-parser-0.1-SNAPSHOT.jar) (Depends on [opencsv 2.0](http://opencsv.sourceforge.net/))

Many thanks to Glen Smith and the other's in the opencsv team for
doing all the heavy lifting.

## One more thing

I'm thinking csv-parser is a pretty lousy name that doesn't that doesn't stand out at all. Haven't figured anything better out myself and would really love some suggestions in the comments!
