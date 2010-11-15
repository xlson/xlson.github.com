---
layout: post
title: Speeding up your Gradle builds using the Daemon
---

{{ page.title }}
===========

[Gradle 0.9 Release Candidate 3](http://gradle.org/) is just out, and with it a bunch of changes. The main feature for this release is the new daemon that will help Gradle speeding up at startup. Also, it's a step in the direction of a final 0.9 release.

**Release notes:**

> New features since 0.9-rc-2:
> 
> * This release includes the experimental build daemon. To use the daemon, add the --daemon option when you run Gradle. The daemon is started automatically.
> 
> The new command-line options are documented at: [http://www.gradle.org/0.9-rc-3/docs/userguide/gradle_command_line.html#N153AB](http://www.gradle.org/0.9-rc-3/docs/userguide/gradle_command_line.html#N153AB).
> 
> Some background information on the daemon is available at: [http://docs.codehaus.org/display/GRADLE/Gradle+Build+Daemon](http://docs.codehaus.org/display/GRADLE/Gradle+Build+Daemon)
> 
> * Upgraded the code-quality plugin to use Checkstyle 5.3 and CodeNarc 0.11.

## Enter the Daemon

The daemon is basically a Java application that will run in the background and run your builds, thereby removing the initial cost of starting the JVM and load all the Gradle classes. While using it, my `gradle clean` went from 6 to 1 seconds. As you can imagine I will start using it extensively on my local computer, but, I wouldn't go as far as enable it on our Continous Integration server yet, the feature IS experimental after all. 

**Using the daemon:**
`gradle --daemon clean` this will start the daemon in the backgrund if it's the first time you use the `--daemon` flag. It stops automatically after a few hours it hasn't been used. Unless you enable it globally you will have to add `--daemon` to the commandline on every call to use it.

**Stopping the daemon:**
`gradle --stop` this IS an experimental feature and therefor you might have to stop it from time to time

**Enabling the daemon for all builds:**
Add  `-Dorg.gradle.daemon=true` to your `GRADLE_OPTS`, in my case this meant adding the following to my `~/.profile`.

    # Use Gradle daemon (experimental)
    export GRADLE_OPTS="-Dorg.gradle.daemon=true"

This is the same as adding `--daemon` every time you run gradle. There is also a `--no-daemon` flag that you can use when you'd like to disable it explicitly.

## Potential issues

I've already noticed that I have some builds that don't use the
`projectDir`property that is available in all Gradle builds and
therefor (incorrectly) run tasks in `~/.gradle/` instead of the
project directory. This is easily fixed but might be worth checking.


The latest release (0.9-rc3) is available over at [gradle.org](http://gradle.org/).
