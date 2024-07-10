import { CircleCheck, CircleDashed } from "lucide-react";
import { ActivityItem, Chip } from "../../components/ui";

export function Activities() {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <Chip day="Dia 17" dayWeek="Sábado" />
        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
      </div>

      <div className="space-y-2.5">
        <Chip day="Dia 18" dayWeek="Domingo" />

        <ActivityItem
          title="Academia em grupo"
          hour="08:00h"
          icon={<CircleCheck className="size-5 text-lime-300" />}
        />

        <ActivityItem
          title="Almoço"
          hour="12:00h"
          icon={<CircleCheck className="size-5 text-lime-300" />}
        />

        <ActivityItem
          title="Churrasco"
          hour="21:00h"
          icon={<CircleDashed className="text-zinc-400 size-5 shrink-0" />}
        />
      </div>
    </div>
  )
}