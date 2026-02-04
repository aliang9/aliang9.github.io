---
title: "Incoherent Beliefs & Inconsistent Actions in Large Language Models"
authors: "Arthur Liang*, Arka Pal*, Teo Kitanovski*, Akilesh Potti, Micah Goldblum"
venue: "In review"
year: 2025
date: 2024-12-01
image: "betting_inconst.png"
# paperurl: "https://arxiv.org/pdf/2511.13240"
arxiv: "https://arxiv.org/abs/2511.13240"
# code: "https://github.com/rcalef/magneton"
# project: "https://rcalef.github.io/magneton/"
# video: "https://youtube.com/watch?v=xxxxx"
# slides: "https://example.com/slides.pdf"
description: "Real-world tasks and environments exhibit differences from the static datasets that large language models (LLMs) are typically evaluated on. Such tasks can involve sequential interaction, requiring coherent updating of beliefs in light of new evidence, and making appropriate decisions based on those beliefs. Predicting how LLMs will perform in such dynamic environments is important, but can be tricky to determine from measurements in static settings. In this work, we examine two critical components of LLM performance: the ability of LLMs to coherently update their beliefs, and the extent to which the actions they take are consistent with those beliefs. First, we find that LLMs are largely inconsistent in how they update their beliefs; models can exhibit up to a 30% average difference between the directly elicited posterior, and the correct update of their prior. Second, we find that LLMs also often take actions which are inconsistent with the beliefs they hold. On a betting market, for example, LLMs often do not even bet in the same direction as their internally held beliefs over the underlying outcomes. We also find they have moderate self-inconsistency in how they respond to challenges by users to given answers. Finally, we show that the above properties hold even for strong models that obtain high accuracy or that are well-calibrated on the tasks at hand. Our results highlight the difficulties of predicting LLM behavior in complex real-world settings."
---
