import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import {
  generateData,
  generateRandomData,
} from "#src/pages/home/Analytics/config.ts"
import { alpha } from "#src/utilities/alpha.ts"

export const getProfileOverviewDumpData = () => {
  const {
    token: { colorPrimary, colorSuccess, colorInfo },
  } = useConfigTheme()
  return [
    {
      value: 635,
      isIncrease: true,
      description: "Average Likes",
      data: generateData(),
      percentage: 21.01,
      color: colorPrimary,
    },
    {
      value: 123,
      isIncrease: true,
      description: "Comments recived",
      data: generateData(),
      percentage: 4.39,
      color: colorSuccess,
    },
    {
      value: 23,
      isIncrease: false,
      description: "Av. Engagement rate",
      data: generateData(),
      percentage: 7.9,
      valueAffix: "%",
      color: colorInfo,
    },
  ]
}

export const FOLLOWERS_DUMP_DATA = [
  {
    name: "25.02",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "26.02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "27.02",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "28.02",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "29.02",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "30.02",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "31.02",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const PROFILE_OVERVIEW_ACTIONS_DUMP_DATA = [
  {
    label: "Profile visits",
    value: 250,
  },
  {
    label: "Website clicks",
    value: 115,
  },
  {
    label: "Calls",
    value: 67,
  },
  {
    label: "Getvdirection",
    value: 164,
  },
  {
    label: "Emails",
    value: 170,
  },
]

export const generateDataDate = () => {
  return [
    {
      name: "Mon",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "Tue",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "Wed",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "Thu",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "Fri",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "Sat",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "Sun",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
  ]
}

export const BEST_TIME_DUMP_DATA = {
  Days: generateDataDate(),
  Hours: generateDataDate(),
}

export const getGenderDumpData = () => {
  const {
    token: { colorPrimary },
  } = useConfigTheme()

  return [
    { name: "Men", value: 400, color: colorPrimary },
    { name: "Women", value: 300, color: alpha(colorPrimary, 0.5) },
    { name: "Others", value: 100, color: alpha(colorPrimary, 0.1) },
  ]
}

export const generateAgeRange = () => {
  return [
    {
      name: "13-17",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "18-24",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "25-34",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "35-44",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "45-54",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "55-64",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
    {
      name: "65-74+",
      uv: generateRandomData(),
      pv: generateRandomData(),
      amt: generateRandomData(),
    },
  ]
}

export const GENDER_RANGE_DUMP_DATA = {
  All: generateAgeRange(),
  Men: generateAgeRange(),
  Women: generateAgeRange(),
}

export const MY_PROFILE_HASHTAGS_DUMP_DATA = [
  {
    name: "Sport & Health",
    tags: ["sport", "fit", "health"],
  },
  {
    name: "Travel & Food",
    tags: ["travel", "food", "foodie", "wanderlust", "vacation"],
  },
  {
    name: "Music & Art",
    tags: ["music", "art", "artist", "design", "photography"],
  },
  {
    name: "Technology & Innovation",
    tags: ["tech", "innovation", "coding", "developer", "ai"],
  },
  {
    name: "Nature & Outdoors",
    tags: ["nature", "hiking", "camping", "adventure", "wildlife"],
  },
  {
    name: "Books & Reading",
    tags: ["books", "reading", "literature", "library", "writer"],
  },
  {
    name: "Fashion & Style",
    tags: ["fashion", "style", "beauty", "makeup", "clothes"],
  },
  {
    name: "Education & Learning",
    tags: ["education", "learning", "student", "teacher", "knowledge"],
  },
]

export type TypeBillingHistory = {
  billing: string
  billing_date: string
  amount: string
  plan: string
  users: number
  isPaid: boolean
}

export const BILLING_HISTORY_DUMP_DATA: TypeBillingHistory[] = [
  {
    billing: "Billing #780-Dec 2022",
    billing_date: "Dec 23, 2022",
    amount: "USD $12.00",
    plan: "Basic plan",
    users: 15,
    isPaid: true,
  },
  {
    billing: "Billing #345-Nov 2022",
    billing_date: "Nov 12, 2022",
    amount: "USD $22.00",
    plan: "Basic plan",
    users: 56,
    isPaid: true,
  },
  {
    billing: "Billing #213-Oct 2022",
    billing_date: "Oct 09, 2022",
    amount: "USD $80.00",
    plan: "Basic plan",
    users: 90,
    isPaid: true,
  },
  {
    billing: "Billing #324-Aug 2022",
    billing_date: "Aug 03, 2022",
    amount: "USD $12.00",
    plan: "Basic plan",
    users: 22,
    isPaid: true,
  },
  {
    billing: "Billing #123-July 2022",
    billing_date: "July 13, 2022",
    amount: "USD $67.00",
    plan: "Basic plan",
    users: 23,
    isPaid: true,
  },
  {
    billing: "Billing #456-Jun 2022",
    billing_date: "Jun 15, 2022",
    amount: "USD $50.00",
    plan: "Basic plan",
    users: 30,
    isPaid: true,
  },
  {
    billing: "Billing #789-May 2022",
    billing_date: "May 20, 2022",
    amount: "USD $75.00",
    plan: "Premium plan",
    users: 10,
    isPaid: true,
  },
  {
    billing: "Billing #101-Apr 2022",
    billing_date: "Apr 12, 2022",
    amount: "USD $100.00",
    plan: "Premium plan",
    users: 20,
    isPaid: true,
  },
  {
    billing: "Billing #111-Mar 2022",
    billing_date: "Mar 18, 2022",
    amount: "USD $90.00",
    plan: "Basic plan",
    users: 45,
    isPaid: true,
  },
  {
    billing: "Billing #222-Feb 2022",
    billing_date: "Feb 25, 2022",
    amount: "USD $85.00",
    plan: "Basic plan",
    users: 35,
    isPaid: true,
  },
  {
    billing: "Billing #333-Jan 2022",
    billing_date: "Jan 10, 2022",
    amount: "USD $70.00",
    plan: "Basic plan",
    users: 28,
    isPaid: true,
  },
  {
    billing: "Billing #444-Dec 2021",
    billing_date: "Dec 28, 2021",
    amount: "USD $60.00",
    plan: "Basic plan",
    users: 18,
    isPaid: true,
  },
  {
    billing: "Billing #555-Nov 2021",
    billing_date: "Nov 15, 2021",
    amount: "USD $55.00",
    plan: "Basic plan",
    users: 25,
    isPaid: true,
  },
  {
    billing: "Billing #666-Oct 2021",
    billing_date: "Oct 22, 2021",
    amount: "USD $45.00",
    plan: "Basic plan",
    users: 32,
    isPaid: true,
  },
  {
    billing: "Billing #777-Sep 2021",
    billing_date: "Sep 18, 2021",
    amount: "USD $40.00",
    plan: "Basic plan",
    users: 12,
    isPaid: true,
  },
  {
    billing: "Billing #888-Aug 2021",
    billing_date: "Aug 25, 2021",
    amount: "USD $35.00",
    plan: "Basic plan",
    users: 15,
    isPaid: true,
  },
  {
    billing: "Billing #999-Jul 2021",
    billing_date: "Jul 10, 2021",
    amount: "USD $30.00",
    plan: "Basic plan",
    users: 20,
    isPaid: true,
  },
  {
    billing: "Billing #000-Jun 2021",
    billing_date: "Jun 20, 2021",
    amount: "USD $25.00",
    plan: "Basic plan",
    users: 10,
    isPaid: true,
  },
  {
    billing: "Billing #111-May 2021",
    billing_date: "May 15, 2021",
    amount: "USD $20.00",
    plan: "Basic plan",
    users: 8,
    isPaid: true,
  },
  {
    billing: "Billing #222-Apr 2021",
    billing_date: "Apr 10, 2021",
    amount: "USD $15.00",
    plan: "Basic plan",
    users: 5,
    isPaid: true,
  },
]
