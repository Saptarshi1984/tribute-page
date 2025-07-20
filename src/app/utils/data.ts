import culture from '@/data/culture.json';
import luminaries from '@/data/luminaries.json'
import tourism from '@/data/tourism.json'

export  function getCultureData() {

    return culture;
}

export  function getLuminariesData() {

    const sortedLuminaries = [...luminaries].sort((a,b) => a.name.localeCompare(b.name))

    return sortedLuminaries;
}

export  function getTourismsData() {

    return tourism;
}