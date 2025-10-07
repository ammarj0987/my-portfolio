import Image from 'next/image'

export default function UWPathfinder() {
    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl">UW Pathfinder</h1>
                <a
                    href="https://github.com/ammarj0987/UW-Pathfinder"
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
                    src="/my-portfolio/uw-pathfinder-fig1.png"
                    alt='uw-pathfinder-fig1'
                    width={700}
                    height={500}
                    className='mx-auto'
                />
                <p>In this project, I used Spark framework for backend and React for frontend. The goal of the project was to find the shortest path between two buildings on UW campus. I implemented a graph from scratch that has edges as routes and nodes as buildings. The graph is a HashMap of Node as key where the value is a HashSet of edges. By implementing and applying Dijkstra&apos;s algorithm, I was able to find the shortest paths in the graph. In the app, user can choose buldings from a drop-down menu and when draw is clicked, a route is drawn on the map showing the shortest route between the two selected buildings.</p>
                <p>I used React to design the app. I added the map and two drop-down searchable menus so the user can select two buildings. The menus are loaded in the start by pulling all the options from the Model API. When the draw button is clicked, spark server fetches the shortest route in the form of cordinate points form Model API. The cordinates are then used to draw lines on the map to show the shortest path.</p>
            </div>
        </>
    );
}