---
layout: post
title: Absolute Beginners Intro to TensorFlow
tags: [dev, TensorFlow, Machine Learning, Python]
categories: [intro]
---

Recently I've been doing a bit of research on machine learning and particularly TensorFlow. I don't really have any prior experience of this field, and so far I've found that most of the resources I come across look at these topics from quite a high level, without digging into the nitty gritty of how to actually get started actually developing something in TensorFlow. So I thought I'd write a blog post to help fill in that gap.... and this is it (in case that wasn't clear).

>As I implied before, I'm not an expert on this topic, so there's every possibility I might not do everything in the most efficient or best way possible. So, if you spot any errors or areas for improvement, please leave a comment and I'll endeavour to address those as and when I get the chance.

## Questions
* Why use keras?

## What is Machine Learning?
>*"Machine learning is functionality that helps software perform a task without explicit programming or rules. Traditionally considered a subcategory of artificial intelligence, machine learning involves statistical techniques, such as deep learning (aka neural networks), that are inspired by theories about how the human brain processes information."* - [Google Cloud Platform](https://cloud.google.com/what-is-machine-learning/)

### The seven steps of machine Learning
There is a fairly popular series on YouTube called AI Adventures, and the host of that series, suggests that there are 7 steps to machine learning:
1. **Data gathering**: you need data to do data science, funnily enough.
2. **Data preparation**: the data needs to be formatted in such a way that the model will understand, and also needs to be split into data for training and data for evaluation.
3. **Choosing a model**: There are a variety of different model types available and they're each suited to different types of data.
4. **Training**: Train the model with the training data.
5. **Evaluation**: Test the model's accuracy against data it hasn't seen in training.
6. **Parameter tuning**: adjust the various parameters of the model to try to improve it's performance.
7. **Prediction**: Use the model to make predictions about specific pieces of data.

I strongly recommend watching [the series](https://www.youtube.com/watch?v=nKW8Ndu7Mjw&index=2&list=PLIivdWyY5sqJxnwJhe3etaK7utrBiPBQ2) if you haven't already.

## What is TensorFlow?
>*"TensorFlow is an open-source machine learning library for research and production. TensorFlow offers APIs for beginners and experts to develop for desktop, mobile, web, and cloud."* - [TensorFlow Website](https://www.tensorflow.org/tutorials/)

So... yeah. That's what it is.

## What is keras
>*"Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano. It was developed with a focus on enabling fast experimentation. Being able to go from idea to result with the least possible delay is key to doing good research."* - [keras.io](https://keras.io/)

The introductory tutorials on the TensorFlow website all seem to use keras rather than vanilla TensorFlow. This would suggest that the smart people behind TensorFlow think that Keras is a good thing to use. So, in this blog I'll aim to cover a brief intro to both options and a little bit of a tutorial on each.

## What can I use TensorFlow for?

## How though?
Allow me to walk you through it :)
The basic steps are essentially what I covered above, under "The seven steps of machine Learning".


with or without keras?

1. import tensorflow
2. get and process Data
3. build and compile model
4. train model
5. Test the model
6. Use the model to make predictions

## Aside - RE:Data Science and Machine Learning in general
Data terminology



## Notes
  what is a tensor
  inputs to a neural network must be the same length
  Overfitting

## Tutorial
For the purposes of this tutorial I'm going to assume that you're going to be using either [Google Colab](https://colab.research.google.com) or [Kaggle](https://www.kaggle.com/) for the actual development. This makes it a bit easier to get started with TensorFlow quickly as there's virtually no setup at all. If you'd prefer to use your local machine, that's fine; you just have a little more legwork to do to get your machine setup. You should be able to follow most of this tutorial once you have TensorFlow and the other necessary libraries installed. See [here](https://www.tensorflow.org/install/pip) for how to install TensorFlow using pip.

The dataset I'll be using can be found [here](https://www.kaggle.com/uciml/zoo-animal-classification). However, hopefully the principles covered in this tutorial should be applicable to any dataset you like (in theory), as long as you take care in how you process the data and set up the model.

## STEP 1 : import the necessities

```python
# TensorFlow and tf.keras
import tensorflow as tf
# Only necessary if you're using Keras (obviously)
from tensorflow import keras

# Helper libraries
import numpy as np
import pandas as pd
import math
import pprint as pp

```

## STEP 2: Parse the data

```python
data = pd.read_csv("zoo.csv")
print(data.head(6))
print(data.describe())
```

## STEP 3: Shuffle and split the data

```python
# Shuffle
data = data.sample(frac=1).reset_index(drop=True)
# Split
data_total_len = data[data.columns[0]].size
data_train_frac = 0.6
split_index = math.floor(data_total_len*data_train_frac)
training_data = data.iloc[:split_index]
evaluation_data = data.iloc[split_index:];
```

## STEP 4:  separate the data into features and labels

```python
def preprocess(data):
    X = data.iloc[:, 1:17] #all rows, all the features and no labels
    y= data.iloc[:, 17] #all rows, label only
    y = y-1 # shift value range from 1-7 to be 0-6
    return X, y
```
### STEP 4 - A: TensorFlow only
```python
X, y = preprocess(data);

def generate_input_fn(data, batch_size=32, epochs=1, shuffle=True):
    features, labels = preprocess(data);

    def _input_fn():
        # convert inputs into a TensorFlow dataset
        dataset = tf.data.Dataset.from_tensor_slices((dict(features), labels))

        # shuffle, repeat, and batch the examples
        if shuffle:
            dataset = dataset.shuffle(1000)
        dataset = dataset.repeat(epochs).batch(batch_size)

        # return the Dataset
        return dataset
    return _input_fn
```





Take note: none of the tutorials I read said this explicitly, or even implied it for that matter. So I'm going to make it clear here, so that anyone following along can avoid the confusion and resulting frustration I went through in figuring this out. In a Keras model the number of neurons in the last layer must equal the number of classes, or the model won't work properly, and you'll see confusing result; like the model predicting values of 8 or 9, when you only have 7 classes.

## Possible Next Steps?
* The proper optimisation of models
* TensorFlow.js
* TF Lite for mobile
* Google ML APIs

## CLosing
Overall I found vanilla TensorFlow to be a bit easier to get started with. Largely because each step was a lot more explicit in my opinion, and as a developer, I like things that are explicit in what they do and what they need to do it. However, I think Keras is really powerful, and would probably have made more sense, has I not gone straight from learning Tensorflow to Keras, which is written in an almost completely different way from vanilla TF.
That being said; I would still recommend using Keras on top of TensorFlow for most applications where you don't need to veer too far from standard use cases, as it is much faster to write once you know how, and also it seems to actually run a bit faster than equivalent vanilla TF.

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

If you have any tips or tricks for using TensorFlow or Keras, leave them in the comments!

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

https://keras.io/getting-started/sequential-model-guide/

https://machinelearningmastery.com/what-is-generalization-in-machine-learning/

https://machinelearningmastery.com/data-terminology-in-machine-learning/

https://stackoverflow.com/questions/44747343/keras-input-explanation-input-shape-units-batch-size-dim-etc

https://medium.com/@satnalikamayank12/on-learning-embeddings-for-categorical-data-using-keras-165ff2773fc9

https://machinelearningmastery.com/improve-deep-learning-performance/

https://machinelearningmastery.com/tutorial-first-neural-network-python-keras/
