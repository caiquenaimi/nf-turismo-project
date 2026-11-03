# Site N&F Turismo

Site de uma página só, sem instalação e sem build: HTML, CSS e JS puros.

## Como atualizar os roteiros

Edite **apenas o arquivo `roteiros.js`**. As instruções estão no topo dele.

- **Novo roteiro:** copie um bloco `{ ... },`, cole embaixo e troque os textos.
- **Esconder um roteiro:** `ativo: false`.
- **Foto:** coloque o arquivo na pasta `img/` e escreva `imagem: "img/nome-da-foto.jpg"`.
- **Categorias** (Pescaria, Terceira Idade…): os botões de filtro aparecem sozinhos conforme o que estiver escrito em `categoria`.
- **Contatos** (WhatsApp, Instagram, Facebook): ficam no bloco `AGENCIA`, no começo do arquivo.

Cada roteiro tem um link próprio para colar no Instagram, por exemplo: `https://seusite.com/#roteiro-balbina`
(o final é `#roteiro-` + o `id` do roteiro).

## Ver no computador

```bash
python -m http.server 8080
```

Depois abra http://localhost:8080

## Publicação

O site fica no ar pelo GitHub Pages: https://caiquenaimi.github.io/nf-turismo-project/

Para atualizar, edite o `roteiros.js` (até pelo lápis no site do GitHub) e salve/faça push na `main`.
Em um ou dois minutos o site atualiza sozinho.
