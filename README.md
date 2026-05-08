# My understanding | Assessment-React 👍

## There are 4 pages in total

**Which all pages have the same component , that's right** `Header`

1 `Home`
2 `User`
3 `Admin`

### Three of this main page have the same layout, yup `Header` + `SectionContent`(just for store the different title of each page)

4 `Owner` just a static page, let them chill atm.

I'll make the `MainLayout` (Outlet of Header+SectionContent)

### this project i don't wanna use Context then simple state with react-router-dom're good enough

last but not least `App` to manage all route, and then It's time to start my first phase!

---

- setup route in `App`
- make `MainLayout` component to setup all layout Header + Outlet.
- make 2 pages Home and Owner, with their paths, cool.
- prepare `title` for Home, User and Admin Pages.

---

- add btn, onClick, useNavigate >> 2 new page-level components (That's just contain different title only).

---

## next, User.jsx (fetch, store, and display)

**I use 4 Hooks (3 useState, 1 useEffect)**

- useEffect: fetch always use useEffect, except that you have all data prepared in your store(global), [] dependency for only first-time on page load.
- 3 useState:

1. `members`: my data storage(array[]), use first at the `Try` block `setMembers(data)`
   for store data then use to display them all with `members.map()`.

2. `isLoading`: is it loading?(bool), use for check is it loading >> then re-render, another role is for close the status isLoading even done or error.

3. `error`: just use as an error bin(null or error.message)

**That's right >> Fetch >> !isLoading !error then.. return UI!**

- if state change? yup, re-render!

---

## then, Admin.jsx (only UI)

- Ctrl+C and Ctrl+V from User.jsx
- Add Create member form.
- Add Admin CRUD field in display table.

---
