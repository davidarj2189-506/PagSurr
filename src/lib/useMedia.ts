import { useState, useEffect, useCallback } from 'react';
import { POLAROID_GALLERY } from '../data/polaroids';

export interface MediaPhoto {
  id: string | number;
  name: string;
  url: string;
  title: string;
  captionEn: string;
  captionEs: string;
  date: string;
  category: 'kids' | 'family' | 'moments';
  rotation: string;
  tapeStyle: string;
  mtime?: number;
  size?: number;
}

export function useGalleryImages() {
  const [images, setImages] = useState<MediaPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = useCallback(async () => {
    try {
      // 1. Try live API endpoint first (dev server)
      let res = await fetch(`/api/gallery?t=${Date.now()}`);
      if (!res.ok) {
        // 2. Fallback to static manifest (production or cached)
        res = await fetch(`/galeria.json?t=${Date.now()}`);
      }
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setImages(data);
          setError(null);
          setLoading(false);
          return;
        }
      }
      // 3. Fallback to default curated polaroids
      setImages(POLAROID_GALLERY.map(p => ({
        id: p.id,
        name: `polaroid-${p.id}`,
        url: p.url,
        title: p.captionEs,
        captionEn: p.captionEn,
        captionEs: p.captionEs,
        date: p.date,
        category: p.category,
        rotation: p.rotation,
        tapeStyle: p.tapeStyle
      })));
    } catch (err) {
      console.warn('Using default polaroid gallery', err);
      setImages(POLAROID_GALLERY.map(p => ({
        id: p.id,
        name: `polaroid-${p.id}`,
        url: p.url,
        title: p.captionEs,
        captionEn: p.captionEn,
        captionEs: p.captionEs,
        date: p.date,
        category: p.category,
        rotation: p.rotation,
        tapeStyle: p.tapeStyle
      })));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
    // Silently check if new photos were added to public/galeria
    const interval = setInterval(fetchImages, 8000);
    return () => clearInterval(interval);
  }, [fetchImages]);

  return {
    images,
    loading,
    error,
    refresh: fetchImages
  };
}

export function useHeaderImage() {
  const [headerImage, setHeaderImage] = useState<string>('/header/hero-guiones.jpg');
  const [allHeaderImages, setAllHeaderImages] = useState<MediaPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHeader = useCallback(async () => {
    try {
      let res = await fetch(`/api/header?t=${Date.now()}`);
      if (!res.ok) {
        res = await fetch(`/header.json?t=${Date.now()}`);
      }
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setAllHeaderImages(data);
          setHeaderImage(data[0].url);
          setLoading(false);
          return;
        }
      }
      setHeaderImage('/header/hero-guiones.jpg');
    } catch {
      setHeaderImage('/header/hero-guiones.jpg');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHeader();
    const interval = setInterval(fetchHeader, 8000);
    return () => clearInterval(interval);
  }, [fetchHeader]);

  return {
    headerImage,
    allHeaderImages,
    loading,
    refresh: fetchHeader
  };
}
