'use client';

const TrendingSection = () => {
  const trending = [
    {
      id: 1,
      title: 'Why Ghee is Making a Comeback in Modern Cooking',
      views: '8.2K',
      category: 'Food',
    },
    {
      id: 2,
      title: 'The Science Behind Slow Cooking',
      views: '6.5K',
      category: 'Science',
    },
    {
      id: 3,
      title: 'Top 5 Kitchen Gadgets of 2025',
      views: '5.9K',
      category: 'Technology',
    },
    {
      id: 4,
      title: 'Plant-Based Alternatives to Your Favorite Foods',
      views: '4.8K',
      category: 'Nutrition',
    },
    {
      id: 5,
      title: 'Cooking Methods That Preserve Nutrients',
      views: '3.7K',
      category: 'Health',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trending Now</h2>

        <div className="max-w-3xl mx-auto">
          {trending.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors rounded-lg mb-2"
            >
              <div className="flex items-center">
                <span className="text-3xl font-bold text-[#2196f3] mr-6">
                  #{index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-lg hover:text-[#2196f3] cursor-pointer transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500">{item.category}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {item.views} views
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
