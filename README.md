# AI-TensorFlow.js
Simple AI Neural Network by TensorFlow in JavaScript language 

All of TensorFlow.js examples and demoes in the web are complicated and confusing, But this project is consist of few codes which make it easy to understanding.

If there is hardware limit in your system such as webGL GPU texture size replace below code in "model.js" file:

const Xtrain = tf.tensor2d(data.trainImages, [55000, 784]);

const Ytrain = tf.tensor2d(data.trainLabels, [55000, 10]);

const Xtest = tf.tensor2d(data.testImages, [10000, 784]);

const Ytest = tf.tensor2d(data.testLabels, [10000, 10]);


With below code:

const Xtrain = tf.tensor2d(data.trainImages.slice(0, 3920000), [5000, 784]);

const Ytrain = tf.tensor2d(data.trainLabels.slice(0, 50000), [5000, 10]);

const Xtest = tf.tensor2d(data.testImages.slice(0, 784000), [1000, 784]);

const Ytest = tf.tensor2d(data.testLabels.slice(0, 10000), [1000, 10]);


See all versions live demo:

V2.0.0:


V1.0.0:
https://w84mri.csb.app/
