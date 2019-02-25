export function orderByNumber(data, order, term) {
    return [...data].sort((a,b) => {
        return order === "asc" ?  a[term] - b[term] :  b[term] - a[term]
    });
}

// export function orderByDate(data, order, term) {
//
//     return [...data].sort((a,b) => {
//         return order === "asc" ? a.getTime() - b.getTime()});
//
//     })
//     return [...data].sort((a,b) => {
//         return order === "asc" ?  a[term] - b[term] :  b[term] - a[term]
//     });
// }
