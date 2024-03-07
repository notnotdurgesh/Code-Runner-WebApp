export function CodeSnippet({ code }){
    return (
        <div className="rounded-md shadow-md min-w-[100%] grid place-items-left bg-zinc-700 p-1">
            <div className="text-sm text-green-400 mx-2 uppercase m-1">{code.header}</div>
            <div className="text-white mx-2 mb-2">{code.body}</div>

        </div>
    )
}