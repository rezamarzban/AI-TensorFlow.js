# AI-TensorFlow.js
Simple AI Neural Network by TensorFlow in JavaScript language 

All of TensorFlow.js examples and demoes in the web are complicated and confusing, But this project is consist of few codes which make it easy to understanding.

Complicated full project with visual environment is available in my another repository at:
https://github.com/marzban2030/TensorFlow.js-vis

If there is hardware resource limitations in your system such as GPU texture size limit to running webGL replace below code lines in "model.js" file:

const Xtrain = tf.tensor2d(data.trainImages, [55000, 784]);

const Ytrain = tf.tensor2d(data.trainLabels, [55000, 10]);

const Xtest = tf.tensor2d(data.testImages, [10000, 784]);

const Ytest = tf.tensor2d(data.testLabels, [10000, 10]);


With below code lines:

const Xtrain = tf.tensor2d(data.trainImages.slice(0, 3920000), [5000, 784]);

const Ytrain = tf.tensor2d(data.trainLabels.slice(0, 50000), [5000, 10]);

const Xtest = tf.tensor2d(data.testImages.slice(0, 784000), [1000, 784]);

const Ytest = tf.tensor2d(data.testLabels.slice(0, 10000), [1000, 10]);

Inorder to reducing GPU hardware resource usage by shortening data tensors.


See all versions live demo:

v2.1.0:
https://w0g16m.csb.app/

v2.1.0-light:
Same as above, But replace those code lines in the source.

V2.0.0:
https://prxoe7.csb.app/

V2.0.0-light:
Same as above, But replace those code lines in the source.

V1.0.0:
https://w84mri.csb.app/
