---
title: "Greater than the Sum of Its Parts: Building Substructure into Protein Encoding Models"
authors: "Arthur Liang*, Robert Calef*, Manolis Kellis, Marinka Zitnik"
venue: "ICLR"
year: 2025
date: 2026-01-01
image: "magneton_logo.png"
# paperurl: "https://arxiv.org/pdf/2512.18114"
arxiv: "https://arxiv.org/abs/2512.18114"
code: "https://github.com/rcalef/magneton"
project: "https://rcalef.github.io/magneton/"
# video: "https://youtube.com/watch?v=xxxxx"
# slides: "https://example.com/slides.pdf"
description: "Protein representation learning has advanced rapidly with the scale-up of sequence and structure supervision, but most models still encode proteins either as per-residue token sequences or as single global embeddings. This overlooks a defining property of protein organization: proteins are built from recurrent, evolutionarily conserved substructures that concentrate biochemical activity and mediate core molecular functions. Although substructures such as domains and functional sites are systematically cataloged, they are rarely used as training signals or representation units in protein models. We introduce Magneton, an environment for developing substructure-aware protein models. Magneton provides (1) a dataset of 530,601 proteins annotated with over 1.7 million substructures spanning 13,075 types, (2) a training framework for incorporating substructures into existing protein models, and (3) a benchmark suite of 13 tasks probing representations at the residue, substructural, and protein levels. Using Magneton, we develop substructure-tuning, a supervised fine-tuning method that distills substructural knowledge into pretrained protein models. Across state-of-the-art sequence- and structure-based models, substructure-tuning improves function prediction, yields more consistent representations of substructure types never observed during tuning, and shows that substructural supervision provides information that is complementary to global structure inputs. The Magneton environment, datasets, and substructure-tuned models are all openly available at https://github.com/rcalef/magneton."
---
