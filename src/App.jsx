const App = () => {
    return (
        <div className="bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                        Todo
                    </h1>
                    <button>Luna</button>
                </div>
                <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Create a new todo..."
                    />
                </form>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <article>
                    <button>Circle</button>
                    <p>Complete online Javascript course</p>
                    <button>X</button>
                </article>
                <article>
                    <button>Circle</button>
                    <p>Complete online Javascript course</p>
                    <button>X</button>
                </article>
                <article>
                    <button>Circle</button>
                    <p>Complete online Javascript course</p>
                    <button>X</button>
                </article>
                <article>
                    <button>Circle</button>
                    <p>Complete online Javascript course</p>
                    <button>X</button>
                </article>
                <article>
                    <button>Circle</button>
                    <p>Complete online Javascript course</p>
                    <button>X</button>
                </article>
                <section>
                    <span>5 items left</span>
                    <button>Clear Completed</button>
                </section>

                <section className="container mx-auto px-4">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </section>

                <section className="text-center">
                    Drag & Drop to reorder list
                </section>
            </main>
        </div>
    );
};

export default App;
