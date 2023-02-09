import React from 'react'

const Contact = () => {
    return (
        <div className="bg-sky-100">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Got a project in mind or want to chat? Reach out to me at:</h1>
                        <a href="mailto:sushilspundkar@gmail.com">
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-4xl text-indigo-600 font-bold">sushilspundkar@gmail.com</p>
                        </a>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact