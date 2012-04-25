---
title: Deploying Minecraft.net in 14 minutes, no way
layout: post
published: false
---

{{ page.title }}
================

Every time we deployed Minecraft.net it would take ~ 14
minutes, that's a lot of time. During that time I would either do
nothing or get started on something else, losing focus and probably
missing any potential problems with the deploy.

That could not stand, especially considering the biggest reasons for
the deployment times was easy to remove from the equation.

## Reasons for our slow deploy

1. Uploading files from the Mojang office in Sweden to Amazon EC2 in America
2. Each server downloads its own dependencies


## 1. Location

Our build and deploy server was located in the office and was the culprit
responsible for the first problem. Setting up a fresh [Jenkins](http://jenkins-ci.org/) &
[Rundeck](http://rundeck.org/) in the cloud was easy enough and fixed the problem for
us, bringing down the deployment times to more sensible levels just by
putting the servers closer to eachother. I'd say this probably took
down the deployment times to 3 minutes or so, which is almost 5 times
better than before.

## 2. Packaging

It's not that I wasn't happy with our new deployment times, but the second problem was in a
sense more important. Each server was running the dependencies task of
play (Play Framework) at application startup, fetching its dependencies
and relinkling modules to where they were located on disk. This meant
startup took a bit longer than strictly necessary, which in turn
affected deployment times. More importantly, it meant that there was a
risk that the libraries we used would change between application restarts.

A deploy should send out a self contained distribution to the server
in question, anything else opens up the risk for unexplained problems
during runtime. Now, there's almost always some kind of moving parts
like this, but they should be kept to a minimum. Dependencies should
rarely be one of them.

It turns out Play 1 haven't got a solution for packaging a
self-contained distribution. Running `play dependencies --sync --forProd` 
will download all the needed libraries to the lib folder and
remove some of the cruft that isn't needed in production. It handles
everything except modules, which for some reasons aren't packaged with
the application. Running the dependencies command actually links the
modules with the location on disk where play itself is located,
something that might differ from server to server.

I fixed this by packaging the modules with the distribution  and adding a
few extra lines to the start-script that would relink the module
reference files to the once packaged with the distribution on
application startup. This removed the ~20 seconds per server it took to run
the dependencies command and pushed the deployment time down to ~1 minute.

## Benefits and cost

It took me 2 days to do this, which is ~960 minutes (8 * 2 * 60). We do roughly 5 deploys each
week, perhaps even more now that they are quicker. This means we'll
save roughly 65 minutes ((14-1) * 5) each week, or 292.5 minutes
(65 * 4.5) in a month. Given this we can see that the time spent on
making the deploys faster will be recuperated in ~3 months.

More importantly, I can now do deploys more lightheartedly as I know
it will only take a short period of my my time. Deploying even the
smallest of change becomes a no-brainer and features should no longer
pile up into a big and scary deploy at the end of the sprint. Making deploys go faster might change the way I work
and that's the real advantage here.

Thanks goes out to my former collegaue Daniel Brolund who talked to me
about [team
minutes](http://danielbrolund.wordpress.com/2007/08/12/how-much-is-a-team-minute/)
and the way making something faster might affect more than the time
spent on doing the task itself.
