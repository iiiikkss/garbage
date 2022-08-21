

export const Child =({name, handleChangeCount})=>{
    const handelClick =()=>{
        handleChangeCount(prevCount => prevCount +1)
    }
    return <>
        <p>{name}</p>
        <button onClick={handelClick}>click</button>
    </>
}