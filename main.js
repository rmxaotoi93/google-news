let newList = []

const apiKey = "138bc52c706d413db5d0d0bba09b01ac"
const loadNews = async() =>{
    let url = `https://newsapi.org/v2/everything?q=bitcoin&from=2020-04-20&sortBy=publishedAt&apiKey=${apiKey}`
    let data = await fetch(url);
    let result = await data.json();
    
    newList = result.articles
    
    render(newList)
    document.getElementById('storyAmount').innerHTML = `No of articles: ${newList.length }`
    console.log(newList)
    
}

const render = (list) =>{
    
    let newsHtml = list.map(item => `
    
    <div id="news" class="col-md-5 mb-5">

    <div id="contentsArea" >
        <div id="title">
        <a href="${item.url}">${item.title}</a>
        </div>
        <div id="source">${item.source.name}</div>

        <div id="publishedAt">${moment(item.publishedAt).startOf('hour').fromNow()}</div>
        
        <a href="${item.url}">Read More</a>
    </div>

    <div id="imgArea">
        <a href="${item.url}">
        <img src="${item.urlToImage}">
        </a>
        
    </div>

</div>`).join('') //moment("20111031", "YYYYMMDD").fromNow()
document.getElementById('newsArea').innerHTML = newsHtml 

}


let loadMore = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
    let data = await fetch(url);
    let result = await data.json();
    
    newList = result.articles
    render2(newList)
    document.getElementById('storyAmount').innerHTML = `No of articles: ${newList.length + newList.length}`
    console.log(newList)
    
}



const render2 = (list) =>{
    
    let newsHtml = list.map(item => `
    
    <div id="news" class="col-md-5 mb-5">

    <div id="contentsAreaMore" >
        <div id="title">
        <a href="${item.url}">${item.title}</a>
        </div>
        <div id="source">${item.source.name}</div>

        <div id="publishedAt">${item.publishedAt}</div>
        <a href="${item.url}">Read More</a>
    </div>

    <div id="imgAreaMore">
        <a href="${item.url}">
        <img src="${item.urlToImage}">
        </a>
        
    </div>

</div>`).join('')
document.getElementById('loadM').innerHTML = newsHtml

}
loadNews()