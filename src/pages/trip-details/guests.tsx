import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button, GuestItem } from "../../components/ui";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <GuestItem
          text="Rodney White"
          description="ford_prosacco@hotmail.com"
          icon={
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          }
        />

        <GuestItem
          text="Jessica White"
          description="jessica.white44@yahoo.com"
          icon={
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          }
        />

        <GuestItem
          text="Wilfred Dickens III"
          description="marian.hyatt@hotmail.com"
          icon={
            <CircleCheck className="size-5 text-lime-300" />
          }
        />

        <GuestItem
          text=""
          description="lacy.stiedemann@gmail.com"
          icon={
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          }
        />
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}