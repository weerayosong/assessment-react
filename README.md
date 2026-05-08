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
