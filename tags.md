---
layout: page
title: Tags
permalink: /tags/
---

# Tags
<div>
    {% for tag in site.tags %}
    <a href="#{{ tag[0] | slugify }}" class="post-tag badge badge-info">
      <i class="fas fa-tag"></i>{{ tag[0] }}
    </a>
    {% endfor %}
</div>
<hr/>

{%- if site.tags.size > 0 -%}
{% for tag in site.tags %}
  <h3 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ site.baseurl }}/{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
{% else %}
<h3>No tags found</h3>
<p>Sorry.</p>
{% endif %}
