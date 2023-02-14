import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="text-3xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">Got a project in mind or want to chat? Reach out to me at:</h1>
                        <a href="mailto:sushilspundkar@gmail.com">
                        <button className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Connect with me</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact