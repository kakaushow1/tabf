let requestUrl = "https://www.luizpicolo.com.br/api.json";
let request = new XMLHttpRequest();
request.open("GET", requestUrl);
request.responseType = "json";
request.send();
request.onload = function(){
let resposta = request.response;
let noticias = resposta.articles;

noticias.forEach(function(noticia){
  console.log(noticia.title)
})

noticias.forEach(function(noticia){
  console.log(noticia.publishedAt)
})

noticias.forEach(function(noticia){
  console.log(noticia.author)
})

noticias.forEach(function(noticia){
  console.log(noticia.description)
})

class Noticia{
  constructor(titulo, data, autor, descricao){
    this.titulo = titulo
    this.data = data
    this.autor = autor
    this.descricao = descricao
  }
mostraNoticia(){
  return this.titulo + "\n" + this.data + "\n" + this.autor + "\n" + this.descricao
}
}
  console.log(Noticia.mostrarNoticia)
}