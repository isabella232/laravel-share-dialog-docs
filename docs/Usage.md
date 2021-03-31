---
id: Usage
title: Usage
sidebar_label: Usage
slug: /Usage
---

You must define a relation `user` for the entity model that you want to share. The relation should return the instance of the user who created it.

To share your entity with other users visit:

```jsx
{APP_URL}/sharedo/{entity_name}/{entity_id}
```

For example, to open a Sharedo for your project model with id 123, visit:

```
{APP_URL}/sharedo/projects/123
```

> Note: **The entity_name should have the same name as that of the database migration corresponding to the model that you want to share.**

> Note: **Sharedo sends error messages back to your application in the error props.**

If you invite a user who is not present in your database, Sharedo automatically creates it in your users table. Also, a new entry is inserted into the `new_users_sharedo` table referencing the user's id as a foreign key and sets `has_ever_logged_in property` to false.

This can be useful if you want to differentiate between users created by Sharedo and users created by the normal sign-up flow.

To restrict other users from accessing your entities, you have to explicitly use the Bouncer methods [here](https://github.com/JosephSilber/bouncer#cheat-sheet).

> Note: **Uses who are given write access to the entity can also share that entity with other users.**
