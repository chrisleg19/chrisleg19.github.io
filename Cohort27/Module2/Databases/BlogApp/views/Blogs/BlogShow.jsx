const React = require("react")
const Navbar = require("../components/Navbar")

class BlogShow extends React.Component{
    render(){
        const {blog} = this.props
        // console.log(blog)
        return(
            <body>

                <head>
                    <link rel="stylesheet" href="/CSS/blogshow.css"/> 
                </head>

                <Navbar />

                <h1>Enjoy your Read!</h1>
                <div className="infoCont">
                <div className="info">
                <h2>{blog.title}</h2>

                <div className="writtenBy">
                <h4>Written By:</h4><p>{blog.author}</p>
                </div>

                <div className="likes">
                <h4>Likes:</h4><p>{blog.likes}</p>
                </div>

                <div className="sponsored">
                {blog.sponsored === true ? <p><span>Sponsored:</span> Yes</p> : <p><span>Sponsored:</span> No</p>}
                </div>

                <h4 className="created">Created:</h4>

                <a href={`/blog/${blog._id}/edit`} className="editBlog">Edit Blog</a>

                <form action={`/blog/${blog._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" className="deleteBlog"/>
                </form>


                </div>
                
                <image className="profilePic" src={blog.authorImage}></image>


                </div>

                <div className="blogBody">
                <p>{blog.body}</p>
                </div>

                



            </body>

        )
    }
}

module.exports = BlogShow