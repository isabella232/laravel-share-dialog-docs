---
id: middleware
title: Middleware
sidebar_label: Middleware
slug: /middleware
---

If you want to add your own custom middleware to the share-dialog, append it to the middleware array. For example, if you want to add the `"admin"` middleware, then your middleware array will look like this:

```
"middleware" => ['web', 'auth','admin']
```
