/* =====================================================================
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA ATUALIZAR O SITE
   ---------------------------------------------------------------------
   - Para ADICIONAR um roteiro: copie um bloco { ... }, cole abaixo do
     último (não esqueça a vírgula entre os blocos) e troque os textos.
   - Para ESCONDER um roteiro sem apagar: mude  ativo: true  para  ativo: false
   - Para REMOVER: apague o bloco inteiro { ... },
   - Fotos: coloque a imagem na pasta "img" e escreva o nome dela em "imagem".
   - A ordem aqui é a ordem em que aparecem no site.
   - Textos sempre entre aspas "assim". Para pular linha na descrição use \n
   ===================================================================== */

const AGENCIA = {
  nome: "N&F Turismo e Eventos de Pesca",
  slogan: "Viaje com quem conhece na prática",
  // Só números: 55 + DDD + número
  whatsapp: "5519974149961",
  instagram: "https://www.instagram.com/andrenaimi/",
  facebook: "https://www.facebook.com/andre.naimi/",
};

const ROTEIROS = [
  {
    id: "balbina", // nome curto, sem espaços nem acentos (vira o link do roteiro)
    ativo: true,
    titulo: "Balbina",
    local: "Amazonas",
    categoria: "Pescaria",
    duracao: "4 dias",
    datas: "Consulte as próximas saídas",
    imagem: "img/balbina.jpg",
    descricao:
      "Descubra a tranquilidade e a beleza natural do Lago de Balbina, no coração da Amazônia. Uma pescaria inesquecível focada na captura do icônico tucunaré, um dos peixes mais desejados pelos pescadores.\nExplore águas cristalinas cercadas por uma rica biodiversidade. Ideal para pescadores experientes ou iniciantes que buscam aventura e conexão com a natureza.",
    inclui: ["Hospedagem", "Barco e piloteiro", "Acompanhamento da agência"],
  },
  {
    id: "caldas-novas",
    ativo: true,
    titulo: "Caldas Novas",
    local: "Goiás",
    categoria: "Terceira Idade",
    duracao: "3 dias",
    datas: "Consulte as próximas saídas",
    imagem: "img/caldas-novas.jpg",
    descricao:
      "Relaxe nas famosas águas termais de Caldas Novas, destino perfeito para a terceira idade.\nPasseios pelos belos parques aquáticos da região e momentos tranquilos e revigorantes, cercado pela natureza e por todo o conforto que Caldas Novas oferece.",
    inclui: ["Hospedagem", "Parques aquáticos", "Acompanhamento da agência"],
  },
  {
    id: "itaibate",
    ativo: true,
    titulo: "Itaibate",
    local: "Argentina",
    categoria: "Pescaria",
    duracao: "7 dias",
    datas: "Consulte as próximas saídas",
    imagem: "img/itaibate.png",
    descricao:
      "Aventure-se na pitoresca Itaibate, na Argentina, em uma jornada de pescaria intensa.\nAs águas do rio Paraná são ricas em peixes, e a tranquilidade do ambiente rural oferece a pausa perfeita da rotina.",
    inclui: ["Hospedagem", "Barco e guia de pesca", "Acompanhamento da agência"],
  },
  {
    id: "pantanal",
    ativo: true,
    titulo: "Pantanal",
    local: "Mato Grosso",
    categoria: "Pescaria",
    duracao: "5 dias",
    datas: "Consulte as próximas saídas",
    imagem: "", // sem foto ainda: o site mostra o logo no lugar
    descricao:
      "Descubra o Pantanal, a maior planície alagada do mundo, em uma pescaria inesquecível.\nCapture peixes como dourado e pintado navegando por rios cercados por fauna e flora exuberantes.",
    inclui: ["Hospedagem", "Barco e piloteiro", "Acompanhamento da agência"],
  },
];
