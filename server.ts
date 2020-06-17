import { Application } from "https://deno.land/x/oak@v5.2.0/mod.ts";
import cars from "./routes/cars.ts";
const app = new Application()

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} | ${ctx.request.url}`);
    await next();
})
app.use(cars.routes())

app.addEventListener("listen", ({port})=> {
    console.log(`App listening in localhost:${port}`)
})
await app.listen({port: 5000})  