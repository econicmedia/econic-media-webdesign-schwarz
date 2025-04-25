
import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import CallToAction from '../components/CallToAction';

// Blog-Posts
const blogPosts = [
  {
    id: 1,
    title: "10 Tipps für eine benutzerfreundliche Website",
    excerpt: "Erfahren Sie, wie Sie die Benutzerfreundlichkeit Ihrer Website verbessern und dadurch die Konversionsrate steigern können.",
    date: "03. April 2025",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    author: "Julia Schneider",
    slug: "10-tipps-fuer-eine-benutzerfreundliche-website"
  },
  {
    id: 2,
    title: "Warum ist Responsive Design heute unverzichtbar?",
    excerpt: "Die mobile Internetnutzung wächst stetig. Erfahren Sie, warum ein responsives Webdesign für Ihren Geschäftserfolg essentiell ist.",
    date: "28. März 2025",
    image: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
    author: "Markus Becker",
    slug: "warum-ist-responsive-design-heute-unverzichtbar"
  },
  {
    id: 3,
    title: "SEO-Grundlagen: So werden Sie bei Google gefunden",
    excerpt: "Eine Einführung in die wichtigsten SEO-Maßnahmen, die Ihnen helfen, bei Google besser gefunden zu werden.",
    date: "15. März 2025",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    author: "Thomas Weber",
    slug: "seo-grundlagen-so-werden-sie-bei-google-gefunden"
  },
  {
    id: 4,
    title: "Die Bedeutung von Website-Performance für Ihre Conversion",
    excerpt: "Langsame Ladezeiten können Besucher vertreiben. Lernen Sie, wie Sie die Performance Ihrer Website verbessern können.",
    date: "02. März 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    author: "Sarah Wagner",
    slug: "die-bedeutung-von-website-performance-fuer-ihre-conversion"
  },
  {
    id: 5,
    title: "Content-Strategie: Der Schlüssel zum Online-Erfolg",
    excerpt: "Wie Sie mit einer durchdachten Content-Strategie Ihre Zielgruppe erreichen und zu Kunden konvertieren.",
    date: "18. Februar 2025",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Julia Schneider",
    slug: "content-strategie-der-schluessel-zum-online-erfolg"
  },
  {
    id: 6,
    title: "Die Vorteile von WordPress als CMS für Ihr Unternehmen",
    excerpt: "WordPress ist das meistgenutzte CMS weltweit. Erfahren Sie, welche Vorteile es für Ihr Unternehmen bietet.",
    date: "05. Februar 2025",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Markus Becker",
    slug: "die-vorteile-von-wordpress-als-cms-fuer-ihr-unternehmen"
  }
];

// Blog-Kategorien
const categories = ["Alle", "Webdesign", "SEO", "Performance", "Content", "WordPress", "E-Commerce"];

const BlogPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Unser Blog</h1>
            <p className="text-xl text-gray-300">
              Insights, Tipps und Wissen rund um Web-Design, Entwicklung und Online-Marketing.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map(post => (
                  <BlogPostCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    image={post.image}
                    author={post.author}
                    slug={post.slug}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-1">
                  <button className="px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors">
                    Vorherige
                  </button>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors">
                    Nächste
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-8">
              {/* Search */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Suche</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Suche nach Artikeln..."
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-teal-500 focus:border-teal-500 text-white"
                  />
                  <button className="absolute right-3 top-3 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Kategorien</h3>
                <ul className="space-y-3">
                  {categories.map(category => (
                    <li key={category}>
                      <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Neueste Artikel</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id} className="border-b border-gray-800 pb-3 last:border-b-0 last:pb-0">
                      <a href={`/blog/${post.slug}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                        {post.title}
                      </a>
                      <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-400 mb-4">
                  Abonnieren Sie unseren Newsletter und erhalten Sie regelmäßig neue Artikel und Tipps.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-teal-500 focus:border-teal-500 text-white"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition-colors"
                  >
                    Abonnieren
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction
        title="Haben Sie Fragen zu unseren Dienstleistungen?"
        description="Unser Team steht Ihnen gerne zur Verfügung. Kontaktieren Sie uns noch heute für eine kostenlose Beratung."
      />
    </>
  );
};

export default BlogPage;
