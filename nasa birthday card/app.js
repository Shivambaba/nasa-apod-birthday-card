

//$('.btn').click(fetchrandoma);

//$(".btn").click(fetchrandoma);

var btn  = document.querySelector('.btn');

btn.addEventListener('click',fetchrandoma);


async function fetchimg(){

    url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    let res = await fetch(url);
    let data = await res.json();
    var imgurl = data.url ;
    $('.imgg').attr('src', imgurl)

 
}

async function fetchrandoma(){   // asyncronous function name

    var date = $('.input-val').val();  //extraction value from input box
    //alert(date);

    // .then() to wait for servers response and store in res
    // es6 backteek to use javascript any where 
    let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`);
    // & and is used for multiple query parameter

    // response from server is row so convert to json 
    let data = await res.json();
    //console.log(data);
    var imageurl = data.url;  // image
    var explanationn = data.explanation;  // explanation
    var title = data.title;  // title

   // console.log(data);
    $('.title').text(title);  //setting title
    $(".imgg").attr('src', imageurl);  // setting image
    $(".explain").text(explanationn);  // setting explnation
}

// margin( 0 5px)
// 0 for top bottom 5 for left right