import Image from 'next/image'

export default function CarClassification() {
    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl">Car Classification</h1>

                <a
                href="/https://github.com/ammarj0987"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                >
                    <Image 
                        src="/my-portfolio/github.svg" 
                        alt="Github Logo" 
                        width={24}
                        height={24}
                    />
                </a>
            </div>
            <div className="space-y-6">
                <p>I implemented and tested multiple training models on stanford&apos;s car dataset to compare the accuracy of each model. The dataset contains 8,144 training images and 8,041 testing images of a diverse group of cars. There are 196 labels in the form of Make, Model, Year of a car. For more information on the dataset: <a className="text-blue-600" href="https://ai.stanford.edu/~jkrause/cars/car_dataset.html" target="_blank">Stanford&apos;s Car Dataset</a></p>
                <p>Pytorch and torchvision are used to load classes from data and train on. Numpy and scipy are used to extract data from .mat file and load it into a py dictionary.</p>
                <p>The images are of different sizes so to make use of tensors, I resized all images to 3 x 256 x 256. Because car designs and colors are very similar to each other, taking small random crops from the image was not as accurate. Images are also horizontally flipped 50% of the time in training. For parameters, I set the batch size to 32 and num_workers to 2. This is one batch of the data:</p>
                <Image
                    src="/my-portfolio/car-classification-fig1.png"
                    alt="car-classification-fig1"
                    width={500}
                    height={500}
                    className='mx-auto'
                />
                <p>The first model I used is called SimpleNet. It takes the flatten image size as inputs and output is set to 196. input is connected to hidden neurons by a fully connected layer and then hidden is connected to outputs in the same way. I then used a convolutional neural network which contains three convolutional layers and then uses a fully connected layer. I also tried another model called DarkNet which contains 3x3 convolutional layers with maxpooling ending with a global average pooling and fully connected layer. The last mdoel I used is resnet which I loaded from pytorch and reinitialized the final layer with 196 outputs.</p>
                <p>For my training function, I used the following parameter values: epochs=10, lr=0.01, momentum=0.9, decay=0.0, verbose=1. For simpleNet, I set epochs to 5 because the loss remained the same after 5 epochs. After training each model, I got the folowing graph for losses:</p>
                <p className="text-red-600">- SimpleNet</p>
                <p className="text-black">- DarkNet</p>
                <p className="text-blue-600">- CNN</p>
                <p className="text-green-600">- ResNet</p>
                <Image
                    src="/my-portfolio/car-classification-fig2.png"
                    alt='car-classification-fig2'
                    width={500}
                    height={500}
                    className='mx-auto'
                />
                <p>After testing the models on training and testing data, I got the following results for accuracy:</p>
                <Image
                    src="/my-portfolio/car-classification-fig3.png"
                    alt='car-classification-fig3'
                    width={500}
                    height={500}
                    className='mx-auto'
                />
                <p>Since Resnet got the best accuracy, lets test it on some images</p>
                <Image
                    src="/my-portfolio/car-classification-fig4.png"
                    alt='car-classification-fig4'
                    width={500}
                    height={500}
                    className='mx-auto'
                />
                <div className="bg-gray-600 text-white font-mono p-4 rounded-lg shadow-lg">
                    <p>GroundTruth: 2012 Suzuki Aerio Sedan, 2007 Ferrari 458 Italia Convertible, 2012 Jeep Patriot SUV, 2012 Toyota Camry Sedan</p>
                    <p>Predicted: 2012 Suzuki Aerio Sedan, 2007 Ferrari 458 Italia Convertible 2012 Jeep Patriot SUV, 2012 Toyota Camry Sedan</p>
                </div>
            </div>
        </>
    );
}