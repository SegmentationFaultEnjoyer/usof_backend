exports.PostResponse = function({ id, title, publish_date, status, content, categories, author, is_edited }, include = null) {
    let response = {
        data: {
            id, 
            type: "post",
            attributes: {
                title,
                publish_date,
                status,
                content,
                categories,
                is_edited
            },
            relationships: {
                author: {
                    id: author,
                    type: 'user'
                }
            }
        }
    }

    if(include !== null)
        response.include = include

    return response;
}

exports.PostListResponse = function (postsList, links = {}) {
    return {
        data: postsList.map(post => ({
            id: post.id,
            type: "post",
            attributes: {
                title: post.title,
                publish_date: post.publish_date,
                status: post.status,
                content: post.content,
                categories: post.categories,
                is_edited: post.is_edited
            },
            relationships: {
                author: {
                    id: post.author,
                    type: 'user'
                }
            }
        })),
        links
    }
}

exports.PostLikeResponse = function ({ id, author, publish_date, liked_on, is_dislike, post_id }) {
    return {
        data: {
            id,
            type: "like",
            attributes: {
                publish_date,
                liked_on,
                is_dislike
            },
            relationships: {
                author: {
                    id: author,
                    type: 'user'
                },
                post: {
                    id: post_id,
                    type: 'post'
                }
            }
        }
    }
}

exports.PostLikesListResponse = function(likesList, links = {}) {
    return {
        data: likesList.map(like => ({
            id: like.id,
            type: "like",
            attributes: {
                publish_date: like.publish_date,
                liked_on: like.liked_on,
                is_dislike: like.is_dislike,
            },
            relationships: {
                author: {
                    id: like.author,
                    type: 'user'
                },
                post: {
                    id: like.post_id,
                    type: 'post'
                }
            }
        })),
        links
    }
}