import React from 'react'

const Blogs = () => {
    return (
        <div>
            <section className="text-gray-600 body-font py-5">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-left w-full mb-20">
                        <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-gray-900">
                            My Blogs
                        </h1>
                        <div className="h-1 w-80 bg-indigo-500 rounded"></div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden p-4">
                                <blockquote className="embedly-card"><h4><a href="https://medium.com/@sushilspundkar/reactjs-a-modern-approach-to-building-user-interfaces-e7badc5e0de1">ReactJS: A Modern Approach to Building User Interfaces</a></h4><p>ReactJS is an open-source JavaScript library used for building user interfaces. Developed and maintained by Facebook, it's a popular choice for web developers and has been in the market for over a decade. With its highly reactive and intuitive approach to building user interfaces, ReactJS has changed the way we think about building web applications.</p></blockquote>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden p-4">
                                <blockquote className="embedly-card"><h4><a href="https://medium.com/@sushilspundkar/maximizing-your-productivity-tips-and-strategies-8d1cb9c0fde3">Maximizing Your Productivity: Tips and Strategies</a></h4><p>In today's fast-paced world, productivity has become a hot topic. With the increasing demands on our time, it's more important than ever to be efficient and effective in how we use it. But how do you do that? Here are some tips and strategies to help you maximize your productivity and get the most out of your day.</p></blockquote>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden p-4">
                                <blockquote className="embedly-card"><h4><a href="https://medium.com/@sushilspundkar/chatgpt-revolutionizing-the-way-we-communicate-with-ai-73794f9fc8ab">ChatGPT: Revolutionizing the Way We Communicate with AI</a></h4><p>ChatGPT is a cutting-edge language model developed by OpenAI, designed to generate human-like responses to a wide range of topics. This AI-powered tool has the ability to understand and respond to natural language inputs, making it a game-changer in the field of AI-powered communication.</p></blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs