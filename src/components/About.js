const About = ({blogData}) => {
    console.log(blogData)
    return (<aside>
        <img src={blogData} alt="blog logo" />
    </aside> );
}
 
export default About;