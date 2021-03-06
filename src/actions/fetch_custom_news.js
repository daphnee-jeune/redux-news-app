export function fetchCustomNews(source, relevance){
    //return the actual action to do
    return function(dispatch){
      fetch(`https://newsapi.org/v1/articles?source=${source}&sortBy=${relevance}&apiKey=a76fab006e1b4b96845086b77f9a14d8`)
      .then(res => {
          return res.json()
          
      })
      .then(res => {
       // console.log(res)
        dispatch({type:"FETCH_CUSTOM_NEWS", payload: res.articles})
      })
      .catch(err => {
          console.log(err)
      })

   }
}