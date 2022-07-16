import {MnistData} from './mnist.js';

const data = new MnistData();

data.load().then(
    (onResolved) => {
        document.write("MNIST dataset is loaded. <br>")
        const Xtrain = tf.tensor4d(data.trainImages.slice(0, 3920000), [5000, 28, 28, 1]);
        const Ytrain = tf.tensor2d(data.trainLabels.slice(0, 50000), [5000, 10]);
        const Xtest = tf.tensor4d(data.testImages.slice(0, 784000), [1000, 28, 28, 1]);
        const Ytest = tf.tensor2d(data.testLabels.slice(0, 10000), [1000, 10]);
        const model = tf.sequential();
        model.add(tf.layers.conv2d({filters: 16, kernelSize: [3, 3], activation: 'relu', padding: 'same', inputShape: [28, 28, 1]}));
        model.add(tf.layers.maxPooling2d({pool_size: [2, 2]}));
        model.add(tf.layers.flatten({}));
        model.add(tf.layers.dense({units: 32, activation: 'relu'}));
        model.add(tf.layers.dense({units: 10, activation: 'softmax'}));
        model.summary();
        model.compile({optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'], });
        model.fit(Xtrain, Ytrain, {epochs: 5, callbacks: {onEpochEnd: (epoch, logs) => {
            document.write("Epoch " + (epoch+1) + ": ");
            document.write(JSON.stringify(logs)+" <br>");
        }}}).then(history => {
            document.write("<br>Trained model loss, accuracy = " + history.history.loss[4] + ", " + history.history.acc[4] + "<br>");
            model.evaluate(Xtrain, Ytrain);
            model.save("localstorage://model.json").then(() => {
                document.write("Training completed. Neural Network Model saved in browser local storage as model.jason file, Check JavaScript runtime environment for more info.");
            });
        });
        document.write("Please wait: Training the Neural Network model ... <br>");
    },
    (onRejected) => {
        console.log("MNIST dataset loading failed.")
    }
)
