import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Text } from '../components/Typography';
import { PageLayout } from '../layouts';
import { blogPosts } from '../data/blogPosts';
import { FloatingCard } from '../components/FloatingCard';

export function Blog() {
  return (
    <PageLayout>
      <div className="space-y-8">
        <div className="text-center mb-12">
          <Heading className="text-4xl mb-4">3D Printing Blog</Heading>
          <Text className="text-xl">Latest articles, tips, and insights about 3D printing</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <FloatingCard>
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-red-400">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <Heading className="text-xl mb-2">{post.title}</Heading>
                <Text className="mb-4 line-clamp-2">{post.excerpt}</Text>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{post.author}</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
              </FloatingCard>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}