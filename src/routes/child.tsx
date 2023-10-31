import { component$, useContext } from "@builder.io/qwik";
import { SessionContext } from "~/context";

export const Child = component$(() => {
  const session = useContext(SessionContext);

  return session.value ? (
    <div>Child component</div>
  ) : (
    <div>Child component</div>
  );
});
