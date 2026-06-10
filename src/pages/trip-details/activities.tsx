import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ActivityItem, Chip } from "../../components/ui";
import { useActivities } from "./hooks";

export function Activities() {
  const { activities } = useActivities()

  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        {activities?.map((category) => (
          <React.Fragment key={category.date}>
            <Chip
              day={`Dia ${format(category.date, 'd')}`}
              dayWeek={format(category.date, 'EEEE', { locale: ptBR })}
            />

            {category.activities.length > 0 ? (
              <>
                {category.activities?.map((activity) => (
                  <ActivityItem
                    key={activity.id}
                    title={activity.title}
                    hour={`${format(activity.occurs_at, 'HH:mm')}h`}
                    hasActive
                  />
                ))}
              </>
            ) : (
              <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
            )}
          </React.Fragment>
        )
        )}
      </div>
    </div>
  )
}