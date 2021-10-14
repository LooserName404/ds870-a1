module.exports = {
  times: [
    {
      id: 1,
      nome: 'Londrina',
      cidade: 'Londrina',
      estado: 'PR',
      serie: 'B',
      titulos: [
        {
          tipo: 'estadual',
          quantidade: 3,
        },
      ],
      folhaPagamento: 100000.00,
    },
    {
      id: 2,
      nome: 'Paraná',
      cidade: 'Curitiba',
      estado: 'PR',
      serie: 'B',
      titulos: [
        {
          tipo: 'estadual',
          quantidade: 5,
        },
        {
          tipo: 'nacional',
          quantidade: 1
        }
      ],
      folhaPagamento: 150000.00,
    }
  ]
}