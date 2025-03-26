'use client';

// import { useState } from 'react';
// import Navbar from '@/src/components/Navbar';
import BlogCard from '@/src/components/BlogCard';
// import AuthModal from '@/src/components/AuthModal';

export default function Home() {
  // const [isAuthOpen, setIsAuthOpen] = useState(false);
  // const [authMode, setAuthMode] = useState('signup');

  // const openAuthModal = (mode: string) => {
  //   setAuthMode(mode);
  //   setIsAuthOpen(true);
  // };

  // const closeAuthModal = () => {
  //   setIsAuthOpen(false);
  // };

  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'Ghee',
      image: '/ghee.jpg',
      content:
        'Ghee is typically prepared by simmering butter, which is churned from cream, skimming any impurities from the surface, then pouring and retaining the clear liquid fat while discarding the solid residue that has settled to the bottom.',
    },
    {
      id: 2,
      title: 'Yogurt',
      image: '/curd.jpg',
      content:
        'Yogurt is produced using a culture of Lactobacillus delbrueckii subsp. bulgaricus and Streptococcus thermophilus bacteria. In addition, other lactobacilli and bifidobacteria are sometimes added during or after culturing yogurt.',
    },
    {
      id: 3,
      title: 'Cheese',
      image: '/cheese.jpg',
      content:
        'A food derived form milk which is produced in wide range of flavors, textures, and forms of coagulation of milk protein casein. Cheese is valued for its portability and long shelf life.',
    },
    {
      id: 4,
      title: 'Buttermilk',
      image: '/buttermilk.jpg',
      content:
        'Originally, buttermilk was the liquid left behind after churning butter out of cream. This type of buttermilk is called traditional buttermilk. When butter is made from fermented cream, the residual is a low-fat, flavorful milk.',
    },
    {
      id: 5,
      title: 'Cream',
      image: '/cream.jpg',
      content:
        'Composed of higher butterfat layer skimmed from top of milk before homogenisation. In un homogenised milk, the fat, which is less dense will eventually rise to the top.',
    },
    {
      id: 6,
      title: 'Butter',
      image: '/butter.jpeg',
      content:
        'Made by churning fresh and fermented cream and milk. It is generally used as a spread and a condiment, as well as in cooking, such as baking, sauce making, and pan frying.',
    },
  ];

  return (
    <main>
      {/* <Navbar
        onLoginClick={() => openAuthModal('login')}
        onSignupClick={() => openAuthModal('signup')}
      /> */}

      <div className="text-center mt-10">
        <h2 className="text-[#2196f3] text-[50px] font-['Leckerli_One',_cursive] underline">
          Blogs
        </h2>
      </div>

      <section className="px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-5 justify-center">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
              />
            ))}
          </div>
        </div>
      </section>

      {/* {isAuthOpen && (
        <AuthModal
          isOpen={isAuthOpen}
          initialMode={authMode}
          onClose={closeAuthModal}
        />
      )} */}
    </main>
  );
}
