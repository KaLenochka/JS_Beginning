const post = {
    title: "My post",
    likesQty: 5
}

console.log(JSON.stringify(post))

const postStringified = JSON.stringify(post)

console.log(JSON.parse(postStringified))
