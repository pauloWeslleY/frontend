interface ChipProps {
  day: string
  dayWeek: string
}

export function Chip({ dayWeek, day }: ChipProps) {
  return (
    <div className="flex gap-2 items-baseline">
      <span className="text-xl text-zinc-300 font-semibold">{day}</span>
      <span className="text-sm text-zinc-500">{dayWeek}</span>
    </div>
  )
}