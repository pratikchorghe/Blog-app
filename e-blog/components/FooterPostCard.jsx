import React from 'react';
import Link from 'next/link';

const FooterPostCard = ({ post }) => (
  <div className="relative h-[5rem]">
    <div className="flex-col absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-full" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FooterPostCard;
