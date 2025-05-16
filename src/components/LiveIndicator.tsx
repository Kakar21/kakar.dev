export function LiveIndicator() {
    return (
        <span className="relative flex h-2 w-2 justify-center items-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
        </span>
    );
} 