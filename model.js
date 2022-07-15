import {MnistData} from './mnist.js';

const data = new MnistData();

data.load().then(
    (onResolved) => {
        document.write("MNIST dataset is loaded. <br>")
        const Xtrain = tf.tensor2d(data.trainImages, [55000, 784]);
        const Ytrain = tf.tensor2d(data.trainLabels, [55000, 10]);
        const Xtest = tf.tensor2d(data.testImages, [10000, 784]);
        const Ytest = tf.tensor2d(data.testLabels, [10000, 10]);
        const model = tf.sequential();
        model.add(tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}));
        model.add(tf.layers.dense({units: 10, activation: 'softmax'}));
        model.summary();
        model.compile({optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'], });
        model.fit(Xtrain, Ytrain, {epochs: 10, callbacks: {onEpochEnd: (epoch, logs) => {
            document.write(JSON.stringify(epoch)+": ");
            document.write(JSON.stringify(logs)+" <br>");
        }}}).then(history => {
            document.write(JSON.stringify(history)+" <br>");
            model.evaluate(Xtrain, Ytrain);
            model.save("localstorage://model.json").then(() => {
                document.write("Training completed. Neural Network Model saved in browser local storage as model.jason file, Check JavaScript runtime environment for more info.");
            });
        });
        document.write("Please wait: Training ... <br>");
    },
    (onRejected) => {
        console.log("MNIST dataset loading failed.")
    }
)
