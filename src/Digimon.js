class Digimon{
    static getAllDigimon(){
        return fetch(`https://digimon-api.herokuapp.com/api/digimon`)
                    .then(respond => respond.json())
                    .then(res => res)
    }

    static getSearchedDigimon(keyword){
        return fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${keyword}`)
                    .then(respond => respond.json())
                    .then(res => res)
    }

    static getLevelDigimon(level){
        return fetch(`https://digimon-api.herokuapp.com/api/digimon/level/${level}`)
                    .then(respond => respond.json())
                    .then(res => res)
    }   
}

export default Digimon