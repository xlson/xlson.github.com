---
layout: post
title: Getting started with GitHub Pages
---

{{ page.title }}
=========

[Github Pages](http://pages.github.com/) is something as simple as
a GitHub service for serving up static HTML from a GitHub
repository. It's the perfect place for project documentation, like
[Javadoc](http://en.wikipedia.org/wiki/Javadoc), and that's what I've been using it for. It can also be used for blogging with [Jekyll](http://jekyllrb.com/) or even a complete site for your project.

## Tell me more!

GitHub Pages (hence called Pages) can be tied to a project by creating a special branch called `gh-pages`, or directly to your account by creating a repository called `yourname.github.com`.

Also, saying it only feeds static HTML is like telling only part of
the story. Pages can be used together with a couple of different
templating systems (like [Markdown](http://daringfireball.net/projects/markdown/)) or as I mentioned earlier, the
static blog-generator [Jekyll](http://jekyllrb.com/), to easily keep
a web presence for yourself or your project. As every part of a Pages
page is in a GitHub repository it's really easy to update and work with.

## Getting started

### Creating your personal page

Pages is really quite easy to use. Wanna create a site for yourself?
Follow this 5 step guide to get started. 

**Important:** there's currently an issue regarding Pages and pushing
  over http, which means, it just won't work. So use normal Git over
  SSH instead.

1. Create a new repo named `yournick.github.com` (`xlson.github.com` in my case)
2. Create a simple welcome page to verify that it's working (an
index.html with Hello World is quite enough)
3. Verify that you've received a notification from GitHub that they've
rebuilt your Page (normally within seconds)
4. Wait for your Page to be created (will take up to 10 minutes the
first time, probably just seconds after that)
5. GitHub page will be available at
http://yournick.github.com/ when it's ready

### Creating a project page

Creating the project page is about as easy as creating a personal
page, but a little different. Instead of residing in a new repository
it will live in a special branch (of your project repository) called `gh-pages`. 

1. Go into "Admin" mode on your GitHub project
2. Click the GitHub Pages checkbox and then the "Automatic GitHub Page
Generator"
3. Choose the options you'd like and hit the "Create Page" button
after that (it doesn't matter that much what you choose as you'll
probably remove the generated page afterwards anyway)
4. Follow steps 3-4 from the previous checklist for "Creating your personal page"
5. GitHub page will be available at
`http://yournick.github.com/projectname/` when it's ready
6. Create a new local clone of your repository (check your GitHub
project for links, in my case:  `git clone git@github.com:xlson/groovycsv.git groovycsv-pages`)
7. Go into the new `projectname-pages` directory and checkout the
`gh-pages` branch. (`git checkout origin/gh-pages -b gh-pages`)
8. Start working on the `gh-pages` branch and push to `origin gh-pages`

You could work with the `gh-pages` branch in your ordinary repository
but I find it's easier to manage when you have a separate folder for
the page branch.

## Templating using Markdown

We're just about finished, but I'm going to cover one more thing,  and
that's how to create use the [Markdown](http://daringfireball.net/projects/markdown/) templating system.

Create a file named `demo.markdown` in your repo and add the following
content:

    ---
    title: This will be used as the <title> of the page
    ---
    
    # This is a H1

    [the clickable text](http://xlson.com/)

    * Bullet lists are also easy to create
    * One more

**Important:** the top part containing the `---` and `title` segment
  is required and if you skip it, no conversion from Markdown to HTML
  will happen.

Try pushing the new file to your `gh-pages` branch, or personal repository. GitHub will turn this template into an ordinary HTML file named
`demo.html` using the conversions specified in the sample. Pages
supports a few
other templating engines (like [Textile](http://textile.thresholdstate.com/)) but Markdown is the only one I
use.

There's also support for the static blog generator Jekyll (which I've used to
create [this](http://github.com/xlson/xlson.com/) blog). Getting
started with Jekyll is out of the scope of this article, but if you've
gotten this far, getting Jekyll running should be no problem. Check
the "Getting Started" instructions over at
[Jekyllrb.com](http://jekyllrb.com/) to get started.

## Rounding it off

I've had some problems with GitHub Pages and that's where this guide
comes from. I'm hoping this can help others to not make the same
mistakes I did. But even with those problems I think the features GitHub
provide via GitHub Pages is really great. It's a simple way to put up
both documentation and a project site, or even a blog without having
to think about hosting at all.

So, in closing: Big thanks to they guys over at GitHub! :)

## Further reading

* [GitHub Pages](http://pages.github.com/)
* [Markdown](http://daringfireball.net/projects/markdown/)
* [Jekyll](http://jekyllrb.com/)
* [Source for Mojombo's Blog (The creator of Jekyll)](https://github.com/mojombo/mojombo.github.com)
