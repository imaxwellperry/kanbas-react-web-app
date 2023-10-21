function ImpliedReturn(){
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive); 
    
    return(
        <>
        <h4>Implied return</h4>
        fourTimesFive = {fourTimesFive}<br />
        multiply(4, 5) = {fourTimesFive}<br />
        </>
    )
}
export default ImpliedReturn