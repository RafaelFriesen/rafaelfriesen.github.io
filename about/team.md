---
layout: page
title: Mein Team
tags: [about, team]
date: 2019-03-13
comments: false
---
{% assign sorted_team = site.team | sort: 'order' %}
{% for role in sorted_team %}
  <p class="btn">
    <a href="{{ role.url }}">
      <img src="{{ site.url }}/assets/img/{{ role.image }}" title="{{ role.comment }}">
      <b>{{ role.position }}:</b> <i>{{ role.name }}</i>
    </a>
  </p>
{% endfor %}
