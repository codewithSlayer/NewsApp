import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from "prop-types";
const News = (props) => {
    let { country, category, pageSize } = props;
    const [one, setOne] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const page = 1;

    useEffect(() => {
        let main = async () => {
            let fetching = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3bdef49585534affb6e9e0c8d20602ae&page=${page}&pageSize=${pageSize}`);
            let data = await fetching.json();
            setOne(data.articles);
            setSpinner(false);
        }
        main();
        setSpinner(true);
        document.title = `${category} news`;
    }, [category, country, page, pageSize])

    return (
        <>
            <h1 className='text-center my-5' style={{marginTop:"60px"}}>Welcome to {category} news</h1>
            {spinner && <Spinner />}
            <div className="container">
                <div className="row">
                    {!spinner && one.map((val) => {
                        return (<div className="col-md-3  d-flex aligns-items-center justify-content-center my-3" key={val.url}>
                            <NewsItem title={val.title} body={val.description} photo={val.urlToImage} link={val.url} color={props.color} theme={props.theme} />
                        </div>)
                    })
                    }
                </div>
            </div>
        </>
    )
}

News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 16
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}

export default News
