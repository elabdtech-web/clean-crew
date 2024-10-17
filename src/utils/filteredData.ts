import { featuredData } from '../content/featuredData'
export function filteredFeaturedData(id: string): any {
    const filteredData = featuredData?.find((elem) => elem.id === id)
    console.log(filteredData)
    return filteredData
}
