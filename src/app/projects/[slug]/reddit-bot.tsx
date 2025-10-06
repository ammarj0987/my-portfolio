import Image from 'next/image'

export default function RedditBot() {
    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl">Reddit Bot</h1>

                <a
                href="/https://github.com/ammarj0987"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                >
                    <Image 
                        src="/github.svg" 
                        alt="Github Logo" 
                        className="h-6 w-auto"
                    />
                </a>
            </div>
            <div className="space-y-6">
                <p>Technologies used: Python, PRAW, Reddit, openAI, hugging face</p>
                <p>This is a reddit bot that summarizes long posts into a few sentences so that the users do not have to read the full post.</p>
                <p>I use PRAW to navigate reddit and reddit API to create an account that can access posts and reply to them. For the backend, I use trained machine learning models to summarize the posts. Then I process those responses and turn them into clean replies. Then I again use PRAW and Reddit API to reply to the post with a summary of it.</p>
                <p>Learn more about the machine learning models used to summarize text:</p>
                <p><a className="text-blue-600" href="https://openai.com/api/" target="_blank">openAI</a></p>
                <p><a className="text-blue-600" href="https://huggingface.co/philschmid/bart-large-cnn-samsum" target="_blank">philschmid/bart-large-cnn-samsum</a></p>
            </div>
        </>
    );
}