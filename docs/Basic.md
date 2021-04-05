---
id: basic
title: Basic
sidebar_label: Basic
slug: /basic
---

You can customise the functionality of Sharedo easily by making changes to the **sharedo.php** file present in your config folder.

1. If your files are not present in the `App\Models\\`, then change the modelPath to that location instead of `App\Models\\`.

   ```jsx
   "modelPath" => "App\Models\\"
   ```

2. To add your own custom middleware to Sharedo, append it to the middleware array.  
   For example, if you want to add the **"admin"** middleware, then your middleware array will look like this:

   ```jsx
   "middleware" => ['web', 'auth','admin']
   ```

3. If you want only certain entities to be shareable, you can add them to the  **restrict-entities** array.  
   For instance, if you want only the files entity to be shareable, your array will look like this:

   ```jsx
   'restrict-entities' => ['files'],
   ```
