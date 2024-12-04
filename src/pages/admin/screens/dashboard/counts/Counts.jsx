import React from 'react';

const Counts = () => {
  // Static data for counts (replace this with dynamic data from your backend later)
  const counts = {
    users: 120,
    admins: 5,
    categories: 10,
    posts: 100,
    comments: 450,
    resources: 25,
  };

  const countCards = [
    { title: 'Users', count: counts.users },
    { title: 'Admins', count: counts.admins },
    { title: 'Categories', count: counts.categories },
    { title: 'Posts', count: counts.posts },
    { title: 'Comments', count: counts.comments },
    { title: 'Resources', count: counts.resources },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {countCards.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
        >
          <div className="flex items-center">
            <h3 className="text-md font-semibold text-gray-700">{item.title}</h3>
            <p className="ml-4 text-xl font-bold text-blue-500">{item.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counts;
