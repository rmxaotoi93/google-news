let newList = []
let page = 1;

const apiKey = "138bc52c706d413db5d0d0bba09b01ac"
const loadNews = async(status) =>{
    let url = `https://newsapi.org/v2/everything?q=bitcoin&page=${page}&from=2020-04-20&sortBy=publishedAt&apiKey=${apiKey}`
    let data = await fetch(url);
    let result = await data.json();
    
    
    
    if (status == 'firstload' ) {
        newsList = result.articles;
        render(newsList);
    } else if (status == 'loadM') {
        let dataList = result.articles;
        newsList = newsList.concat(dataList);
        
        render(newsList);
    }
}

const render = (list) =>{

    document.getElementById("noNews").innerHTML = list.length;
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

</div>`).join('') 
document.getElementById('newsArea').innerHTML = newsHtml 

}

function loadMore() {
    page++;
    loadNews('loadM');
}

loadNews('firstload')