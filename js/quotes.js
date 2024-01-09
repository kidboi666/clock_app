const quotes = [
  {
    quote:'삶이 있는 한 희망은 있다',
    author:'-키케로'
  },
  {
    quote: '산다는것 그것은 치열한 전투이다',
    author: '-로망로랑'
  },
  {
    quote: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다',
    author: '-사무엘존슨'
  },
  {
    quote: '언제나 현재에 집중할수 있다면 행복할것이다',
    author: '-파울로 코엘료'
  },
  {
    quote: '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해',
    author: '-찰리 채플린'
  },
  {
    quote: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다',
    author: '-엘버트 허버드'
  },
  {
    quote: '신은 용기있는자를 결코 버리지 않는다',
    author: '-켄러'
  },
  {
    quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다',
    author: '-앙드레 말로'
  },
  {
    quote: '좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다',
    author: '-단테'
  },
  {
    quote: '한번의 실패와 영원한 실패를 혼동하지 마라',
    author: '-F.스콧 핏제랄드'
  },
  {
    quote: '행복은 습관이다,그것을 몸에 지니라',
    author: '-허버드'
  }
];
const $quote = document.querySelector('#quote');
const $quotes = document.querySelector('#quotes');
const $author = document.querySelector('#author');

function paintQuote() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $quotes.innerText = todaysQuote.quote;
  $author.innerText = todaysQuote.author;
}
paintQuote();

function scrollAuthor() {
  $quotes.style.height = "30px";
  $author.style.opacity = "10";
}
function moveOutAuthor() {
  $quotes.style.height = "0px";
  $author.style.opacity = "0";
}

$quote.addEventListener('mouseover', scrollAuthor);
$quote.addEventListener('mouseout', moveOutAuthor);