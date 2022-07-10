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
        model.fit(Xtrain, Ytrain, {epochs: 1});
        model.evaluate(Xtrain, Ytrain);
        model.save("localstorage://model.json").then(() => {
        document.write("Neural Network Model saved in local storage as model.jason, Check JavaScript runtime environment and browser local storage for more info.");
        });
    },
    (onRejected) => {
        console.log("mnist data load failed.")
    }
)