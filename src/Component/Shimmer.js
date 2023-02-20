const Shimmmer = () => {
    return (
        <div className="restaurant-list">
        {
            (Array(10).fill("").map((e, index) => (<div className="shimmer" key = {index}>
            </div>)))
        }
        </div>
    )
}

export default Shimmmer;