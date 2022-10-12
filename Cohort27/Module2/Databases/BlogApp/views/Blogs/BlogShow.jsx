const React = require("react")

class BlogShow extends React.Component{
    render(){
        const {blog} = this.props
        return(
            <body>

                <head>
                    <link rel="stylesheet" href="/CSS/app.css"/> 
                </head>

                <h1>Enjoy your Read!</h1>
                <a href={"/"}>Home</a>
                <br/>
                Title:<h3>{blog.title}</h3>
                <br/>
                Author:<h3>{blog.author}</h3>
                <br/>
                Likes:<h4>{blog.likes}</h4>
                <br/>
                Sponsored:<h4>{blog.sponsored}</h4>
                <br/>
                Created:<h5>{blog.timestamps}</h5>
                <p>{blog.body}</p>

            </body>

        )
    }
}

module.exports = BlogShow