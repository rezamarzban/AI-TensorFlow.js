import {MnistData} from './mnist.js';

const data = new MnistData();

data.load().then(
    (onResolved) => {
        const Xtrain = tf.tensor2d(data.trainImages, [55000, 784]);
        const Ytrain = tf.tensor2d(data.trainLabels, [55000, 10]);
        const Xtest = tf.tensor2d(data.testImages, [10000, 784]);
        const Ytest = tf.tensor2d(data.testLabels, [10000, 10]);
        const model = tf.sequential();
        model.add(tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}));
        model.add(tf.layers.dense({units: 10, activation: 'softmax'}));
        model.summary();
        model.compile({optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'], });
        const Tm = model.fit(Xtrain, Ytrain, {epochs: 1});
        document.writeln("Loss  " + " : " + Tm.history.loss[0]);
    },
    (onRejected) => {
        console.log("mnist data load failed.")
    }
)
