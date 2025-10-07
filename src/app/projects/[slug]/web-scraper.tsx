import Image from 'next/image'

export default function WebScraper() {
    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl">Performance Scraper</h1>
                <a
                    href="https://github.com/ammarj0987/Web-Scraper"
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

                <p>Web Scraping can be used in many ways for many different reasons. In this project I implemented a web scraping script to extract useful performance metrics of different vehicles. Car And Driver is an American automotive enthusiast magazine that reviews and tests all kinds of cars. They provide a spec sheet of all the testing that is done on a car. I collected urls of some of the cars that I am interested in and compiled them into a csv file.</p>
                <Image
                    src="/my-portfolio/web-scraper-fig1.jpeg"
                    alt='web-scraper-fig1'
                    width={400}
                    height={500}
                    className='mx-auto'
                />
                <p>I used <a href='https://jsoup.org/' target='_blank' className='text-blue-600'>Jsoup</a> which is a Java library for working with real-world HTML. It provides a very convenient API for fetching URLs and extracting and manipulating data, using the best of HTML5 DOM methods and CSS selectors. With the help of Jsoup, I was able to connect to each url and search only the spec sheet part of the page to collect data that I am interested in.</p>
                <p>I used <a href='https://jsoup.org/' target='_blank' className='text-blue-600'>openCSV</a> to import the urls that I collected and export a csv file containing the data from the spec sheet. I was interested in comparing weight, hp, torque, 0-60, 5-60 and 1/4 mile time of different cars so I created a csv file with openCSV that contains all these metrics of all the cars I am interested in comparing. I can now further use this data to analyze why some cars are faster than others and how each of these performance metrics relate to each other.</p>
                <Image
                    src="/my-portfolio/web-scraper-fig2.jpeg"
                    alt='web-scraper-fig2'
                    width={700}
                    height={500}
                    className='mx-auto'
                />
            </div>
        </>
    );
}