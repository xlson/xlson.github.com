---
title: Releasing GroovyCSV 1.0
layout: post
published: false
---

{{ page.title }}
================

When GroovyCSV 0.2 was released back in [November of
2011](http://xlson.com/2010/11/08/groovycsv-0.2-released.html) I
thought it might actually be the final release, at the time I couldn't think
of anything else to add. Still, calling a first release 1.0 is the
same as asking for trouble.

Now, 1 year and 3 months later, with no mayor issues and only few bits
of new code I'm confident enough to call the next
release 1.0.

## Additions since 0.2

* Support for guessing separator and/or quote character
* Support for reading csv without headers
* Support access of values by index instead of column names
* Support for setting custom column names

A special thanks goes out to [Antoine
Roux](https://github.com/antoineroux) for writing the autodetection feature!

## Examples of the new features

#### Autodetection of separator

One of the new features in this release is the possibility to
autodetect what separator and quote characters are used.

These chars are used for autodetection:

    Separators = ,;:|
    Quotes = "'%

*Example:*

    @Grab('com.xlson.groovycsv:groovycsv:1.0')
    import static com.xlson.groovycsv.CsvParser.parseCsv
    
    def csv = '''Name:Lastname
    Mark:Andersson
    Pete:Hansen'''
    
    def data = parseCsv(csv, autoDetect:true)
    for(line in data) {
        println "$line.Name $line.Lastname"
    }

*Output:*

    Mark Andersson
    Pete Hansen


#### Parsing a headerless file

Another feature in this release is better tooling to handle csv data
without column names at the top, or with bad names. For example, if
there's no header line, you will probably wanna read the first line,
do it by setting
`readFirstLine:true`. After that you can either access the values
using their index or by setting custom column names, both is
demonstrated below.

*Example:*

    @Grab('com.xlson.groovycsv:groovycsv:1.0')
    import static com.xlson.groovycsv.CsvParser.parseCsv
    def csv = '''Apple,2
    Pear,5'''
 
    def data = parseCsv(csv, readFirstLine:true,
                        columnNames:['fruit', 'qty'])
    for(line in data) {
        println "$line.fruit ${line[1]}"
    }

*Output:*

    Apple 2
    Pear 5

## Getting GroovyCSV

GroovyCSV is available from Maven Central with the following information:

    Group: com.xlson.groovycsv
    Artifact: groovycsv
    Version: 1.0

Or you can download it from Github:

* [groovycsv-1.0.jar](https://github.com/downloads/xlson/groovycsv/groovycsv-1.0.jar)
* [groovycsv-1.0-javadoc.jar](https://github.com/downloads/xlson/groovycsv/groovycsv-1.0-javadoc.jar)

## More information

* [Source & Readme](http://github.com/xlson/groovycsv)
* [Javadoc](http://xlson.github.com/groovycsv/docs/1.0/javadoc)
* [Issue tracker](http://github.com/xlson/groovycsv/issues)

## One last thing

I'd love to hear from you if you're using GroovyCSV, especially
suggestions on improvements and bug reports. Keep the feedback coming! :)
