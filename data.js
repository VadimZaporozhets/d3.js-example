var data = {
    nodes: [
        {name: "U-Knight", position: "Web-studio", image: "UKNIGHT.png", weight: 1},
        {name: "Vadim Zaporozhets", position: "CTO, Frontend developer", image: "VADYM.png", weight: 0.8},
        {name: "Andrii Diriavka", position: "CEO, Backend developer", image: "ANDRII.png", weight: 0.8},
        {name: "Ivan Kolomiets", position: "CIO, Backend developer", image: "IVAN.png", weight: 0.8},
        {name: "Eugene Onikiienko", position: "Frontend developer", image: "EUGENE.png", weight: 0.6},
        {name: "Lilia Diriavka", position: "Frontend developer", image: "LILIA Copy.png", weight: 0.6},
        {name: "Maryna Zazhytko", position: "Designer", image: "MARYNA.png", weight: 0.6},
        {name: "Ruslan Mikailov", position: "Backend developer", image: "RUSLAN.png", weight: 0.6}
    ],
    links: [
        {source: "U-Knight", target: "Vadim Zaporozhets"},
        {source: "U-Knight", target: "Andrii Diriavka"},
        {source: "U-Knight", target: "Ivan Kolomiets"},
        {source: "U-Knight", target: "Eugene Onikiienko"},
        {source: "U-Knight", target: "Lilia Diriavka"},
        {source: "U-Knight", target: "Maryna Zazhytko"},
        {source: "U-Knight", target: "Ruslan Mikailov"},
        {source: "Andrii Diriavka", target: "Vadim Zaporozhets"},
        {source: "Andrii Diriavka", target: "Ivan Kolomiets"},
        {source: "Andrii Diriavka", target: "Ruslan Mikailov"},
        {source: "Andrii Diriavka", target: "Maryna Zazhytko"},
        {source: "Ivan Kolomiets", target: "Ruslan Mikailov"},
        {source: "Vadim Zaporozhets", target: "Maryna Zazhytko"},
        {source: "Vadim Zaporozhets", target: "Lilia Diriavka"},
        {source: "Vadim Zaporozhets", target: "Eugene Onikiienko"},
        {source: "Eugene Onikiienko", target: "Lilia Diriavka"},
        {source: "Eugene Onikiienko", target: "Maryna Zazhytko"}
    ]
};