---
author: Charles Chi
layout: post
title: "Mass Shootings"
date: 2015-12-04 00:57
comments: true
category:
 - datasci
tags:
 - visualization
 - python
 - ipython
 - data
 - geodata
---

Research on US Mass Shootings. 

<img src="http://www.advocate-online.net/wp-content/uploads/2013/01/gun-control-graphic2backup.jpg" style="width:800px;height:300px;">

It is very unfortunate to hear of these incidents, and it seems like these events happen more frequently as of late. I wanted to perform a little bit of research on this topic, particularly locations and basic analysis. 

I found a Mother Jones' open dataset for download here: <a href="http://www.motherjones.com/politics/2012/12/mass-shootings-mother-jones-full-data" target="_blank">US Mass Shootings, 1982-2015: Data From Mother Jones' Investigation</a> as a starting point. In addition, I discovered another dataset <a href="http://shootingtracker.com/wiki/Mass_Shootings_in_2015" target="_blank">Mass Shootings in 2015 Data</a> which I utilized for geolocation plotting towards the end of the notebook.

Find my entire walkthrough and code here:
<a href="http://nbviewer.ipython.org/github/cchi/research/blob/master/shootings/mass_shootings_events.ipynb" target="_blank"><img src="https://avatars3.githubusercontent.com/u/7388996" style="width:50px;height:50px;">Notebook</a>

<h3>Here are some highlights:</h3>

> Basic analysis of categorical data.
![shooting_6graphs]({{ site.url }}/assets/img/2015-12-04-shootings/shooting_6graphs.png)

> A temporal heatmap.
![shooting_temporalheatmap]({{ site.url }}/assets/img/2015-12-04-shootings/shooting_temporalheatmap.png)

> Interactive maps with Folium. (Visit the notebook for full interaction. These are just screenshots)
![shooting_map]({{ site.url }}/assets/img/2015-12-04-shootings/shooting_map.png)
> With zoom functionality and incident markers.
![shooting_map_zoom]({{ site.url }}/assets/img/2015-12-04-shootings/shooting_map_zoom.png)

Once again, thanks and credit to motherjones.com and shootingtracker.com for the datasets. Although this is a grim topic indeed, exploring the data was informative and I learned a ton. Link to full walkthrough <a href="http://nbviewer.ipython.org/github/cchi/research/blob/master/shootings/mass_shootings_events.ipynb" target="_blank">here</a>. May we see less of these unfortunate incidents in the future.

<img src="https://pixabay.com/static/uploads/photo/2015/11/29/16/12/candle-1068945_960_720.jpg" style="width:500px;height:250px;"/>