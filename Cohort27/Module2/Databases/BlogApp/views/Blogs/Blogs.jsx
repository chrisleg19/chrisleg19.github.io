const React = require("react")

class Blogs extends React.Component{
    render(){
        const {blogs} = this.props
        // console.log(blogs)
        return(
            <body>
                <head>
                    <link rel="stylesheet" href="/CSS/app.css"/> 
                </head>
                <h1>Blogs View Page</h1>
                <a href="/">Home</a>

                <ul>
                    {blogs.map((blog,idx)=>(
                        <li key={idx}>
                            Title: <a href={`/blog/${blog._id}`}>{blog.title}</a>
                            <br/>
                            Author: <h3>{blog.author}</h3> 
                            <br/>
                            Likes:  <h3>{blog.likes}</h3>
                        </li>


                    ))}

                </ul>
                
            </body>

        )
    }
}

module.exports = Blogs