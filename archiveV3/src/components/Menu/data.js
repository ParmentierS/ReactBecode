export default [
  {
    label: 'Accueil',
    path: ''
  },
  {
    label: 'Agir',
    path: 'agir',
    disabled: true,
    sub: [
      {
        label: 'Actions',
        path: 'actions'
      },
      {
        label: 'Compenser',
        path: 'compenser',
        disabled: true,
        sub: [
          {
            label: 'Suivis de projet',
            path: 'suivis'
          },
          {
            label: 'Donation',
            path: 'donation'
          }
        ]
      }
    ]
  },
  {
    label: 'S\'évaluer',
    path: 'evaluer',
    disabled: true,
    sub: [
      {
        label: 'Mes emissions',
        path: 'audit'
      },
      {
        label: 'Quiz',
        path: 'quiz'
      }
    ]
  }
];