---
id: basic
title: Basic
sidebar_label: Basic
slug: /basic
---

You can customise the functionality of sharedo easily by making changes in the sharedo.php file present in your config folder.

1. If your model files are present in some folder other than `"App\Models\\"`, you can set the `modelPath` to the path of that folder:

   ```jsx
   "modelPath" => "App\Models\\"
   ```

2. If you want to add your own custom middleware to the sharedo, append it to the middleware array. For example, if you want to add the `"admin"` middleware, then your middleware array will look like this:

   ```jsx
   "middleware" => ['web', 'auth','admin']
   ```

3. If you want only certain entities to be shareable, you can add them to the `restrict-entities` array. For instance, if your want only the `files` entity to be shareable, your array will look like this:

   ```jsx
   'restrict-entities' => ['files'],
   ```
