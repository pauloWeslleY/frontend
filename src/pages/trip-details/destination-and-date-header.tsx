import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Separator, Button } from "../../components/ui";
import { Title } from "../../components/layout";

export function DestinationAndDateHeader() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <Title title="Florianópolis, Brasil" icon={MapPin} />

      <div className="flex items-center gap-5">
        <Title title="17 a 23 de Agosto" icon={Calendar} />

        <Separator variant="vertical" />

        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>

  )
}