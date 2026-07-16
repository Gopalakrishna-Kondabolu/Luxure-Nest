import { MetadataRoute } from 'next';
import { properties } from '@/lib/properties';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luxurenest.com'; // Replace with your actual domain

  // Generate dynamic URLs for all properties
  const propertyUrls = properties.map((property) => ({
    url: `${baseUrl}/listings/${property.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...propertyUrls,
  ];
}