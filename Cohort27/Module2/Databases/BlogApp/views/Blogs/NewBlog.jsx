const React = require("react")
const Navbar = require("../components/Navbar")

class NewBlog extends React.Component{
    render(){
        return(
            <body>
                <head>
                <link rel="stylesheet" href="/CSS/newblog.css"/> 
                </head>

            <Navbar/>

                <h1>Create New Blog</h1>


                <form action="/blog" method="POST">
                    <h5>Title:</h5> <input type="text" name="title"></input>
                    <h5>Author:</h5> <input type="text" name="author"></input>
                    <h5>Profile Pic:</h5> <input type="text" name="authorImage"></input>
                    <h5>Body:</h5> <textarea></textarea>
                    <h5>Sponsored:</h5> <input></input>
                    


                </form>


            </body>
        )

    }
}

module.exports = NewBlog