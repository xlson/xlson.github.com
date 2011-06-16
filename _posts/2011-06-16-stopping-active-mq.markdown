---
title: Stopping ActiveMQ
layout: post
published: false
---

{{ page.title }}
================


* Problems turning off ActiveMQ
* Got stacktraces when turning off
* jps didnt work but jstack did
* recollected having troubles with tmp-dirs and the pid files java uses
* realises there already was an /tmp/hsperfdata_active-folder with another owner than the current activemq user


## Backstory

A collegaue at my current gig had problems with the stop-script for ActiveMQ so we started looking at it together. This is the exception we got:

    java.io.IOException: Could not map vmid to user Name
        at sun.management.ConnectorAddressLink.importFrom(ConnectorAddressLink.java:100)
        at org.apache.activemq.console.command.AbstractJmxCommand.handleOption(AbstractJmxCommand.java:279)
        at org.apache.activemq.console.command.ShutdownCommand.handleOption(ShutdownCommand.java:156)
        at org.apache.activemq.console.command.AbstractCommand.parseOptions(AbstractCommand.java:73)
        at org.apache.activemq.console.command.AbstractCommand.execute(AbstractCommand.java:45)
        at org.apache.activemq.console.command.AbstractJmxCommand.execute(AbstractJmxCommand.java:316)
        at org.apache.activemq.console.command.ShellCommand.runTask(ShellCommand.java:143)
        at org.apache.activemq.console.command.AbstractCommand.execute(AbstractCommand.java:57)
        at org.apache.activemq.console.command.ShellCommand.main(ShellCommand.java:85)
        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
        at java.lang.reflect.Method.invoke(Method.java:597)
        at org.apache.activemq.console.Main.runTaskClass(Main.java:251)
        at org.apache.activemq.console.Main.main(Main.java:107)

Easy to understand, right? 
