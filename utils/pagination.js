exports.pagination = (data, param) => {
    let itemPerPage = 3
    let numberPages = data.length / itemPerPage

    if(!Number.isInteger(numberPages)) numberPages = Math.trunc(numberPages) + 1
    

    if(!param) {
        let copyPost = data.slice(0,itemPerPage)
        return [copyPost, numberPages]
    } else {
        let copyPost = data.slice(0,itemPerPage)
        return copyPost
    }
}