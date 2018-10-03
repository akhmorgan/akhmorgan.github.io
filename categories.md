---
layout: page
title: Categories
permalink: /categories/
---

# Categories

<div>
    {% for category in site.categories %}
    <a href="#{{ category[0] | slugify }}" class="post-category badge badge-info">
      <i class="far fa-folder"></i>{{ category[0] }}
    </a>
    {% endfor %}
</div>
<hr/>

{%- if site.categories.size > 0 -%}
{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
{% else %}
<h3>No categories found</h3>
<p>Sorry.</p>
{% endif %}
