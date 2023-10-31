import {
  component$,
  Slot,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { SessionContext } from "~/context";
import { Child } from "./child";

export default component$(() => {
  const session = useSignal<{}>();

  useContextProvider(SessionContext, session);

  const render = useSignal(0);

  return (
    <div onClick$={() => render.value++}>
      <Child />

      {!render.value && <div>Click somewhere</div>}

      {!!session.value && <>Session exists</>}

      <Slot />
    </div>
  );
});
