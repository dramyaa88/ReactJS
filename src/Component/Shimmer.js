const Shimmmer = () => {
    return (
        <div className="flex flex-wrap">
        {
            (Array(10).fill("").map((e, index) => (<div className="bg-gray-300 m-5 w-48 h-48 " key = {index}>
            </div>)))
        }
        </div>
    )
}

export default Shimmmer;