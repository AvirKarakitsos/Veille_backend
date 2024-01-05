exports.pagination = (data, page, itemPerPage) => {
    let numberPages = data.length / itemPerPage
    let copyPost = null

    if(!Number.isInteger(numberPages)) numberPages = Math.trunc(numberPages) + 1
    

    if(!page) {
        copyPost = data.slice(0,itemPerPage)
        return [copyPost, numberPages]
    } else {
        if(parseInt(page) === numberPages) {
            copyPost = data.slice(itemPerPage*page-itemPerPage)
            return [copyPost, numberPages]
            // return copyPost
        } else {
            copyPost = data.slice(itemPerPage*page-itemPerPage,itemPerPage*page)
             return [copyPost, numberPages]
            // return  copyPost
        }
    }
}