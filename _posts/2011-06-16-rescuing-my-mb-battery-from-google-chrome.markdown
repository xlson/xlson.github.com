---
title: Rescuing my Macbook Pro's battery from Google Chrome
layout: post
---

{{ page.title }}
================

## The story

I've been a Google Chrome user for a long time and even ran with Chromium for a while before Google Chrome was released on the Mac. There's been problems with it now and then, but I've been a happy customer most of the time. That was until it started eating at the battery of my new Macbook Pro. But, I'm getting ahead of myself, let's take it from the start...

This february I started working with a couple of great guys at the small Stockholm-based consultancy [Agical](http://agical.se/). A couple of days into the gig my spanking new Macbook Pro arrived; I was giddy as a school-girl. The next monday I started working at a customer and haven't really used the mac much since then; such is the life of the consultant. After a while I noticed that my mac always seemed to be out of power, even when it had been full when I last closed the lid. That was something I had never experienced with my old macbook, even when I had left it lying around for a week or so.

I was heading off to Gr8Conf in Denmark a couple of weeks ago and thought to myself: "it's really time I figure out what's wrong with the battery". After some googling it turned out to be, not my battery, but instead Google Chrome. You see, Google Chrome uses a feature in OS X that turns on the more expensive Nvidia card, even if it really isn't doing anything special. This in turn not only eat a lot of power, but also make it harder for the Macbook Pro to get some much needed sleep, hence the constant power-shortage.

## The solution

There's a free tool called [gfxCardStatus](http://codykrieger.com/gfxCardStatus) which helped me figure my issue. Once installed I could see rightaway that the more expensive card was put into action as soon as Google Chrome was started. It also allowed me to setup so that the Nvidia card was never used while the computer was running on battery power. I guess it's really more of a workaround than a solution, but it works and it's now easy to know which card is used. It's still a myster why the macbook had a hard time going into sleep mode but it seems to have been solved by not using the expensive card while on battery.

Problem solved, I'm back to using Google Chrome again, without any
issues. Big thanks to Cody Krieger for the excellent gfxCardStatus app.

If you're interested in gfxCardStatus you can find it [here](http://codykrieger.com/gfxCardStatus).
