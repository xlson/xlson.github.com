---
layout: post
title: Out of Delicious and into your Couch
---

{{ page.title }}
===========

During december of 2010 it seemed Yahoo was going to pull the plug on
my favorite bookmarking service Delicious. It was later
revealed that they are going to sell it instead. But, before that was
known the web went into an uproar with blogs about how to salvage your
bookmarks and move inte another service. Not only that, A LOT of
developers have stepped up trying to fill the gap with new services
such as [liink.it](http://www.liink.it/).

Personally I've been wanting to try out [CouchDB](http://couchdb.apache.org/) as a bookmark handler
for some time. Couch with it's ability to bundle a webapp with the
database and simple replication (backup!?) seems like a potentially
great fit for bookmarks in the cloud. Said and done, when it seemed like
Delicious was going away I took the step out into the wild with
Jan-Piet Mens CouchApp
[Scrumptious](http://blog.fupps.com/2010/05/25/truly-scrumptious-bookmarks-in-couchdb/).

As the icing on the cake it's possible to get the bookmarks back into
the cloud using Scrumptious with a free hosted database from
CouchOne. Read on to learn how.

## Scrumptious

![Scrumptious UI on CouchOne](/images/scrumptious.png)

As it happens, I'm not the first person that thought CouchDB would be
a good place to put bookmarks. [Jan-Piet Mens](http://twitter.com/jpmens) has
already created a [CouchApp](http://couchapp.org/page/index) called Scrumptious. Scrumptious is a
web-application that lives inside CouchDB.

**Scrumptious features:**
* Bookmarklet for saving bookmarks
* Listing bookmarks by date or tag
* Export as bookmarks html for import into the browser of your choice
* Inline-editing of bookmarks

### A word of warning

Scrumptious is a cool app but it's in no way ready for non-techies (as
you will probably figure out during the install, if not earlier). The
bookmarklet doesn't work in Firefox 3.x currently and the
search-functionality isn't finished. Scrumptious also lacks all of the
social functionality of Delicious. If this puts you off maybe you'd be
better off looking at something like [Pinboard](http://pinboard.in/) or [Tagli.us](http://tagli.us/).

## Getting started with Scrumptious in the cloud

You could go to Github and get the code for Scrumptious and install it
into the CouchDB of your choice using couchapp, all of this is
documented in Jan-Piet's [post about the tool](http://blog.fupps.com/2010/05/25/truly-scrumptious-bookmarks-in-couchdb/).

But, there is an easier way. To get you started quickly, I've put up a
clean Scrumptious app on CouchOne. The only thing you need to do is
create your own database and replicate my clean install of
Scrumptious. I've done one minor change in my version of Scrumptious
to secure the bookmarks and that is to require that the user posting
and updating bookmarks is logged into the CouchDB administration
ui. This is just to add a little security so someone else cant come in
and remove all your bookmarks.

1. Create an account on CouchOne's [free (and beta)
hosting](http://www.couchone.com/get)
2. Setup an admin-account for your CouchDB instance using the
admin ui
`https://[chosen-subdomain].couchone.com/_utils]` (important as your
database will be completely open otherwise)
3. Create a database using the admin interface
4. Replicate my empty scrumptious database into your newly created database using
the Replicator part of the admin ui

    * On the left side you need to put the url to my clean install of Scrumptious: `http://xlson.couchone.com/scrumptious-fresh`
    * On the right side you should choose your newly created database.

5. At this point you're done and ready to head over to `https://[chosen-subdomain].couchone.com/[newly-created-database]/_design/app/index.html`

Take some time to play around with the ui, add the Bookmarklet to your
bookmarks bar and try it out. One thing you should know about CouchOne
hosting is that I don't know much about it and what it will cost in
the long run. At this point its free and completely without
guarantees so I'd really suggest you install CouchDB locally to take
backups of your database from time to time (once again using the
replication feature). 

## But where's my Delicious bookmarks?

Well, we still have one thing to do, and that's to export our
bookmarks from Delicous and move them into our cloud. We're gonna use
curl to get all your bookmarks, so open up your terminal and enter the
following (replace username with your delicious account). curl should
already be available if you run Mac OS X or a linux-flavor. If you're
stuck with Windows [cygwin](http://www.cygwin.com/) is problably your best option to get hold of
curl.

Download bookmarks using curl:

`curl -sf -u username -o mine.xml
https://api.del.icio.us/v1/posts/all`

After you've got your bookmarks you can either use Jan-Piet's
perl-script mentioned in [his
post](http://blog.fupps.com/2010/05/25/truly-scrumptious-bookmarks-in-couchdb/)
or my groovy alternative available
[here](https://gist.github.com/756095) (whatever floats your boat :)

To use my script you need groovy installed, available from
[Codehaus](http://groovy.codehaus.org/).

`groovy del2scrumptious.groovy -in mine.xml -out mine.json`

At this point we only need to push the bookmarks up to your couch in
the cloud, once again using curl.

    curl -u admin  -H "Content-Type: application/json" -X POST \ 
    http://[chosen subdomain].couchone.com/[newly_created_database]/_bulk_docs -d @mine.json


Head back to the web application; you bookmarked it in the last step
right? All your bookmarks should be available now. A word of warning
though, it might take a little while for the page to load the first
time you request it after uploading your bookmarks as that's when
CouchDB internally builds its view of the bookmarks that will be used
to list them.

Good luck with your cloud-hosted bookmarks!


**Further reading:**

* [My bookmarks](http://xlson.couchone.com/scrumptious/_design/app/_list/ls/bydate?limit=20&descending=true)
* [Truly scrumptious bookmarks in CouchDB](http://blog.fupps.com/2010/05/25/truly-scrumptious-bookmarks-in-couchdb/)
* [CouchApp](http://couchapp.org/)
* [CouchDB](http://couchdb.apache.org/)
* [Scrumptious with my modifications](https://github.com/xlson/scrumptious)
* [Scrumptious official repo](https://github.com/jpmens/scrumptious)

