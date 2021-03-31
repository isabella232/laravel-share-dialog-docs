---
id: searchable
title: Searchable
sidebar_label: Searchable
slug: /searchable
---

If you want to provide an option to search users then you can create a class that implements **UserContactsInterface**.php from the package and define the **getUserContacts** function.

The return type of the **getUserContacts** function should be a string containing the JSON representation of an array of objects where each object denoting a user must have an **"email"** attribute.

```php
"[
    { email: '', ... },
    { email: '', ... },
    { email: '', ... }
]"
```

For example, you can create a class as **SendUserContacts** which implements **UserContactsInterface** and perform an operation to get users in the **getUserContacts** function:

```php
<?php

namespace App\Repository;

use App\Models\User;
use Geekyants\Sharedo\Interfaces\UserContactsInerface;

class SendUserContacts implements UserContactsInerface
{

    public function getUserContacts($query)
    {
        $users = Some operation to get users
        $users = json_encode($users); //convert users array to json string
        return $users;
    }
}
```

In sharedo.config file set the **"typehead"** key to the **SendUserContacts** class path:

```php
"typehead" => "App\Repository\SendUserContacts"
```
