'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ActivityTypes', [
      {
        id: '1',
        title: 'Livros publicados',
        score: '16'
      },
      {
        id: '2',
        title: 'Capítulo de livro',
        score: '04'
      },
      {
        id: '3',
        title: 'Publicação em revistas indexadas de circulação internacional',
        score: '03'
      },
      {
        id: '4',
        title: 'Publicação em revistas indexadas de circulação nacional',
        score: '02'
      },
      {
        id: '5',
        title: 'Trabalho completo publicado em anais de eventos nacionais e internacionais',
        score: '01'
      },
      {
        id: '6',
        title: 'Orientação de doutarado em programa reconhecido pelo MEC',
        score: '10'
      },
      {
        id: '7',
        title: 'Co-orientação de doutarado em programa reconhecido pelo MEC',
        score: '05'
      },
      {
        id: '8',
        title: 'Orientação de mestrado em programa reconhecido pelo MEC',
        score: '06'
      },
      {
        id: '9',
        title: 'Co-orientação de mestrado em programa reconhecido pelo MEC',
        score: '03'
      },
      {
        id: '10',
        title: 'Liderança de grupos de pesquisa credenciados pelo CNPq',
        score: '02'
      },
      {
        id: '11',
        title: 'Participação em eventos técnico-científicos no exterior com apresentação de trabalho',
        score: '03'
      },
      {
        id: '12',
        title: 'Participação em eventos técnico-científicos no país com apresentação de trabalho',
        score: '02'
      },
      {
        id: '13',
        title: 'Tradução de livro',
        score: '03'
      },
      {
        id: '14',
        title: 'Tradução de artigo, capítulo de livro ou de trabalho técnico-científico',
        score: '01'
      },
      {
        id: '15',
        title: 'Produção de filme e vídeo de curta e longa duração',
        score: '05'
      },
      {
        id: '16',
        title: 'Elaboração de softwares (programas)',
        score: '05'
      },
      {
        id: '17',
        title: 'Organização de compêndios',
        score: '03'
      },
      {
        id: '18',
        title: 'Orientação de bolsista de Iniciação Científica',
        score: '01'
      },
      {
        id: '19',
        title: 'Participação de Órgãos Colegiados, na condição de titular, ou em comissões nomeadas pelo Diretor-Presidente ou Reitor',
        score: '01'
      },
      {
        id: '20',
        title: 'Participação em banca examinadora de doutorado',
        score: '03'
      },
      {
        id: '21',
        title: 'Participação em banca examinadora de mestrado',
        score: '02'
      },
      {
        id: '22',
        title: 'Participação em banca examinadora de concurso público em IES',
        score: '02'
      },
      {
        id: '23',
        title: 'Participação em banca examinadora de seleção',
        score: '01'
      },
      {
        id: '24',
        title: 'Coordenação de projetos de pesquisa aprovados por órgãos de fomento à pesquisa',
        score: '01'
      },
      {
        id: '25',
        title: 'Pós-doutardo ou equivalente',
        score: '10'
      },
      {
        id: '26',
        title: 'Prêmios conferidos por trabalhos técnicos ou científicos',
        score: '05'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ActivityTypes', null, {});
  }
};
