import { featuredData } from '../content/featuredData'

export const filteredData = (id: string) => {
    const filteredData = featuredData.filter((elem) => id === elem.id)
    const data = filteredData[0]
    return data
}
