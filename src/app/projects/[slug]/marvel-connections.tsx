import Image from 'next/image'

export default function MarvelConnections() {
    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl">Marvel Connections</h1>
                <a
                    href="https://github.com/ammarj0987/Marvel-Connections"
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
                <Image
                    src="/my-portfolio/marvel-connections-fig1.png"
                    alt='marvel-connections-fig1'
                    width={700}
                    height={500}
                    className='mx-auto'
                />
                <p>In this project, I used Spark framework for beackend and React for frontend. The goal of this project was to find connections between Marvel superheroes. I started this project by implementing a Graph data structure. The graph is a HashMap of Node as key where the value is a HashSet of edges. I then loaded a csv file that contained all the marvel superheroes and the books they appeared in. These were stored in the graph in the form of nodes and edges. By creating this connection between chracters and books, I used Breadth-First-Search algorithm on the graph. The user can search and select two superheroes from Marvel Universe and when Find connection is clicked, All the books that the two superheroes appear in together are returned.</p>
                <p>I used React to create the website. I added dropdown menus that are searchable so the user can choose between all the marvel characters. After choosing characters, when the find connection button is hit, spark server fetches the result from Model API and prints it on the screen.</p>
            </div>
        </>
    );
}