---
id: listeners
title: Notifications
sidebar_label: Notifications
slug: /listeners
---

You can also send email notifications to the users when they are given access to an entity. Sharedo fires an **UserAbilityChanged** event when a user's access is changed and attaches the **SendUserAbilityChangedNotification** listener to it. If you want to send an email notification, make the following changes in EventServiceProvider:

```jsx
use Geekyants\Sharedo\Events\UserAbilityChanged;
use Geekyants\Sharedo\Listeners\SendUserAbilityChangedNotification;
protected $listen = [
    ...
        UserAbilityChanged::class => [
            SendUserAbilityChangedNotification::class,
        ]

    ];
```

You can also modify the email template by publishing the sharedo mail resources. After running this command, the mail notification template will be located in the `resources/vendor/sharedo/mail` directory:

```jsx
php artisan vendor:publish  --tag="mail"
```

You can attach your own listeners to the event. For example, if you want to attach a **SendSlackNotification** listener to the **UserAbilityChanged** event, you can do as follows:

```jsx
use Geekyants\Sharedo\Events\UserAbilityChanged;

...

protected $listen = [
        UserAbilityChanged::class => [
            SendSlackNotification::class,
        ]
    ];
```
