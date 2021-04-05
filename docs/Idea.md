---
id: idea
title: Idea
sidebar_label: Idea
slug: /
---

## Introduction

**Sharedo** is a composer package for Laravel projects which allows other users to read or write your project's entities.  
It helps you manage roles and permissions in an app by using Eloquent Models. You can assign read or write permissions to a user and remove permissions as required.

## Motivation

We realised that it is very time consuming to add a share functionality to Laravel projects and this can hinder the development process. This package aims to solve this problem by enabling you to share your project's entities with other users easily.

## Philosophy

This package makes use of [InertiaJs](https://inertiajs.com/) for the data flow between backend and frontend without writing any APIs and [Bouncer](https://github.com/JosephSilber/bouncer) to assign roles and permissions to other users.
