---
author: Charles Chi
layout: post
title: "Viral Markov"
date: 2015-10-20 22:00
comments: true
category:
 - datasci
tags:
 - nlp
 - python
 - ipython
 - data
 - news
---

Ahh! It's Viral!

12 of the Strangest Weather-Related Photographs Ever Taken . Wow . Watch These Rhinos Fly !

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcd3faromwen_LIR-gqLq1PX1x1_cJr5jX6Z0OGhU-d6yltN7B" style="width:400px;height:300px;">

<p>Viral and attention-grabbing headlines are certainly intriguing. I definitely fell for clickbait countless times! I suspect there is a formula to generating eye-catching, click-worthy headlines. Wouldn't it be great if we leveraged algorithms to tease apart some of this hidden structure within viral headlines? Well, this is what this exploration is all about. :)</p>

<img src="http://matpalm.com/rss.feed/p5/the_end_2.png" style="width:400px;height:300px;">

<p>The goal of the notebook is to demonstrate creation of simple Markov chain to generate viral headlines using real examples to build its vocabulary.</p>

<p>Firstly, a big thank you to the wonderful folks over at <a href="http://www.ripenn.com/" target="_blank">Ripenn</a> for providing a neat corpus. Data is available for download at end of this post: "<a href="http://www.ripenn.com/blog/7-things-marketers-can-learn-from-2616-viral-headlines/" target="_blank">7 Things Marketers Can Learn From 2,616 Viral Headlines</a>". I discovered this dataset which was referenced in <a href="https://blog.bufferapp.com/" target="_blank">Buffersocial</a>'s post "<a href="https://blog.bufferapp.com/the-most-popular-words-in-most-viral-headlines" target="_blank">How to Write The Perfect Headline: The Top Words Used in Viral Headlines</a>"
.</p>

<img src="http://www.brandignity.com/wp-content/uploads/2012/03/viral-news-yall.jpg" style="width:200px;height:150px;">

<p>My inspiration for building a Markov chain originated from these two posts:</p>
<ul>
    <li>"<a href="http://agiliq.com/blog/2009/06/generating-pseudo-random-text-with-markov-chains-u/">Generating pseudo random text with Markov chains using Python</a>"</li>
    <li>"<a href="http://www.onthelambda.com/2014/02/20/how-to-fake-a-sophisticated-knowledge-of-wine-with-markov-chains/">How to fake a sophisticated knowledge of wine with Markov Chains</a>"</li>
</ul>

<p>Thanks to Shabda Raaj and Tony Fischetti. I learned a great amount from these demonstrations, they're definitely worth a visit. In my ipython notebook, I assimilated some of their techniques and with my own experience working with text data.</p>

> <a href="http://nbviewer.ipython.org/github/cchi/viral-markov/blob/master/viral-markov-generator.ipynb" target="_blank"><img src="https://avatars3.githubusercontent.com/u/7388996" style="width:50px;height:50px;">notebook (viral-markov-generator.ipynb)</a>

<img src="http://mindprotein.com/wp-content/uploads/2015/11/Viral-Content-Blue-People-With-Arrows.jpg" style="width:500px;height:400px;">
