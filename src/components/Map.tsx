
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MapProps {
  address?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

const Map = ({ 
  address = "Frankfurt am Main, Germany",
  lat = 50.110921, 
  lng = 8.682125, 
  zoom = 14 
}: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const { toast } = useToast();
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const initializeMap = async () => {
    if (!mapContainer.current || !mapboxToken) return;

    setIsLoading(true);
    
    try {
      // Initialize the map
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Wait for map to load
      await new Promise((resolve) => {
        map.current?.on('load', resolve);
      });

      // Add marker
      marker.current = new mapboxgl.Marker({ color: "#4F46E5" })
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${address}</h3>`))
        .addTo(map.current);

      // Store token in localStorage for future visits
      localStorage.setItem('mapbox_token', mapboxToken);
      setShowTokenInput(false);
      
      toast({
        title: "Map initialized",
        description: "Map has been successfully loaded",
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      toast({
        title: "Map Error",
        description: "Unable to initialize the map. Please check your Mapbox token.",
        variant: "destructive"
      });
      // Clear invalid token
      localStorage.removeItem('mapbox_token');
      setShowTokenInput(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check if token exists in localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
    }
  }, []);

  useEffect(() => {
    if (mapboxToken && !map.current && !showTokenInput) {
      initializeMap();
    }

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken, showTokenInput]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    initializeMap();
  };

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapboxToken(e.target.value);
  };

  const resetToken = () => {
    localStorage.removeItem('mapbox_token');
    setMapboxToken('');
    setShowTokenInput(true);
    
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
  };

  if (showTokenInput) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Mapbox API Token Required</h3>
        <p className="mb-4 text-gray-600">
          To display the map, please enter your Mapbox public token. You can find this in your Mapbox account dashboard.
        </p>
        <form onSubmit={handleTokenSubmit} className="space-y-4">
          <Input
            type="text"
            value={mapboxToken}
            onChange={handleTokenChange}
            placeholder="Enter your Mapbox public token"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-focus-accent"
            required
            disabled={isLoading}
          />
          <Button
            type="submit"
            className="bg-focus-accent hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Initializing..." : "Initialize Map"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px]">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      <div className="absolute top-2 right-12 z-10">
        <Button 
          variant="outline" 
          size="sm"
          onClick={resetToken}
          className="bg-white/80 hover:bg-white"
        >
          Reset Token
        </Button>
      </div>
    </div>
  );
};

export default Map;
