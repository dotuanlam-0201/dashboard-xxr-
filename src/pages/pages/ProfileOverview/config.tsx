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
