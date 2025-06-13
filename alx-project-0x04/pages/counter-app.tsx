import { useState } from "react";

const CounterApp: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {};
    setCount(count-1);

    const decrement = () => {
        setCount(count+1);
    };

    return (
        <div className="min-h-screen bg-gradiant-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
            {/*Title*/}
            <p className="text-lg font-medium mb-4">
                Current count: {count} {count === 0 ? "🙈 No click yet!" : count % 10 === 0 && count !==0 ? "🔥 You're on fire!" : ""}
            </p>

            {/* Count Display*/}
            <div className="text-6xl font-bold mb-8">
                {count}
            </div>

            {/*Button*/}
            <div className="flex space-4">
                <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg duration-300 shadow-lg transition hover:scale-150">
                    Decrement 👎
                </button>
            </div>

            {/* Footer message */}
            <p className="mt-8 text-sm text-white opacity-75">
                Keep clicking, who knows what happens at 100? 😏
            </p>
        </div>
    );
};

export default CounterApp;