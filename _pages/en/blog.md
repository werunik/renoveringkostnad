---
layout: en/page
title: Blog
permalink: /en/blog
lang: en
---
<section class="bg-white cf dark-gray pa4 pt3-ns pb5-ns ph5-ns">
  <div class="fl w-100 mt4 mb5">
    <div class="f5 fw3 mw8-ns center lh-copy">
      {% for post in site.posts %}
      <div class="fl w-100 pv2 ph4-ns">
        <h3 class="f3 fw4 pa0 ma0">
          <a href="{{ post.url }}" class="brand link dim" title="{{post.title}}">{{post.title}}</a>
        </h3>
        <p class="f5 fw3 mv1 mb4-ns">{{ post.content | strip_html | truncate: 250 }}</p>
        <ul class="list pa0">
          <li class="dib mr3">
            <img src="/assets/images/icons/news-gray.svg" class="h1 v-mid dib" alt="News">
            <span class="ttu f6 dib">{{ post.category }}</span>
          </li>
          <li class="dib">
            <img src="/assets/images/icons/calendar-gray.svg" class="h1 v-mid dib" alt="Calendar">
            <span class="ttu f6 dib">{{ post.date | date: '%b %d' }}</span>
          </li>
        </ul>
      </div>
      {% endfor %}
    </div>
  </div>
</section>