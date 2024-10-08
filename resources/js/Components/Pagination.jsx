
export const Pagination = ({ links }) => {
  if (links.length <= 3) {
    return null;
  }

  return (
    <div className="flex flex-wrap -mb-1">
      {links.map((link, key) => {
        if (link.url === null) {
          return (
            <div
              key={key}
              className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          );
        } else {
          return (
            <a
              key={key}
              className={`mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500 ${link.active ? 'bg-white' : ''}`}
              href={link.url}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          );
        }
      })}
    </div>
  );
};

export default Pagination;
