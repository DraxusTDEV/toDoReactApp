import CrossIcon from "./icons/CrossIcon";

const TodoList = () => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
                <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                <p className="grow text-gray-700">
                    Complete online Javascript course
                </p>
                <button className="flex-none">
                    <CrossIcon />
                </button>
            </article>

            <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
                <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                <p className="grow text-gray-700">
                    Complete online Javascript course
                </p>
                <button className="flex-none">
                    <CrossIcon />
                </button>
            </article>
            <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
                <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                <p className="grow text-gray-700">
                    Complete online Javascript course
                </p>
                <button className="flex-none">
                    <CrossIcon />
                </button>
            </article>
            <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
                <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                <p className="grow text-gray-700">
                    Complete online Javascript course
                </p>
                <button className="flex-none">
                    <CrossIcon />
                </button>
            </article>
            <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
                <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                <p className="grow text-gray-700">
                    Complete online Javascript course
                </p>
                <button className="flex-none">
                    <CrossIcon />
                </button>
            </article>
        </div>
    );
};

export default TodoList;
