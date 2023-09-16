/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

Route.post('/', async ({ request, response }) => {
  const payload = await request.validate({
    schema: schema.create({
      fullName: schema.string.nullableAndOptional([rules.trim()]),
    }),
  })

  return response.ok({ requestBody: request.body(), payload: payload })
})
