
export function fetchTech(){
    //return the actual action to do
        return function(dispatch){
            fetch("https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=a76fab006e1b4b96845086b77f9a14d8")
            .then(res => {
                return res.json()
                
            })
            .then(res => {
             // console.log(res)
              dispatch({type:"FETCH_TECH", payload: res.articles})
            })
            .catch(err => {
                console.log(err)
            })
      
         }
      
}