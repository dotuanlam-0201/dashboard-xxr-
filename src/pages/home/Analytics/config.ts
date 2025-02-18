export const ANALYTICS_OVERVIEW = [
  {
    title: 'Available to withdraw',
    value: 1567.99,
    description: 'Wed, Jul 20',
    percentage: 10,
    isIncrease: true,
    format: "$0.00"
  },
  {
    title: 'Today Revenue',
    value: 2868.99,
    description: '143 Orders',
    percentage: 10,
    isIncrease: false,
    format: "$0.00"
  },
  {
    title: 'Today Sessions',
    value: 156000,
    description: '32k Visitors',
    percentage: 10,
    isIncrease: true,
    format: "0.0a"
  },
  {
    title: 'Subscribers',
    value: 34200,
    description: '$32.48 Average Order',
    percentage: 8.3,
    isIncrease: true,
    format: "0.0a"
  },
]

export const generateRandomData = () => {
  const min = 1000;
  const max = 5000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateData = () => {
  return [
    { name: 'Page A', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page B', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page C', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page D', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page E', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page F', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page G', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page H', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page I', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page J', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page K', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page L', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page M', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page N', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page O', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page P', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page Q', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page R', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page S', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page T', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page U', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page V', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page W', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page X', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page Y', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
    { name: 'Page Z', uv: generateRandomData(), pv: generateRandomData(), amt: generateRandomData() },
  ];
};

export const SALES_FUNNEL_DUMP_DATA = {
  day: generateData(),
  month: generateData(),
  quarter: generateData(),
  year: generateData(),
};

export const WATCH_LISTS_DUMP_DATA = { "Daily": generateData(), "Weekly": generateData(), "Monthly": generateData(), "Quarterly": generateData(), "Yearly": generateData() }