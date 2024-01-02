---
title: "Android Bot"
meta_title: "Android Bot"
description: "An automated bot that does repeated tasks on Android stimulated devices"
date: 2023-12-12T15:00:00Z
image: "/images/project/logo.png"
categories: ["Automation"]
author: "Jonathan Nguyen"
tags: ["android", "video games", "python", "memu"]
draft: false
github: "https://github.com/jonathanMNg/AndroidBot"
---

As a gamer at heart, I played a lot of video games. And if you're like me, you probably have played
the type of games that required you to do repeated tasks such as collecting resources, recruiting 
troops, upgrading buildings/infrastructure, or leveling up...And it can be painful if you have to 
run multiple accounts in order to support your main account. And that's when I started to think
outside the box...or cheating the game to be more specific.

As a developer, I tend to hate doing the same thing over and over again...I mean who doesn't? That's
why I wanted to become a developer in the first place. Ok, so back to the video game topic. 
Because I didn't know where to start, I decided to look for program that's already exists to help
me with this problem. 

The first program that I used was called [GnBots](https://www.gnbots.com). This program required me
to download a 3rd party program that's called [MEMU](https://www.memuplay.com/), a custom Android
stimulator. (The reason I mentioned the 3rd party program is that I also used it for my own
automation bot). So the GnBots work great, it was able to help me automated some tasks such as
collecting resources. However, in order to do more tasks, it required a paid license which
currently costs $50/month. Yikes! That's more than my Netflix subscription, so I 
decided to build my own automation bot instead.

I used Memu as my Android stimulator, and I found that it can be controlled using 
[Memuc](https://www.memuplay.com/blog/memucommand-reference-manual.html). BINGO!
After I familiar myself with the commands, I started to automate it with Python, which is
arguably the best scripting language. (Sorry Javascript)

<p align="center">
  <img src="/images/project/android_bot/python_superior.png"/>
</p>

