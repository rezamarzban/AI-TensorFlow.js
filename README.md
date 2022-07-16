# AI-TensorFlow.js
Simple AI Neural Network by TensorFlow in JavaScript language 

All of TensorFlow.js examples and demoes in the web are complicated and confusing, But this project is consist of compact few codes especially at its heart "model.js" file which make it easy to understanding.

Complicated full project with visual environment is available in my another repository at:
https://github.com/marzban2030/TensorFlow.js-vis

Because of hardware resource limits in most of common systems such as GPU texture size limit to running webGL, I put below code lines in "model.js" file inorder to reducing GPU hardware resource usage by shortening training and testing data tensors to under 10% of their length:

const Xtrain = tf.tensor4d(data.trainImages.slice(0, 3920000), [5000, 28, 28, 1]);

const Ytrain = tf.tensor2d(data.trainLabels.slice(0, 50000), [5000, 10]);

const Xtest = tf.tensor4d(data.testImages.slice(0, 784000), [1000, 28, 28, 1]);

const Ytest = tf.tensor2d(data.testLabels.slice(0, 10000), [1000, 10]);

If your system hardwares are very strong you can change above codes in "model.js" file to below codes inorder to running with full of training and testing data tensors length:

const Xtrain = tf.tensor4d(data.trainImages, [55000, 28, 28, 1]);

const Ytrain = tf.tensor2d(data.trainLabels, [55000, 10]);

const Xtest = tf.tensor4d(data.testImages, [10000, 28, 28, 1]);

const Ytest = tf.tensor2d(data.testLabels, [10000, 10]);


See live demo:
https://514m9l.csb.app/


After successful run you will see something like as this. It will take about 3 minutes to be completed:

![image](https://github.com/marzban2030/AI-TensorFlow.js/raw/main/AfterSuccessfulRun.jpg)


After running above script to predicting handwritten digits from your drawing with mouse or finger touch on screen navigate your browser to this link and when prompt model URL enter "localstorage://model.json" and click "OK" button to loading model which is saved to browser localstorage by above script:
https://r54tve.csb.app/

Please pay attention that some browsers don't handle "localstorage://" handler via JavaScript codes properly, Test above scripts in various browsers at same time to taking correct result.

If you want to check your browser localstorage stored keys and datas navigate your browser to this URL:
https://r54tve.csb.app/
