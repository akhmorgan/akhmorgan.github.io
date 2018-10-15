---
layout: post
title: Absolute Beginners Intro to TensorFlow
tags: [dev, TensorFlow, Machine Learning, Python]
categories: [intro]
---

Recently I've been doing a bit of research on machine learning and particularly TensorFlow. I don't really have any prior experience of this field, and so far I've found that most of the resources I come across look at these topics from quite a high level, without digging into the nitty gritty of how to actually get started actually developing something in TensorFlow. So I thought I'd write a blog post to help fill in that gap.... and this is it (in case that wasn't clear).

>As I implied before, I'm not an expert on this topic, so there's every possibility I might not do everything in the most efficient or best way possible. So, if you spot any errors or areas for improvement, please leave a comment and I'll endeavour to address those as and when I get the chance.

## What is Machine Learning?
### The seven steps of machine Learning

## What is TensorFlow?
>"TensorFlow is an open-source machine learning library for research and production. TensorFlow offers APIs for beginners and experts to develop for desktop, mobile, web, and cloud." - [TensorFlow Website](https://www.tensorflow.org/tutorials/)

So... yeah. That's what it is.

## What is keras
>"Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano. It was developed with a focus on enabling fast experimentation. Being able to go from idea to result with the least possible delay is key to doing good research." - [keras.io](https://keras.io/)

The introductory tutorials on the TensorFlow website all seem to use keras rather than vanilla TensorFlow. This would suggest that the smart people behind TensorFlow think that Keras is a good thing to use.... so that's what we'll do... mostly.

## What can I use TensorFlow for?

## How though?
Allow me to walk you through it :)
The basic steps are:
* Train your neural network
*

with or without keras?

1. import tensorflow
2. get and process Data
3. build and compile model
4. train model
5. Test the model
6. Use the model to make predictions

```
import tensorflow as tf

import numpy as np

print(tf.__version__)
```

## Notes
  what is a tensor
  inputs to a neural network must be the same length
  Overfitting

## Tutorial
For the purposes of this tutorial we're going to be using a mix of [Google Colab](https://colab.research.google.com) and [Kaggle](https://www.kaggle.com/) for the actual development. This makes it a bit easier to get started with tensorflow quickly as there's virtually no setup at all. If you'd prefer to use your local machine, then I'll link a few alternative tutorials at the end which will walk you through how to do that. You should be able to follow most of this tutorial once you have TensorFlow and the other necessary libraries installed. See [here](https://www.tensorflow.org/install/pip) for how to install TensorFlow using pip.

### ideas
* Seal or no Seal
*

## Next Steps?
* TensorFlow.js
* TF Lite for mobile
* Google ML APIs


## Links
![A rather nice picture of Link](/assets/Link.gif)
![A rather nice picture of Link](/assets/Link.gif)
![A rather nice picture of Link](/assets/Link.gif)
![A rather nice picture of Link](/assets/Link.gif)
![A rather nice picture of Link](/assets/Link.gif)
* [TensorFlow official tutorials](https://www.tensorflow.org/tutorials/)
* The promised local-machine-based TensorFlow tutorials:
  - one
  - two
  - three
* [https://www.datacamp.com/community/tutorials/tensorflow-tutorial](A more in depth tensorflow tutorial)
* Cool projects using TensorFlow:

## TTFN
Thanks very much for reading.

If you have any tips or tricks for using your "free" time between projects productively, leave them in the comments!

I might look at them. I might not. Who knows?

TTFN

#NOTES:
tensors are implemented in TensorFlow as multidimensional data arrays

https://www.tensorflow.org/install/pip

How many layers to use in the model?
How many hidden units to use for each layer?

pandas

http://playground.tensorflow.org

the 7 steps of ml

https://pair-code.github.io/facets/

what type of classifier do I want/need?


https://developers.google.com/machine-learning/crash-course/

https://www.kaggle.com/yufengg/zoo-demo
