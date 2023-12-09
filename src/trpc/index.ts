import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyApiRouter: publicProcedure.query(()=>{
        return 'hello'
    })
})

export type appRouter = typeof appRouter