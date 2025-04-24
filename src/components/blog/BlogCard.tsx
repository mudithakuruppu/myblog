import React from 'react';
import { Link } from 'react-router-dom';
interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}
export const BlogCard = ({
  id,
  title,
  excerpt,
  image,
  author,
  date
}: BlogCardProps) => {
  return <article className="flex flex-col rounded-lg overflow-hidden">
      <Link to={`/blog/${id}`} className="block relative aspect-video overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </Link>
      <div className="mt-4">
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-semibold text-gray-900 hover:text-gray-700">
            {title}
          </h3>
        </Link>
        <p className="mt-2 text-gray-500 line-clamp-2">{excerpt}</p>
        <div className="mt-4 flex items-center">
          <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{author.name}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </article>;
};