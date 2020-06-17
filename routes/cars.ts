import { Router } from "https://deno.land/x/oak@v5.2.0/mod.ts";
import CarSchema from "../models/cars.ts";
import { db } from "../config/database.ts";

const cars = db.collection("cars");

const router = new Router();

router.get('/cars', (ctx)=>{


})
router.post('/car', async (ctx)=>{
    let car = await ctx.request.body();
    try {
        let id = await cars.insertOne(car.value)
        ctx.response.status = 201
        ctx.response.body = {msg: 'Car saved correctly', success: true}
        console.log(id)
    } catch (error) {
        ctx.response.status = 500
        ctx.response.body = {err: error, success: false}
    }
})
export default router