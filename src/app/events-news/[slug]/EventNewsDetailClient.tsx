'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import type { EventNewsDetailItem } from '@/lib/strapi';

interface EventNewsDetailClientProps {
  item: EventNewsDetailItem;
}

export default function EventNewsDetailClient({ item }: EventNewsDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getTypeColor = (type: string) => {
    return type === 'event' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  const gallery = item.gallery && item.gallery.length > 0 ? item.gallery : [item.mainImage || item.thumbnail];

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                {item.type === 'event' ? 'Event' : 'News'}
              </span>
              <span className="text-gray-500 text-sm">{formatDate(item.date)}</span>
            </div>
            <h1 className={`text-4xl font-bold text-gray-900 ${item.subTitle ? 'mb-2' : 'mb-6'}`}>{item.title}</h1>
            {item.subTitle && (
              <p className="text-xl text-gray-600 font-medium mb-6">{item.subTitle}</p>
            )}
            {/* <p className="text-xl text-gray-600 leading-relaxed">{item.description}</p> */}
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-8">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={item.mainImage || item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => setShowGallery(true)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {item.description && (
              <div className="prose prose-lg max-w-none mb-8">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">{item.description}</div>
              </div>
            )}

            {item.gallery && item.gallery.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-xl mb-6">Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {item.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity group"
                      onClick={() => {
                        setSelectedImage(index);
                        setShowGallery(true);
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${item.title} - Image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-96 mb-4">
              <Image
                src={gallery[selectedImage]}
                alt={`${item.title} - Image ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex gap-2 justify-center">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded overflow-hidden ${index === selectedImage ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedImage((selectedImage + 1) % gallery.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
