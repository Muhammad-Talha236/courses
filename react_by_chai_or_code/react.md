React 

Prop Drilling:
  
  Passing props through components that don't actually need them.
  App
 │
 ▼
Home ❌
 │
 ▼
Section ❌
 │
 ▼
Product ✅

Home and Section don't need the data.

They're just forwarding it.

If your app has 15 levels, you must pass props through all 15.

That becomes difficult to manage.

Context API Solution


Context lets you store data in one place.

Any component can access it directly.

           Context
              │
      ┌───────┼────────┐
      ▼       ▼        ▼
   Navbar   Cart    Profile

No prop drilling.