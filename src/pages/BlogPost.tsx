import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Heading, Text } from '../components/Typography';
import { Container } from '../components/ui';
import { blogPosts } from '../data/blogPosts';
import { PageNavigation } from '../components/PageNavigation';
import ReactMarkdown from 'react-markdown';

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);
  const currentIndex = blogPosts.findIndex(post => post.id === id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined;

  if (!post) {
    return (
      <Container>
        <Card>
          <Heading>Post not found</Heading>
          <Link to="/blog" className="text-red-400 hover:text-red-300">
            ← Back to Blog
          </Link>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="text-red-400 hover:text-red-300 mb-6 inline-block">
          ← Back to Blog
        </Link>
        
        <Card className="overflow-hidden">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover -mx-6 -mt-6 mb-6"
          />
          
          <div className="mb-4 flex items-center justify-between">
            <span className="text-red-400">{post.category}</span>
            <span className="text-gray-500">{post.date}</span>
          </div>

          <Heading className="text-3xl mb-4">{post.title}</Heading>
          
          <div className="flex items-center justify-between mb-8 text-sm">
            <span className="text-gray-400">{post.author}</span>
            <span className="text-gray-400">{post.readTime}</span>
          </div>

          <div className="prose prose-invert prose-red max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </Card>

        <PageNavigation
          prevLink={prevPost ? `/blog/${prevPost.id}` : undefined}
          nextLink={nextPost ? `/blog/${nextPost.id}` : undefined}
          prevText={prevPost?.title}
          nextText={nextPost?.title}
        />
      </div>
    </Container>
  );
}