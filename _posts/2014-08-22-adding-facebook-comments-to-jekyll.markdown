---
layout: post
title: "Social integration in Jekyll"
date: "2014-08-22"
image: /assets/images/facebook_comments.jpg
---



The problem with jekyll, everybody will tell you, it's the comments.

The biggest advantage of the blogging framework is that it has no need for a Data base, but in the case it becomes it's weakness.

**No Data Base = No Dynamic Data = No Comments**

But discuss, facebook and some others provide a commenting sytem that you can integrate to your blog.

Beeing a facebook user, for my blog i choosed the facebook comments integration, and this is how i made it work.

The integration is realy simple :

start by <a href="https://developers.facebook.com/docs/plugins/comments" target="_blank">https://developers.facebook.com/docs/plugins/comments</a>

* create an App

*  copy and paste the generated code like in the example bleow

  * the **SDK** inclusion script

  * the **.fb-comments DIV** between an **"if statement"** so it becomes simple to disable the comments when needed (globally or in a choosen page)

{% highlight html %}
<!-- Begin include facebook JS SDK -->
<div id="fb-root"></div>
<script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&appId=YourAppID&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>
<!-- End include facebook JS SDK -->

<!-- Begin Comments DIV -->
{{ "{% if site.comments and if page.comments != false" }}%}
  <div class="fb-comments" data-href="{{ " {{ site.url " }}}{{ " {{page.url " }}}}" data-numposts="5" data-colorscheme="light" width="700px" style="padding-top:50px;"></div>
{{ "{% endif " }}%}
<!-- End Comments DIV -->
{% endhighlight %}


Add a line in your **_config.yml**:

{% highlight YAML %}
comments: yes
{% endhighlight %}


And Now your are ready to get comments on your articles


----------


Now we are going to add some sharing buttons (facebook, google+, Twitter)

Here are the URLs to get the code to include:

* <a href="https://about.twitter.com/fr/resources/buttons" target="_blank">https://about.twitter.com/fr/resources/buttons</a> for twitter button

* <a href="https://developers.facebook.com/docs/plugins/like-button" target="_blank">https://developers.facebook.com/docs/plugins/like-button</a> for facebook like/share button

* <a href="https://developers.google.com/+/web/share/" target="_blank">https://developers.google.com/+/web/share/</a> for the google plus button

{% highlight html %}
{{ "{% if site.share or page.share != false"}} %}
<div class="social_share">
  <span>
    <div class="fb-like" data-href="{{ " {{ site.url " }}}{{ " {{page.url " }}}}" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true" style="padding-bottom:30px"></div>
  </span>
  <span>
    <script src="https://apis.google.com/js/platform.js" async defer>
      {lang: 'fr'}
    </script>
    <div class="g-plusone" data-size="medium"></div>
  </span>
  <span>
      <a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
      <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
  </span>
</div>
{{ "{% endif"}} %}
{% endhighlight %}

And dont forget to add this to your **_config.yml** :

{% highlight YAML %}
share: yes
{% endhighlight %}
