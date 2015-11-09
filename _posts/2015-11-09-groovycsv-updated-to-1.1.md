---
title: GroovyCSV updated to 1.1
layout: post
published: true
---

{{ page.title }}
================

It's been a couple of years and it's time for a small update to
GroovyCSV. There's a been a bug fix or two but the main news is the
option to get a map representation of your csv's line-data. A feature contributed by
[gmazelier](https://github.com/xlson/groovycsv/commits/master?author=gmazelier). Thank you!

## Example: Getting a map representation of a line

It's now possible to get a map representation of your line data using `line.toMap()`.

*Example:*

    @Grab('com.xlson.groovycsv:groovycsv:1.1')
    import static com.xlson.groovycsv.CsvParser.parseCsv
    
    def csv = '''ProjectName,Version,Year
    GroovyCSV,1.1,2015'''
    
    def data = parseCsv(csv)
    for(line in data) {
        println line.toMap()
    }

*Output:*

    [ProjectName:GroovyCSV, Version:1.1, Year:2015]

## Getting GroovyCSV

GroovyCSV is available from Maven Central:

    Group: com.xlson.groovycsv
    Artifact: groovycsv
    Version: 1.1

Or you can download it from Github:

* [groovycsv-1.1.jar](https://github.com/xlson/groovycsv/releases/download/releases%2F1.1/groovycsv-1.1.jar)
* [groovycsv-1.1-javadoc.jar](https://github.com/xlson/groovycsv/releases/download/releases%2F1.1/groovycsv-1.1-javadoc.jar)

## More information

* [Source & Readme](http://github.com/xlson/groovycsv)
* [Javadoc](http://xlson.github.com/groovycsv/docs/1.1/javadoc)
* [Issue tracker](http://github.com/xlson/groovycsv/issues)
