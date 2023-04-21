# Agile Content: Frontend technical test

## Goal of the test

The purpose of the test is to validate your technical and organizational skills. It’s not a big deal if you can’t finish it, we prefer to have an incomplete clean and functional code than a badly organized and “ugly” code.

You can use any framework (preferably **React**) or external resources you need or even
**vanilla js**, but don’t forget that the goal is to show us your competences.

All styling has to be done without any external UI library.

## Specifications

The application to develop is quite simple (you can refer to the screenshots for more
details):

### “Homepage”

- A search input that allows you to search for animals, the retrieved results will be
  displayed on the results page
- Header and footer are just visual elements, they are not interactive

### “Results page”

- A search input is displayed in the header to be able to search again
- All retrieved results are displayed as a list
- When clicking on an item title, additional information will be displayed in a box
- If no results are found, a message should be displayed
- If no search term is used, another message should be displayed

### “Data”

- All data is created using faker.js (https://github.com/faker-js/faker)
- Images are from random animals, so it’s ok if they don’t match the selected item
- Animals are searched by both title and type

## Objectives

- Build this application as a production grade code.
- Focus on replicating the given screenshots/design
- Provide at least one test validating some use cases
- What would you have done differently if you had more time? Why? [Answer below](#what-would-you-have-done-differently-if-you-had-more-time)

## Screenshots

**The initial state of the application**

![Home](screenshots/home.png 'Home')

**When writing**

![Home search](screenshots/home-search.png 'Home search')

**Search results**

![Results loading](screenshots/results-loading.png 'Results loading')
![Results](screenshots/results.png 'Results ')

**When clicking on one result**

![Results detail](screenshots/results-detail.png 'Results detail')

**When searching and receiving no results**

![Results not found](screenshots/results-not-found.png 'Results not found')

**When starting search without a search term**

![Results empty](screenshots/results-empty.png 'Results empty')

**Responsive**

![Responsive tablet](screenshots/responsive-tablet.png 'Responsive tablet')
![Responsive phone](screenshots/responsive-phone.png 'Responsive phone')

**You can get all data items using Faker.js, example:**

```js
import faker from 'faker'

const getImage = () => faker.image.animals(644, 362, true)
const getType = () => faker.animal.type()
const getUrl = () => faker.internet.url()
const getText = () => faker.lorem.sentences()
const getTitle = (type) => faker.animal[type]()

const data = [...new Array(100)].map((item, index) => {
  const type = getType()
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage()
  }
})

export default data
```

_It would be great to read them as a promise that takes some seconds even though they are static data._

## What would you have done differently if you had more time?

In a larger scale application with more development time I would have given more importance to code robustness. I would do this by improving the code coverage through more unit and integration tests and by adding end-to-end tests with tools like Cypress or Playwright.

It would also improve the functionality already developed by adding strong contingency handling: handling of erroneous requests, form validations, error boundaries, etc.

I would improve the project structure to make it more scalable: segmenting by responsibilities, grouping potentially reusable functionality, better CSS styling architecture...

If the size of the project was to grow in the future and the state management of the application was more complex I would use the React Context API or something more specialized like Redux.

Finally I would try to improve the UX/UI: better interaction with the application to make it more intuitive, add animations and micro-interactions that give a greater sense of fluidity and make the application more pleasing to the eye.
