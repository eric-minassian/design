import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/chart"

const dailyTokens = [
  { day: "Oct 27", tokens: 182000 },
  { day: "Oct 28", tokens: 241000 },
  { day: "Oct 29", tokens: 318000 },
  { day: "Oct 30", tokens: 276000 },
  { day: "Oct 31", tokens: 204000 },
  { day: "Nov 1", tokens: 96000 },
  { day: "Nov 2", tokens: 118000 },
  { day: "Nov 3", tokens: 352000 },
]

const tokensConfig = {
  tokens: { label: "Tokens", color: "var(--chart-1)" },
} satisfies ChartConfig

const weeklyDeploys = [
  { week: "Sep 29", production: 6, preview: 18 },
  { week: "Oct 6", production: 9, preview: 24 },
  { week: "Oct 13", production: 7, preview: 21 },
  { week: "Oct 20", production: 11, preview: 29 },
  { week: "Oct 27", production: 8, preview: 26 },
  { week: "Nov 3", production: 12, preview: 31 },
]

const deploysConfig = {
  production: { label: "Production", color: "var(--chart-1)" },
  preview: { label: "Preview", color: "var(--chart-2)" },
} satisfies ChartConfig

const firstToken = [
  { hour: "09:00", opus: 1420, sonnet: 780, haiku: 310 },
  { hour: "11:00", opus: 1610, sonnet: 840, haiku: 340 },
  { hour: "13:00", opus: 1880, sonnet: 990, haiku: 360 },
  { hour: "15:00", opus: 1740, sonnet: 910, haiku: 330 },
  { hour: "17:00", opus: 1530, sonnet: 820, haiku: 320 },
  { hour: "19:00", opus: 1290, sonnet: 700, haiku: 290 },
]

const firstTokenConfig = {
  opus: { label: "Opus", color: "var(--chart-1)" },
  sonnet: { label: "Sonnet", color: "var(--chart-2)" },
  haiku: { label: "Haiku", color: "var(--chart-3)" },
} satisfies ChartConfig

export const notes =
  "Recharts with the token palette and a hairline grid. Colors follow the series in a fixed order, a single series needs no legend, and two measures on different scales get two charts."

export function AreaTokens() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Daily tokens</CardTitle>
        <CardDescription>All threads, last 8 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="aspect-auto h-56 w-full" config={tokensConfig}>
          <AreaChart accessibilityLayer data={dailyTokens} margin={{ left: 0, right: 8 }}>
            <CartesianGrid vertical={false} />
            <XAxis axisLine={false} dataKey="day" tickLine={false} tickMargin={8} />
            <YAxis
              axisLine={false}
              tickFormatter={(value: number) => `${value / 1000}k`}
              tickLine={false}
              width={36}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="tokens"
              fill="var(--color-tokens)"
              fillOpacity={0.12}
              isAnimationActive={false}
              stroke="var(--color-tokens)"
              strokeWidth={2}
              type="monotone"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function BarDeploys() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Deploys per week</CardTitle>
        <CardDescription>Production and preview environments</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="aspect-auto h-64 w-full" config={deploysConfig}>
          <BarChart accessibilityLayer barGap={2} barSize={12} data={weeklyDeploys} margin={{ left: 0, right: 8 }}>
            <CartesianGrid vertical={false} />
            <XAxis axisLine={false} dataKey="week" tickLine={false} tickMargin={8} />
            <YAxis axisLine={false} tickLine={false} width={28} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="production"
              fill="var(--color-production)"
              isAnimationActive={false}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="preview"
              fill="var(--color-preview)"
              isAnimationActive={false}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function LineLatency() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Time to first token</CardTitle>
        <CardDescription>Median by model, in milliseconds</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="aspect-auto h-64 w-full" config={firstTokenConfig}>
          <LineChart accessibilityLayer data={firstToken} margin={{ left: 0, right: 8 }}>
            <CartesianGrid vertical={false} />
            <XAxis axisLine={false} dataKey="hour" tickLine={false} tickMargin={8} />
            <YAxis axisLine={false} tickLine={false} width={40} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="opus"
              dot={false}
              isAnimationActive={false}
              stroke="var(--color-opus)"
              strokeWidth={2}
              type="monotone"
            />
            <Line
              dataKey="sonnet"
              dot={false}
              isAnimationActive={false}
              stroke="var(--color-sonnet)"
              strokeWidth={2}
              type="monotone"
            />
            <Line
              dataKey="haiku"
              dot={false}
              isAnimationActive={false}
              stroke="var(--color-haiku)"
              strokeWidth={2}
              type="monotone"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
