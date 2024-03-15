import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/newsAction';

const News = () => {
    const dispatch = useDispatch();
    const {news, isLoading, error} = useSelector(state => state);
    useEffect (() => {
        console.log("NEWS in news component 1")
        dispatch(fetchNews());
        console.log("NEWS in news component 2")
    }, [dispatch]);
    return (
        <div>
          {isLoading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {news && (
            <ul>
            {news.map((article,index)=> (
                <li key={index}>
                    <a href= {article.url} target="_blank" rel="noopener noreferrer" >{article.url}</a>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <hr />
                </li>
            ))}
          </ul>

          )}
          
        </div>
    )
}

export default News;


