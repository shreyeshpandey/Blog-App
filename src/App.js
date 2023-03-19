import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  // Replace this with an array of blog post objects
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Successful Online Learning",
      author: "John Smith",
      date: "2022-03-01",
      image: "https://picsum.photos/id/1018/500/300",
      content: "Online learning has become increasingly popular over the years, and for good reason. It's flexible, convenient, and allows individuals to learn at their own pace. However, it can also be challenging if you're not prepared. Here are 10 tips to help you succeed in your online learning journey...",
      category: "Education"
    },
    {
      id: 2,
      title: "The Best Way to Learn React in 2022",
      author: "Jane Doe",
      date: "2022-02-15",
      image: "https://picsum.photos/id/1062/500/300",
      content: "React is a popular JavaScript library for building user interfaces. With its growing popularity, it's becoming increasingly important to learn React. But what's the best way to do so? In this post, we'll explore some of the most effective ways to learn React in 2022...",
      category: "Technology"
    },
    {
      id: 3,
      title: "The Benefits of Meditation for Stress Relief",
      author: "Emily Johnson",
      date: "2022-02-05",
      image: "https://picsum.photos/id/1074/500/300",
      content: "Meditation has been practiced for thousands of years, and for good reason. It's a simple yet powerful tool that can help you manage stress and improve your overall well-being. In this post, we'll explore the benefits of meditation and how you can get started with your own meditation practice...",
      category: "Health"
    }
  ];
  
  

  return (
    <div className="app">
      {/* <Header /> */}
      <div className="blog-cards-container">
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
