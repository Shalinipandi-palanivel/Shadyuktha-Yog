const BlogCard = ({ post, onRead }) => {
  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={post.image}
          loading="lazy"
          alt={post.title}
          className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute bottom-4 left-4 bg-[#e7d7c8] text-gray-800 text-sm px-4 py-2 rounded-lg shadow">
          {post.date}
        </div>

        <div className="absolute top-4 left-4 bg-white/90 text-xs px-3 py-1 rounded-full font-medium">
          {post.category}
        </div>
      </div>

      <div className="mt-6 text-center">
        <h3 className="font-serif text-lg text-gray-800 leading-snug group-hover:text-primary transition">
          {post.title}
        </h3>
      </div>

      <button
        onClick={() => onRead(post)}
        className="mt-5 text-sm inline-flex items-center gap-2 px-4 py-2 text-primary rounded-full hover:bg-white hover:text-accent transition-all"
      >
        READ ARTICLE →
      </button>
    </article>
  );
};

export default BlogCard;