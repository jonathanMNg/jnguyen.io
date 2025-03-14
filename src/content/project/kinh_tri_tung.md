---
title: "Kinh Tri Tung"
meta_title: "Kinh Tri Tung"
description: "A mobile app for Buddhists reciting"
date: 2023-07-18T01:06:00Z
image: "/images/project/kinh_tri_tung/main.png"
categories: ["Application", "Mobile"]
author: "Jonathan Nguyen"
tags: ["dart", "flutter", "firebase", "realm"]
draft: false
---
As a Buddhist, I also practice reciting Buddha's teaching every day, and it's hard to carry the Buddhist books with me everywhere. That's why I created this mobile app.  It is designed as a mobile library for Buddist Texts and Scriptures. 
This app currently available on both [Google Play Store](https://play.google.com/store/apps/details?id=one.rollingst.kinh_tri_tung) and [Apple AppStore](https://apps.apple.com/us/app/kinh-tr%C3%AC-t%E1%BB%A5ng/id1670489805)


### Simple UI Design

I designed this app to make it as easy as possible for any Vietnamese Buddhist to use it, so the design is also as simple as possible.

However, the app is packed with many features such as PDF Viewer, Markdown Viewer, Full Features Music Player, Dark/Light mode, Dictionary Search...
The user can also increase/decrease the fontSize when they're reading.

![First Page](/images/project/kinh_tri_tung/1st_screen.png)

### Framework and Backends
1. This app is built with [Flutter](https://flutter.dev/) as a cross-platform native mobile app.
2. For state management, I used Flutter built-in setState side-by-side with [Bloc](https://bloclibrary.dev/#/) pattern.
3. I use [Supabase](https://supabse.com/) Postgres as a backend. 

