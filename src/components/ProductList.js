import React, { useEffect, useState } from 'react';
import PublicationItem from './PublicationItem'

const ProductList = (props) => {
    const [articles, setArticles] = useState([])
    //calls api in use effect
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products' ,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`//to send token in headers, bearer to verify token 
            }
        });
        result = await result.json();
        setArticles(result);
    }


    return (
        
        <div className="container">
        <div className="row">
            {
            articles.map((element) => {
                return (
                    <div className="col-md-4" key={element._id}>
                        <PublicationItem title={element.top} department={element.cse} author={element.nop}
                            type={element.data1} iswith={element.fa1} month={element.data2} />
                    </div>
                )
            })}{/*takes all news from artiles as different objects */}
        </div>
    </div>
        
    )
}
export default ProductList;