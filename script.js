

let requestUrl = "https://www.luizpicolo.com.br/api.json";
let request = new XMLHttpRequest();

request.open("GET", requestUrl);
request.responseType = "json";
request.send();
request.onload = function(){
   class ErroCustomizado extends Error
  { 
    constructor(nome_erro, mensagem)
    {
      super(mensagem)
      this.name = nome_erro
    }
    mensagem()
    {
      let linhaErro = this.stack.split("\n")[1]
      let linhaErro2 = linhaErro.split("js:")[1]
      let linhaErro3 = linhaErro2.split(")")[0]
      return this.name + ": " + "\n" + this.message + "\n" + "Erro na linha: " + linhaErro3;
    }
  }
  class Noticia{
  constructor(titulo, nome, data, autor, descricao){
    this.title = titulo;
    this.name = nome;
    this.publishedAt = data;
    this.author = autor;
    this.description = descricao;
  }
  mostraNoticia(){
    if (this.title != " " && this.name != " " && this.publishedAt != " " && this.author != " " && this.url != " ")
      {
  return `<h1>${this.title}</h1>` +`<p>${this.description}</p>` +
`<h3>${this.author}</h3>` + `<h4>${this.publishedAt}</h4>`
 }
     else {
        throw new ErroCustomizado("Erro", "Verifique se todos os dados estão na API.");
      }
}
     mostraN() 
    {
      try 
      {
        return this.mostrarNoticia();
      } 
      catch (erro) 
      {
        return mensagem();
      } 
    }
  }
  class NoticiaDestaque extends Noticia {
    constructor(imagem, titulo, nome, data, autor, descricao, url) {
      super(titulo, nome, data, autor, descricao, url)
      this.image = imagem;
    }
    mostrarDestaque() {
      if (this.urlToImage != " " && this.title != " " && this.name != " " && this.publishedAt != " " && this.author != " " && this.url != " ")
      {
      return `<h2>${this.name}</h2>` +
        `<img src="${this.image}"/>` +
      `<h1>${this.title} </h1>` +
      `<p>${this.description}</p>` + 
      `<h3>${this.author}</h3>` +
      `<h4>${this.publishedAt}</h4>` +
     `<a href="${this.url}">Full news here.</a> <hr/>`
    }
    else 
    {
      throw new ErroCustomizado("Erro", "Verifique se todos os dados estão na API.");
    }
  }
  mostraDes() 
  {
    try 
    {
      return this.mostrarDestaque();
    } 
    catch (erro) 
    {
      return mensagem();
    } 
  }
}   
  let noticias = request.response;
  const elemento = document.getElementById('lista');
  
  noticias.articles.forEach(noticia => {
    let noticia_ = new Noticia(noticia.title, noticia.source.name, noticia.publishedAt, noticia.author, noticia.description)
    elemento.insertAdjacentHTML('afterbegin', noticia_.mostraNoticia());
  });
  let noticiasDestaque = new NoticiaDestaque(noticias.articles[0].urlToImage, noticias.articles[0].title, noticias.articles[0].source.name, noticias.articles[0].publishedAt, noticias.articles[0].author, noticias.articles[0].description)
  elemento.insertAdjacentHTML('afterbegin', noticiasDestaque.mostrarDestaque())
}


