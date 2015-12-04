---
author: Charles Chi
layout: post
title: "NBA Player Salaries, 2015-2016"
date: 2015-12-02 23:08
comments: true
category:
 - datasci
tags:
 - nba
 - salaries
 - sports
 - visualization
 - python
 - ipython
 - data
---

What's the salary distribution of the NBA this season?

<img src="https://pixabay.com/static/uploads/photo/2014/05/13/04/23/economy-343066_960_720.jpg" style="width:500px;height:350px;">

I love basketball, and I love the NBA. Which players make the big bucks? Which team pays their players the least? Which player makes up a large portion for their total team's contracts?

Hopefully, you are as curious about salary distributions throughout the league as I am. Wouldn't it be cool to explore contract sizes team by team, as well as player salaries within each team? I recently got inspiration from a post,
<a href="http://www.stathunting.com/2015/08/18/2015-mls-salaries-and-you-can-add-hypothetical-signings-tableau-public-drogba/" target="_blank">MLS Salaries Visualization</a>, and deemed it super informative. I wanted to produce a similar visualization for NBA contracts!

<a href="http://www.basketball-reference.com" target="_blank">Basketball Reference</a> is a <b>terrific</b> resource for all NBA and Basketball data. We will start there to obtain the data from this page: <a href="http://www.basketball-reference.com/contracts/players.html" target="_blank">2015-2016 Player Contracts</a>. I first downloaded the CSV version. From there, after some processing and touchups, this is the final visual product:

<div align='center'>
<iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~cchi/478.embed"></iframe>
</div>

Find my entire walkthrough and code here:
<a href="http://nbviewer.ipython.org/github/cchi/bballysis/blob/master/2015-16_salaryviz/2015-16_nba_salaries.ipynb" target="_blank"><img src="https://avatars3.githubusercontent.com/u/7388996" style="width:50px;height:50px;">Notebook</a>