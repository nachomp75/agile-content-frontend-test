import { faker } from '@faker-js/faker'

import { type Result } from '../interfaces'

export const getResults = (searchTerm: string): Promise<Result[]> => {
  const data = [...new Array(100)]
    .map((_item, index) => {
      const type = faker.animal.type()
      return {
        type,
        id: index + 1,
        url: faker.internet.url(),
        title: (faker.animal as any)[type](),
        description: faker.lorem.sentences(),
        image: faker.image.animals(644, 362, true)
      }
    })
    .filter(
      ({ type, title }) =>
        type.includes(searchTerm?.toLowerCase()) ||
        title.includes(searchTerm?.toLowerCase())
    )

  return new Promise((resolve) => setTimeout(resolve, 1000)).then(() => data)
}
