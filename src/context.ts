import { type Signal, createContextId } from '@builder.io/qwik'

export const SessionContext = createContextId<Signal<{} | undefined>>('session')
