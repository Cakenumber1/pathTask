/*
  У нас есть набор билетов вида:
  const tickets = [
    {from: 'London',to: 'Moscow'},
    {from: 'NY',to: 'London'},
    {from: 'Portugal',to: 'NY'},
    {from: 'Moscow',to: 'SPb'},
    {from: 'SPb',to: 'Kairo'}
  ];

  Из этих билетов можно построить единственный, неразрывный маршрут.
  Петель и повторов в маршруте нет.

  Нужно написать программу, которая возвращает билеты 
  в порядке следования по маршруту.
*/

export const getRoute = (tickets) => {
  const map = new Map();
  const set = new Set();
  tickets.forEach(({ from, to }) => {
    // get set with 2 unique values (start & end)
    if (set.has(from)) {
      set.delete(from);
    } else {
      set.add(from);
    }

    if (set.has(to)) {
      set.delete(to);
    } else {
      set.add(to);
    }

    // fill map for step 2
    map.set(from, to);
  });

  const arr = [...set];

  if (arr.length !== 2) {
    return 0;
  }

  const start = map.has(arr[0]) ? arr[0] : arr[1];

  const path = [];

  path.push({ from: start, to: map.get(start) });

  while (path.length < tickets.length) {
    const current = path[path.length - 1].to;
    path.push({ from: current, to: map.get(current) });
  }

  return path;
};

// getRoute([
//   { from: "NY", to: "London" },
//   { from: "Portugal", to: "NY" }
// ]);

// getRoute([
//   { from: "NY", to: "London" },
//   { from: "Portugal", to: "NY" }
// ]),
// [
//   { from: "Portugal", to: "NY" },
//   { from: "NY", to: "London" }
// ]

// getRoute([
//   { from: "London", to: "Moscow" },
//   { from: "NY", to: "London" },
//   { from: "Portugal", to: "NY" },
//   { from: "Moscow", to: "SPb" },
//   { from: "SPb", to: "Kairo" }
// ]),
// [
//   { from: "Portugal", to: "NY" },
//   { from: "NY", to: "London" },
//   { from: "London", to: "Moscow" },
//   { from: "Moscow", to: "SPb" },
//   { from: "SPb", to: "Kairo" }
// ]
