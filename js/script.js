let login = "", senha, valor = 0, totalGeral = 0, cesta
let usr = []
let snh = []
let produto = [
'Homem-Aranha',
'Thor',
'Hulk',
'Homem de ferro',
'Capitão América',
'Capitã Marvel',
'Pantera Negra',
'Groot',
'Thanos',
'Batman',
'Superman',
'Mulher Maravilha',
'Aquaman',
'Flash',
'Lanterna verde',
'Robin',
'Coringa',
'Ravena'
]
let cod = ['ha', 'th', 'hu', 'hf', 'ca', 'cm', 'pn', 'gr', 'tn', 'bm', 'sm', 'mm', 'am', 'fl', 'lv', 'rb', 'cr', 'rv']
let qtd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let totalCompra = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let preco = [49.90, 165.98, 87.99, 65.99, 68.90, 99.00, 57.90, 79.99, 76.99, 77.29, 83.04, 81.64, 99.99, 99.00, 149.90, 99.99, 78.90, 87.60]
let link = [
'Boneco-Marvel-Olympus-Homem-Aranha/dp/B08H6V6XRH',
'Boneco-Marvel-Legends-Figura-acess%C3%B3rios/dp/B0BS4GMMNG',
'Boneco-Action-Figure-Titan-Hasbro/dp/B0845MR392',
'Boneco-Marvel-Olympus-Homem-Ferro/dp/B08H788QYD',
'Boneco-Marvel-Olympus-Capit%C3%A3o-Am%C3%A9rica/dp/B08H6KKDP1',
'Boneca-Marvel-Olympus-Figura-Capit%C3%A3/dp/B0817F28F5',
'MARVEL-Boneco-Titan-Panther-Figura/dp/B09N6Q8KPG',
'Boneco-Marvel-Avengers-Figura-Articulada/dp/B09H1G8SMH',
'Boneco-Marvel-Olympus-Thanos-Hasbro/dp/B085B1VQKC',
'Batman-Figura-24Cm-Dc-Sunny/dp/B0CD2XLQWP',
'Boneco-Superman-DC-12-Sunny/dp/B091J7NM6C',
'Boneco-Wonder-Woman-DC-Sunny/dp/B091J527J2',
'SUNNY-DC-Aquaman-Boneco-30/dp/B0CJG3NBFM',
'Dc-Figuras-12-Flash-Sunny/dp/B0042W8O8M',
'Lanterna-Colecionável-Estátua-Miniatura-Enfeite/dp/B0D24P3WS5',
'Batman-Figura-30Cm-Robin-Sunny/dp/B09BZPRLKS',
'Batman-Figura-12-Coringa-Teck/dp/B093211TRD',
'Lider-3239-FANDOMBOX-RAVEN/dp/B0CGG1GQ7H'
]
let main, section, article, div, h3, p1, input, p2, span, aLink, footer, h2, p3, span2

//As proximas linhas são para recriar o html inteiro dentro do JS
main = document.createElement('main')
main.setAttribute('class', 'container')
document.body.append(main)
section = document.createElement('section')
section.setAttribute('class', 'products-container')
main.append(section)
for(i in produto){
    article = document.createElement('article')
    article.setAttribute('class', 'card')
    section.append(article)
    div = document.createElement('div')
    div.setAttribute('class', 'product-image')
    div.setAttribute('id', 'img-' + i)
    article.append(div)
    document.getElementById('img-' + i).style.backgroundImage = 'url(imagens/img' + i + '.jpg'
    h3 = document.createElement('h3')
    h3.setAttribute('id', 'nome' + i)
    h3.innerHTML = produto[i]
    article.append(h3)
    p1 = document.createElement('p')
    p1.innerHTML = 'Qtd: '
    article.append(p1)
    input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('value', '1')
    input.setAttribute('min', '1')
    input.setAttribute('max', '10')
    input.setAttribute('id', 'qtd-' + i)
    p1.append(input)
    article.append(p1)
    p2 = document.createElement('p')
    p2.innerHTML = 'R$ '
    span = document.createElement('span')
    span.setAttribute('id', cod[i])
    span.setAttribute('class', 'bold')
    span.innerHTML = preco[i].toFixed(2).replace('.', ',')
    p2.append(span)
    article.append(p2)
    aLink = document.createElement('a')
    aLink.setAttribute('onclick', "compra(" + "'" + 'qtd-' + i + "'" + ',' + "'" + cod[i] + "'" + ',' + i + ")")
    aLink.setAttribute('class', 'btn')
    aLink.setAttribute('href', 'http://www.amazon.com.br/' + link[i])
    aLink.setAttribute('target', '_blank')
    aLink.innerHTML = 'Comprar'
    article.append(aLink)
}
footer = document.createElement('footer')
footer.setAttribute('id', 'rodape')
document.body.append(footer)
h2 = document.createElement('h2')
h2.innerHTML = 'Informações sobre o Site'
footer.append(h2)
p3 = document.createElement('p')
p3.innerHTML = '&copy 2024'
footer.append(p3)
span2 = document.createElement('span')
span2.setAttribute('class', 'bold')
span2.innerHTML = 'Loja dos Nerds'
p3.append(span2)
function criaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))        
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    let novoUsr = prompt("Login")
    usr.push(novoUsr)
    localStorage.usrArr = JSON.stringify(usr)
    let novaSnh = prompt("senha")
    snh.push(novaSnh)
    localStorage.snhArr = JSON.stringify(snh)
    if(usr.includes(novoUsr) && snh.includes(novaSnh)){
        alert("Login criado com Sucesso!")
    }else{
        alert("Login não pode ser criado!")
    }
}

function abreTelaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    login = prompt('Login: ')
    senha = prompt("Senha: ")
    let indUsr = usr.indexOf(login)
    if(usr[indUsr] == login && snh[indUsr] == senha){
        document.getElementById('log').innerHTML = `Bem-vindo, ${login}`
    }else{
        alert("Digite um usuário/senha válidos!\nOu crie um login no link ao lado")
    }
}

function compra(qtdId, produto, posArr){
    if(localStorage.posArr){
        qtd[posArr] = parseInt(document.getElementById(qtdId).value)
    }else{
        localStorage.posArr = JSON.stringify(qtd)
    }
    totalCompra[posArr] = qtd[posArr] * parseFloat(document.getElementById(produto).innerText.replace(',','.'))
    localStorage.qtdArr = JSON.stringify(qtd)
    localStorage.totComp = JSON.stringify(totalCompra)
}

function calculaCesta(){
    if(usr.includes(login)){
        let textoCarrinho = ''
        for(i in qtd){
            if(qtd[i] > 0){
                totalGeral += totalCompra[i]
                textoCarrinho += qtd[i] + " x R$" + preco[i].toFixed(2).replace('.', ',') + " - Boneco " + produto[i] + " R$" + totalCompra[i].toFixed(2).replace('.', ',') + "\n"
            }
        }
        
        alert(`${textoCarrinho}        
        _______________________________________________
        Total da compra                     R$${totalGeral.toFixed(2).replace('.', ',')}
        `)
        if(totalGeral > 0){
            let text = "Confirme ou cancele sua compra\nPressione Ok para comprar ou cancel para desistir da compra"
            if(confirm(text) == true){
                alert("Compra efetuada com sucesso!")
                window.location.reload()
            }else{
                alert("Sua compra não foi realizada!")
                totalGeral = 0
            }
        }
    }else{
        alert('Você não está logado!')
    }
}