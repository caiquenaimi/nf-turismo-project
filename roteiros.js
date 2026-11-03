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
   - "programacao" é o dia a dia (1º dia, 2º dia...), um texto por dia.
     Se não tiver, pode apagar a linha ou deixar  programacao: [],
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
    id: "caldas-novas-corpus-christi", // nome curto, sem espaços nem acentos (vira o link do roteiro)
    ativo: true,
    titulo: "Caldas Novas no Corpus Christi",
    local: "Goiás",
    categoria: "Viagem em grupo",
    duracao: "5 dias",
    datas: "26/05/2027 (quarta) a 30/05/2027 (domingo)",
    imagem: "img/caldas-novas.jpg",
    descricao:
      "Feriado de Corpus Christi no Hotel Thermas Di Roma, em Caldas Novas, o maior hidromanancial de águas termais do mundo, com pensão completa.\nO hotel tem piscinas quentes e frias com temperatura média de 42 °C, toboágua, sauna, duchas, quadras, parque aquático, sala de jogos e, à noite, bingo e seresta.",
    programacao: [
      "Saída às 21h em ônibus de turismo com ar-condicionado, toalete, som, geladeira, serviço de bordo, dois motoristas e guia acompanhante.",
      "Chegada pela manhã e hospedagem no Hotel Thermas Di Roma (entrada no quarto a partir das 12h; antes, se houver disponibilidade). Manhã livre para banhos, almoço às 12h30, tarde livre para descanso e passeio na praça central. Jantar e noite com atrações no hotel.",
      "Manhã livre nas águas termais. Almoço e, às 14h, city tour de compras: chocolates, doces, queijos, malhas da região e casa da farinha. Jantar e atrações no hotel.",
      "Dia livre para curtir o hotel e passeios particulares, com almoço e jantar. À noite, bingo e seresta.",
      "Café da manhã e saída às 8h30, passando por Goiás e Minas Gerais. Almoço no percurso. Chegada prevista à noite.",
    ],
    inclui: [
      "Ônibus de turismo com guia acompanhante",
      "Hospedagem no Hotel Thermas Di Roma",
      "Pensão completa (café, almoço e jantar)",
      "City tour de compras",
      "Almoço na viagem de volta",
    ],
  },
  {
    id: "caldas-novas-junho",
    ativo: true,
    titulo: "Caldas Novas em junho",
    local: "Goiás",
    categoria: "Viagem em grupo",
    duracao: "5 dias",
    datas: "16/06/2027 (quarta) a 20/06/2027 (domingo)",
    imagem: "img/caldas-novas.jpg",
    descricao:
      "Cinco dias no Hotel Thermas Di Roma, em Caldas Novas, o maior hidromanancial de águas termais do mundo, com pensão completa.\nO hotel tem piscinas quentes e frias com temperatura média de 42 °C, toboágua, sauna, duchas, quadras, parque aquático, sala de jogos e, à noite, bingo e seresta.",
    programacao: [
      "Saída às 21h em ônibus de turismo com ar-condicionado, toalete, som, geladeira, serviço de bordo, dois motoristas e guia acompanhante.",
      "Chegada pela manhã e hospedagem no Hotel Thermas Di Roma (entrada no quarto a partir das 12h; antes, se houver disponibilidade). Manhã livre para banhos, almoço às 12h30, tarde livre para descanso e passeio na praça central. Jantar e noite com atrações no hotel.",
      "Manhã livre nas águas termais. Almoço e, às 14h, city tour de compras: chocolates, doces, queijos, malhas da região e casa da farinha. Jantar e atrações no hotel.",
      "Dia livre para curtir o hotel e passeios particulares, com almoço e jantar. À noite, bingo e seresta.",
      "Café da manhã e saída às 8h30, passando por Goiás e Minas Gerais. Almoço no percurso. Chegada prevista à noite.",
    ],
    inclui: [
      "Ônibus de turismo com guia acompanhante",
      "Hospedagem no Hotel Thermas Di Roma",
      "Pensão completa (café, almoço e jantar)",
      "City tour de compras",
      "Almoço na viagem de volta",
    ],
  },
  {
    id: "sao-lourenco-festa-junina",
    ativo: true,
    titulo: "São Lourenço na festa junina",
    local: "Minas Gerais",
    categoria: "Viagem em grupo",
    duracao: "3 dias",
    datas: "09/07/2027 (sexta) a 11/07/2027 (domingo)",
    imagem: "", // sem foto ainda: o site mostra o logo no lugar
    descricao:
      "Fim de semana em São Lourenço, no sul de Minas, com a tradicional festa junina do Hotel Guanabara e pensão completa.\nNoite de queijos e vinhos com música ao vivo, festa com comidas típicas e a opção de passear de Maria Fumaça.",
    programacao: [
      "Saída às 7h em ônibus de turismo com toalete, geladeira, música ambiente e guia acompanhante. Chegada para o almoço e hospedagem no Hotel Guanabara, em apartamentos de luxo duplos, de casal ou triplos. Tarde livre para conhecer a cidade. Jantar e noite de queijos e vinhos com música ao vivo.",
      "Café da manhã e manhã livre. Almoço e tarde livre. A partir das 18h30, festa junina no hotel com comidas típicas, quentão e vinho quente à vontade.",
      "Café da manhã e manhã livre para a piscina ou para o passeio opcional de Maria Fumaça até Soledade de Minas, com parada numa feira de doces e artesanato. Saída de volta após o almoço.",
    ],
    inclui: [
      "Ônibus de turismo com guia acompanhante",
      "Hospedagem no Hotel Guanabara",
      "Pensão completa (café, almoço e jantar)",
      "Noite de queijos e vinhos e festa junina no hotel",
    ],
  },
  {
    id: "balbina",
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
