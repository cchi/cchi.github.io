---
author: Charles Chi
layout: post
title: "Benford's Law"
date: 2015-11-21 22:52
comments: false
category:
 - datasci
tags:
 - mathematics
 - statistics
 - python
 - ipython
 - data
---

The Law of Benford! 

<img src="http://www.fraudriskanalysis.net/uploads/4/6/4/1/4641392/607573.png" style="width:250px;height:90px;"/>

Benford's Law is an intriguing phenomenon that I heard of in the past and always wanted to check it out for myself. This mathematical law has many applications, probably most well known to be used in Fraud Detection.

Imagine you have a large list of numbers, whether it is your own personal bank transactions, stock prices, bills, street addresses, mathematical constants, population counts, etc... you name it. Now, consider the leading digits for those numbers, which will be one of these digits: 1, 2, 3, 4, 5, 6, 7, 8, or 9. Which digit would you bet on if you were to choose only one? You might imagine the distribution of these leading digits are equal, with ~11.11% chance for each digit. Turns out, this assumption is incorrect, and we will use real data to see for ourselves!

<img src="http://mathworld.wolfram.com/images/eps-gif/BenfordsLaw_800.gif" style="width:500px;height:300px;"/>

Essentially, this is a mathematical law that describes frequency distribution of leading digits in many real-life numeric data. You can read more about [Benford's Law](https://en.wikipedia.org/wiki/Benford%27s_law) from its Wikipedia article.

I was reminded of Benford's Law after listening to a [Linear Digressions](https://www.udacity.com/podcasts/linear-digressions) [podcast](http://www.stitcher.com/podcast/linear-digressions/e/benfords-law-41309967). (I love this podcast by the way, I highly recommend it! Especially if you are interested in Data Science)

We will acquire some data from the web, including Yahoo Finance; perform some quick transformations; and investigate the distributions by a histogram. Head over to my iPython Notebook found on GitHub:

My ipython notebook here: <a href="http://nbviewer.ipython.org/github/cchi/benford/blob/master/benford.ipynb" target="_blank"><img src="https://avatars3.githubusercontent.com/u/7388996" style="width:50px;height:50px;">benford.ipynb</a>

<img src="https://pixabay.com/static/uploads/photo/2015/10/22/21/01/cowboys-1001913_960_720.jpg" style="width:1000px;height:700px;"/>

> Cowboys of the Law.